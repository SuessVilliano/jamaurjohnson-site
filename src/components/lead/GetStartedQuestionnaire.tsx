"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Modal } from "./Modal";
import { useLeadModal } from "./LeadModalContext";
import { GlassButton } from "@/components/ui/GlassButton";
import { trackEvent } from "@/lib/analytics";
import {
  BRANCHES,
  PATHS,
  SHARED_QUESTION,
  type Answers,
  type PathId,
  type Question,
} from "@/lib/questionnaire";

type Phase = "path" | "questions" | "recommendation" | "contact" | "success";

const TRANSITION = { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const };

export function GetStartedQuestionnaire() {
  const { view, close } = useLeadModal();
  const open = view === "questionnaire";

  const [phase, setPhase] = useState<Phase>("path");
  const [path, setPath] = useState<PathId | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [recommendation, setRecommendation] = useState("");
  const [recStatus, setRecStatus] = useState<"idle" | "streaming" | "done" | "error">("idle");
  const [contact, setContact] = useState({ name: "", email: "", phone: "", company: "" });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const branch = useMemo<Question[]>(
    () => (path ? [...BRANCHES[path], SHARED_QUESTION] : []),
    [path],
  );
  const currentQuestion = branch[questionIndex];

  const totalSteps = 1 + branch.length + 2; // path + branch questions + rec + contact
  const currentStep =
    phase === "path"
      ? 1
      : phase === "questions"
        ? 2 + questionIndex
        : phase === "recommendation"
          ? 2 + branch.length
          : phase === "contact"
            ? 3 + branch.length
            : totalSteps;

  function reset() {
    setPhase("path");
    setPath(null);
    setQuestionIndex(0);
    setAnswers({});
    setRecommendation("");
    setRecStatus("idle");
    setContact({ name: "", email: "", phone: "", company: "" });
    setSubmitStatus("idle");
    setSubmitError(null);
  }

  function handleClose() {
    if (submitStatus === "submitting") return;
    close();
    setTimeout(reset, 400);
  }

  function pickPath(p: PathId) {
    setPath(p);
    setQuestionIndex(0);
    setPhase("questions");
  }

  function setAnswer(id: string, value: string | string[] | undefined) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function answerComplete(q: Question, value: string | string[] | undefined): boolean {
    if (!q.required) return true;
    if (value === undefined || value === null) return false;
    if (Array.isArray(value)) return value.length > 0;
    return value.trim().length > 0;
  }

  function nextQuestion() {
    if (questionIndex < branch.length - 1) {
      setQuestionIndex((i) => i + 1);
    } else {
      setPhase("recommendation");
    }
  }

  function prevStep() {
    if (phase === "questions") {
      if (questionIndex > 0) setQuestionIndex((i) => i - 1);
      else {
        setPhase("path");
        setPath(null);
      }
      return;
    }
    if (phase === "recommendation") {
      setPhase("questions");
      setQuestionIndex(branch.length - 1);
      return;
    }
    if (phase === "contact") {
      setPhase("recommendation");
      return;
    }
  }

  // Stream the AI recommendation when entering that phase.
  const fetchedFor = useRef<string | null>(null);
  useEffect(() => {
    if (phase !== "recommendation" || !path) return;
    const key = JSON.stringify({ path, answers });
    if (fetchedFor.current === key) return;
    fetchedFor.current = key;

    setRecommendation("");
    setRecStatus("streaming");

    const ac = new AbortController();
    (async () => {
      try {
        const res = await fetch("/api/recommendation", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ path, answers }),
          signal: ac.signal,
        });
        if (!res.ok || !res.body) throw new Error("Recommendation request failed");
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          setRecommendation((prev) => prev + decoder.decode(value, { stream: true }));
        }
        setRecStatus("done");
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setRecStatus("error");
      }
    })();
    return () => ac.abort();
  }, [phase, path, answers]);

  async function submitContact(e: React.FormEvent) {
    e.preventDefault();
    if (!path || !contact.name.trim() || !contact.email.trim()) return;
    setSubmitStatus("submitting");
    setSubmitError(null);
    try {
      const res = await fetch("/api/questionnaire", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          path,
          answers,
          name: contact.name,
          email: contact.email,
          phone: contact.phone || undefined,
          company: contact.company || undefined,
          recommendation: recommendation || undefined,
          pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json?.error ?? "Submission failed");
      trackEvent("questionnaire_submit", {
        event_category: "lead",
        event_label: path ?? "unknown",
        path: path ?? undefined,
      });
      setSubmitStatus("idle");
      setPhase("success");
    } catch (err) {
      setSubmitStatus("error");
      setSubmitError(err instanceof Error ? err.message : "Submission failed");
    }
  }

  const headline = useMemo(() => {
    switch (phase) {
      case "path":
        return "What brings you here?";
      case "questions":
        return currentQuestion?.prompt ?? "";
      case "recommendation":
        return "Here's what Jamaur recommends";
      case "contact":
        return "Lock in your next step";
      case "success":
        return "You're in.";
    }
  }, [phase, currentQuestion]);

  return (
    <Modal open={open} onClose={handleClose} ariaLabel="Get started" maxWidth="max-w-2xl">
      <div className="flex flex-col gap-6">
        <Header
          phase={phase}
          headline={headline}
          helper={phase === "questions" ? currentQuestion?.helper : undefined}
          currentStep={currentStep}
          totalSteps={totalSteps}
          onBack={
            phase === "questions" || phase === "recommendation" || phase === "contact"
              ? prevStep
              : null
          }
        />

        <AnimatePresence mode="wait">
          {phase === "path" && (
            <motion.div
              key="path"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={TRANSITION}
              className="grid gap-3 sm:grid-cols-2"
            >
              {PATHS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => pickPath(p.id)}
                  className="group text-left rounded-2xl glass border border-white/8 p-4 hover:border-cyan-300/40 hover:bg-white/5 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400/25 to-violet-500/25 inline-flex items-center justify-center text-cyan-200 text-lg">
                      {p.glyph}
                    </div>
                    <div className="text-sm font-semibold text-white">{p.label}</div>
                  </div>
                  <p className="mt-2 text-xs text-white/55 leading-relaxed">{p.description}</p>
                </button>
              ))}
            </motion.div>
          )}

          {phase === "questions" && currentQuestion && (
            <motion.div
              key={`q-${currentQuestion.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={TRANSITION}
            >
              <QuestionField
                question={currentQuestion}
                value={answers[currentQuestion.id]}
                onChange={(v) => setAnswer(currentQuestion.id, v)}
              />
              <div className="mt-6 flex items-center justify-between gap-3">
                <p className="text-[11px] text-white/40">
                  Step {currentStep} of {totalSteps}
                </p>
                <GlassButton
                  onClick={nextQuestion}
                  size="md"
                  variant="primary"
                  disabled={!answerComplete(currentQuestion, answers[currentQuestion.id])}
                >
                  {questionIndex < branch.length - 1 ? "Next" : "Get my recommendation →"}
                </GlassButton>
              </div>
            </motion.div>
          )}

          {phase === "recommendation" && (
            <motion.div
              key="rec"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={TRANSITION}
            >
              <div className="rounded-2xl glass border border-white/10 p-5 min-h-[180px] relative">
                <div className="text-[10px] uppercase tracking-[0.3em] text-cyan-300/80 mb-3">
                  ✦ JAMAUR · AI Concierge
                </div>
                {recStatus === "streaming" && recommendation.length === 0 && (
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white/60 animate-bounce" />
                    <span className="h-2 w-2 rounded-full bg-white/60 animate-bounce [animation-delay:0.15s]" />
                    <span className="h-2 w-2 rounded-full bg-white/60 animate-bounce [animation-delay:0.3s]" />
                  </div>
                )}
                <div className="text-sm text-white/85 leading-relaxed whitespace-pre-wrap">
                  {recommendation}
                  {recStatus === "streaming" && recommendation.length > 0 && (
                    <span className="ml-0.5 inline-block h-3.5 w-1.5 bg-cyan-300 animate-pulse align-middle" />
                  )}
                </div>
                {recStatus === "error" && recommendation.length === 0 && (
                  <p className="text-sm text-red-300/80">
                    The concierge isn&apos;t responding right now — go ahead and share your info
                    and Jamaur will reply directly.
                  </p>
                )}
              </div>
              <div className="mt-6 flex items-center justify-between gap-3">
                <p className="text-[11px] text-white/40 max-w-xs">
                  This is a personalized starting point. The full plan comes on the call.
                </p>
                <GlassButton
                  onClick={() => setPhase("contact")}
                  size="md"
                  variant="primary"
                  disabled={recStatus === "streaming"}
                >
                  Lock in next step →
                </GlassButton>
              </div>
            </motion.div>
          )}

          {phase === "contact" && (
            <motion.form
              key="contact"
              onSubmit={submitContact}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={TRANSITION}
              className="flex flex-col gap-4"
            >
              <p className="text-sm text-white/65">
                Drop your details and Jamaur will personally reach out with the next step
                based on what you shared.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <ContactField
                  label="Name *"
                  value={contact.name}
                  onChange={(v) => setContact((c) => ({ ...c, name: v }))}
                  required
                />
                <ContactField
                  label="Email *"
                  type="email"
                  value={contact.email}
                  onChange={(v) => setContact((c) => ({ ...c, email: v }))}
                  required
                />
                <ContactField
                  label="Phone"
                  type="tel"
                  value={contact.phone}
                  onChange={(v) => setContact((c) => ({ ...c, phone: v }))}
                />
                <ContactField
                  label="Company / Brand"
                  value={contact.company}
                  onChange={(v) => setContact((c) => ({ ...c, company: v }))}
                />
              </div>
              {submitError && (
                <div className="rounded-xl bg-red-500/10 border border-red-400/30 px-4 py-2 text-sm text-red-200">
                  {submitError}
                </div>
              )}
              <div className="flex items-center justify-between gap-3 pt-1">
                <p className="text-[11px] text-white/40">
                  Replies come from Jamaur directly. No spam.
                </p>
                <GlassButton
                  variant="primary"
                  size="md"
                  disabled={
                    !contact.name.trim() ||
                    !contact.email.trim() ||
                    submitStatus === "submitting"
                  }
                >
                  {submitStatus === "submitting" ? "Sending..." : "Send it"}
                </GlassButton>
              </div>
            </motion.form>
          )}

          {phase === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={TRANSITION}
              className="py-6 text-center"
            >
              <div className="mx-auto mb-5 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-3xl">
                ✓
              </div>
              <p className="text-white/75 max-w-md mx-auto leading-relaxed">
                Got it. Jamaur will review what you shared and reach back out at{" "}
                <span className="text-white">{contact.email}</span> with a tailored next
                step.
              </p>
              <div className="mt-7">
                <GlassButton onClick={handleClose} size="md" variant="ghost">
                  Close
                </GlassButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Modal>
  );
}

function Header({
  phase,
  headline,
  helper,
  currentStep,
  totalSteps,
  onBack,
}: {
  phase: Phase;
  headline: string;
  helper?: string;
  currentStep: number;
  totalSteps: number;
  onBack: (() => void) | null;
}) {
  const progress = phase === "success" ? 1 : Math.min(currentStep / totalSteps, 1);
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/75">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          {phase === "success" ? "Done" : "Get Started"}
        </div>
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="text-[11px] text-white/45 hover:text-white/80 transition-colors"
          >
            ← Back
          </button>
        )}
      </div>
      <h3
        className="mt-3 text-2xl sm:text-3xl text-gradient font-semibold leading-tight"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        {headline}
      </h3>
      {helper && <p className="mt-2 text-sm text-white/55">{helper}</p>}
      {phase !== "success" && (
        <div className="mt-4 h-[3px] rounded-full bg-white/8 overflow-hidden">
          <motion.div
            initial={false}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-full bg-gradient-to-r from-cyan-400 to-violet-500"
          />
        </div>
      )}
    </div>
  );
}

function QuestionField({
  question,
  value,
  onChange,
}: {
  question: Question;
  value: string | string[] | undefined;
  onChange: (v: string | string[] | undefined) => void;
}) {
  const select = useCallback(
    (v: string) => {
      if (question.kind === "single") onChange(v);
    },
    [question.kind, onChange],
  );

  if (question.kind === "single") {
    const selected = typeof value === "string" ? value : undefined;
    return (
      <div className="grid gap-2.5 sm:grid-cols-2">
        {question.options.map((o) => {
          const active = selected === o.value;
          return (
            <button
              type="button"
              key={o.value}
              onClick={() => select(o.value)}
              className={`text-left rounded-xl border px-4 py-3 text-sm transition-all ${
                active
                  ? "border-cyan-300/60 bg-gradient-to-br from-cyan-400/15 to-violet-500/15 text-white shadow-[0_10px_30px_-15px_rgba(78,224,255,0.55)]"
                  : "border-white/8 glass text-white/80 hover:border-white/25 hover:bg-white/5"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span>{o.label}</span>
                {active && <span className="text-cyan-300 text-xs">✓</span>}
              </div>
              {o.description && (
                <p className="mt-1 text-xs text-white/50">{o.description}</p>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  if (question.kind === "multi") {
    const selected = Array.isArray(value) ? value : [];
    const max = question.max ?? Infinity;
    const toggle = (v: string) => {
      if (selected.includes(v)) {
        onChange(selected.filter((s) => s !== v));
      } else if (selected.length < max) {
        onChange([...selected, v]);
      }
    };
    return (
      <div className="grid gap-2.5 sm:grid-cols-2">
        {question.options.map((o) => {
          const active = selected.includes(o.value);
          const disabled = !active && selected.length >= max;
          return (
            <button
              type="button"
              key={o.value}
              onClick={() => toggle(o.value)}
              disabled={disabled}
              className={`text-left rounded-xl border px-4 py-3 text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed ${
                active
                  ? "border-cyan-300/60 bg-gradient-to-br from-cyan-400/15 to-violet-500/15 text-white"
                  : "border-white/8 glass text-white/80 hover:border-white/25 hover:bg-white/5"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span>{o.label}</span>
                {active && <span className="text-cyan-300 text-xs">✓</span>}
              </div>
            </button>
          );
        })}
      </div>
    );
  }

  // text
  const textValue = typeof value === "string" ? value : "";
  return question.multiline ? (
    <textarea
      autoFocus
      value={textValue}
      onChange={(e) => onChange(e.target.value)}
      placeholder={question.placeholder}
      rows={4}
      className="w-full rounded-2xl glass border-0 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 resize-none"
    />
  ) : (
    <input
      autoFocus
      value={textValue}
      onChange={(e) => onChange(e.target.value)}
      placeholder={question.placeholder}
      className="w-full h-12 rounded-2xl glass border-0 px-4 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
    />
  );
}

function ContactField({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-white/55 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full h-11 rounded-2xl glass border-0 px-4 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
      />
    </div>
  );
}
