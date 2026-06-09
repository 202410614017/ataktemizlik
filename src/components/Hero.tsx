"use client";

import Image from "next/image";
import Link from "next/link";
import { IMAGES, SITE } from "@/lib/constants";
import QuoteForm from "./QuoteForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <Image
        src={IMAGES.hero}
        alt="Profesyonel temizlik hizmeti"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/80 to-navy/70 lg:bg-gradient-to-r lg:from-navy/95 lg:via-navy/75 lg:to-navy/30" />

      <div className="container-custom relative grid items-center gap-8 py-10 sm:gap-10 sm:py-14 lg:min-h-[580px] lg:grid-cols-12 lg:gap-10 lg:py-16">
        <div className="hero-content lg:col-span-7">
          <span className="inline-block max-w-full rounded-full bg-accent/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-widest">
            {SITE.city}&apos;in Güvenilir Temizlik Markası
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:mt-5 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            {SITE.city}&apos;in En İyi{" "}
            <span className="heading-underline">Temizlik Şirketi</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:mt-5 sm:text-base md:text-lg">
            Ev, ofis, apartman ve inşaat sonrası temizlikte profesyonel ekip, çevre dostu
            ürünler ve %100 memnuniyet garantisi ile hizmetinizdeyiz.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/hizmetler" className="btn-primary w-full sm:w-auto">
              Hizmetlerimiz
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent w-full sm:w-auto"
            >
              Teklif Al
            </a>
          </div>
          <div className="mt-6 flex flex-col gap-2 text-xs text-white/70 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4 sm:text-sm">
            <span>✓ 5+ Yıl Tecrübe</span>
            <span>✓ 498+ Memnun Müşteri</span>
            <span>✓ 7/24 Destek</span>
          </div>
        </div>

        <div className="hero-form lg:col-span-5">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
