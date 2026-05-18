"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BOOKS } from "@/lib/portfolio-data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassButton } from "@/components/ui/GlassButton";

function BookCover({ cover, title }: { cover: string; title: string }) {
  return (
    <motion.div
      whileHover={{ rotateY: 8, rotateX: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]"
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      <Image
        src={cover}
        alt={`${title} — book cover`}
        fill
        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
        className="object-cover"
      />
      {/* Spine shadow + edge sheen for a physical-book feel */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/45 to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
    </motion.div>
  );
}

export function BooksSection() {
  return (
    <section id="books" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Books World"
          title="A Library Engineered to Upgrade You"
          description="Seven books across philosophy, trading, consciousness, and the future. Premium editions arriving soon."
        />

        <div className="grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {BOOKS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group flex flex-col gap-4"
            >
              <BookCover cover={b.cover} title={b.title} />
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                  {b.category}
                </div>
                <h3 className="mt-1 text-base sm:text-lg font-semibold text-white">
                  {b.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-white/55 leading-relaxed line-clamp-3">
                  {b.description}
                </p>
                <div className="mt-3 inline-flex items-center gap-2 text-xs text-cyan-300/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(78,224,255,0.7)]" />
                  {b.status}
                </div>
                <div className="mt-4">
                  <GlassButton size="sm" variant="soft" href="#contact">
                    Learn More
                  </GlassButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
