"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { IMAGES, TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  return (
    <section className="overflow-hidden bg-primary">
      <div className="container-custom grid items-center gap-6 py-12 sm:gap-8 sm:py-16 lg:grid-cols-2 lg:py-20">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl sm:aspect-[4/3] lg:aspect-[4/3]">
          <Image
            src={IMAGES.testimonial}
            alt="Mutlu müşteri"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="relative text-white">
          <Quote className="mb-3 h-8 w-8 text-accent sm:mb-4 sm:h-10 sm:w-10" />
          <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">
            Müşterilerimizden Gelen Güven
          </h2>
          <blockquote className="mt-4 text-base italic leading-relaxed text-white/90 sm:mt-6 sm:text-lg">
            &ldquo;{TESTIMONIALS[current].quote}&rdquo;
          </blockquote>
          <p className="mt-4 text-xs font-bold uppercase tracking-widest sm:mt-6 sm:text-sm">
            {TESTIMONIALS[current].author}
          </p>

          <div className="mt-6 flex items-center gap-3 sm:mt-8 sm:gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition active:bg-white/10"
              aria-label="Önceki yorum"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex flex-1 justify-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-accent" : "w-2 bg-white/40"
                  }`}
                  aria-label={`Yorum ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition active:bg-white/10"
              aria-label="Sonraki yorum"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
