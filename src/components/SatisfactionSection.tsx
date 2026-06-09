import Image from "next/image";
import Link from "next/link";
import { BadgePercent, ShieldCheck, Sparkles, Users } from "lucide-react";
import FadeIn from "./FadeIn";
import { FEATURES, IMAGES } from "@/lib/constants";

const iconMap = {
  users: Users,
  sparkles: Sparkles,
  "badge-percent": BadgePercent,
  "shield-check": ShieldCheck,
} as const;

export default function SatisfactionSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={IMAGES.satisfaction}
                alt="Temizlik ekibi"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <h2 className="text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
              Müşteri Memnuniyeti Garantisi
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-muted sm:mt-4 sm:text-base">
              Atak Temizlik olarak sunduğumuz hizmetlerde %100 memnuniyet garantisi
              veriyoruz. Memnun kalmazsanız ücretsiz tekrar hizmet sunuyoruz.
            </p>
            <Link
              href="/hakkimizda"
              className="mt-3 inline-block text-sm font-bold uppercase tracking-wide text-primary active:underline sm:mt-4"
            >
              Bizi Yakından Tanıyın →
            </Link>

            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">
              {FEATURES.map((feature) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap];
                return (
                  <div
                    key={feature.title}
                    className="rounded-xl border border-slate-100 bg-slate-50/80 p-4"
                  >
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 sm:mb-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 sm:text-base">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-text-muted sm:text-sm">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
