import { ARTICLE } from "@/lib/perspective-content";

export function OpeningArticle() {
  return (
    <article id="insights" className="prose-editorial max-w-none">
      <p
        className="text-balance text-2xl leading-[1.25] text-[#f4ede0] sm:text-3xl md:text-[34px]"
        style={{ fontFamily: "var(--font-editorial)" }}
      >
        {ARTICLE.leadParagraph}
      </p>

      <div className="mt-10 space-y-6 text-[17px] leading-[1.75] text-[#f4ede0]/80">
        {ARTICLE.body.map((p, i) => (
          <p
            key={i}
            className={i === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-[#c2a567]" : undefined}
          >
            {p}
          </p>
        ))}
      </div>
    </article>
  );
}
