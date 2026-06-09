import Image from "next/image";
import Link from "next/link";
import { Building2, HardHat, Home, Sofa } from "lucide-react";
import FadeIn from "./FadeIn";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  home: Home,
  building: Building2,
  "hard-hat": HardHat,
  sofa: Sofa,
} as const;

export default function Services() {
  return (
    <section className="section-padding bg-section-bg">
      <div className="container-custom">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
            Balıkesir Temizlik Hizmetleri
          </h2>
          <p className="mt-3 text-sm text-text-muted sm:mt-4 sm:text-base">
            İhtiyacınıza özel profesyonel temizlik çözümleri. Hijyen ve konforu bir arada
            sunuyoruz.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <FadeIn key={service.slug} delay={i * 80}>
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl bg-white shadow-md transition active:scale-[0.98] sm:hover:-translate-y-1 sm:hover:shadow-xl"
                >
                  <div className="relative h-40 overflow-hidden sm:h-44">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 sm:mb-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 sm:text-base">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-xs text-text-muted sm:mt-2 sm:text-sm">
                      {service.description}
                    </p>
                    <span className="mt-2 inline-block text-xs font-bold uppercase text-primary sm:mt-3">
                      Detaylı Bilgi →
                    </span>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-8 text-center sm:mt-10">
          <Link href="/hizmetler" className="btn-primary w-full sm:w-auto">
            Tüm Hizmetlerimiz
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
