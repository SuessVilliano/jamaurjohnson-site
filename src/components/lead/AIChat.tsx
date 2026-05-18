"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useBookCall } from "./BookCallContext";
import { GlassButton } from "@/components/ui/GlassButton";

const STARTERS = [
  "What does Jamaur do exactly?",
  "I'm a trader — how can he help?",
  "Tell me about the LIV8 ecosystem",
  "I'm a founder looking for AI automation",
];

export function AIChat() {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(true);
  const [input, setInput] = useState("");
  const { openModal: openBookCall } = useBookCall();
  const scrollRef = useRef<HTMLDivElement>(null);

  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/chat" }), []);

  const { messages, sendMessage, status, error } = useChat({
    transport,
    messages: [
      {
        id: "intro",
        role: "assistant",
        parts: [
          {
            type: "text",
            text: "Hey — I'm JAMAUR's assistant. I can show you around the ecosystem (LIV8, Hybrid, music, books) and figure out how Jamaur can actually help you.\n\nWhat brought you here today?",
          },
        ],
      },
    ],
  });

  useEffect(() => {
    if (open) setPulse(false);
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  const isLoading = status === "submitted" || status === "streaming";

  function handleSend(text: string) {
    if (!text.trim() || isLoading) return;
    sendMessage({ text });
    setInput("");
  }

  return (
    <>
      <motion.button
        aria-label="Open AI chat"
        onClick={() => setOpen((v) => !v)}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[110] h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 shadow-[0_20px_60px_-10px_rgba(78,224,255,0.55)] inline-flex items-center justify-center text-white"
      >
        {pulse && !open && (
          <span className="absolute inset-0 rounded-full bg-cyan-400/40 animate-ping" />
        )}
        <span className="relative text-2xl">{open ? "✕" : "✦"}</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-3 left-3 sm:left-auto sm:right-7 z-[105] w-auto sm:w-[400px] h-[72vh] sm:h-[600px] rounded-3xl glass-strong border border-white/10 shadow-[0_30px_120px_-20px_rgba(0,0,0,0.7)] flex flex-col overflow-hidden"
          >
            <div className="flex items-center gap-3 p-4 border-b border-white/8">
              <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-white">
                ✦
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 border-2 border-[#0f121b]" />
              </div>
              <div className="min-w-0">
                <div
                  className="text-sm font-semibold text-white"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  JAMAUR · Assistant
                </div>
                <div className="text-[11px] text-white/55">
                  Talk to me — I&apos;ll figure out how Jamaur can help.
                </div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m) => (
                <MessageBubble key={m.id} role={m.role}>
                  {m.parts.map((p, i) =>
                    p.type === "text" ? (
                      <span key={i} className="whitespace-pre-wrap">
                        {p.text}
                      </span>
                    ) : null,
                  )}
                </MessageBubble>
              ))}

              {isLoading && (
                <MessageBubble role="assistant">
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60 animate-bounce" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:0.15s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:0.3s]" />
                  </span>
                </MessageBubble>
              )}

              {error && (
                <MessageBubble role="assistant">
                  <span className="text-red-300 text-xs">
                    Hmm, the assistant isn&apos;t responding right now. Want to{" "}
                    <button
                      onClick={() => {
                        setOpen(false);
                        openBookCall();
                      }}
                      className="underline"
                    >
                      book a call
                    </button>{" "}
                    instead?
                  </span>
                </MessageBubble>
              )}

              {messages.length <= 1 && !isLoading && (
                <div className="pt-2 flex flex-wrap gap-2">
                  {STARTERS.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSend(s)}
                      className="text-[11px] rounded-full glass px-3 py-1.5 text-white/75 hover:bg-white/10 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {messages.length > 2 && (
                <div className="pt-3">
                  <GlassButton
                    onClick={() => {
                      setOpen(false);
                      openBookCall();
                    }}
                    size="sm"
                    variant="primary"
                    className="w-full"
                  >
                    Book a call with Jamaur →
                  </GlassButton>
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-3 border-t border-white/8 flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 h-11 rounded-full glass border-0 px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send"
                className="h-11 w-11 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
              >
                ↑
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MessageBubble({
  role,
  children,
}: {
  role: "user" | "assistant" | "system";
  children: React.ReactNode;
}) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "bg-gradient-to-br from-cyan-400/85 to-violet-500/85 text-white rounded-br-md"
            : "bg-white/8 text-white/90 rounded-bl-md border border-white/8"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
