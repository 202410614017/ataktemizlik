import Image from "next/image";
import { Calendar, ClipboardCheck, SprayCan } from "lucide-react";
import FadeIn from "./FadeIn";
import { IMAGES, PROCESS_STEPS } from "@/lib/constants";

const iconMap = {
  clipboard: ClipboardCheck,
  calendar: Calendar,
  spray: SprayCan,
} as const;

export default function Process() {
  return (
    <section className="relative section-padding overflow-hidden">
      <Image
        src={IMAGES.processBg}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-navy/88" />

      <div className="container-custom relative">
        <FadeIn className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Kolayca Temizlik Teklifi Alın
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-white/70 sm:mt-3 sm:text-base">
            3 basit adımda temizlik hizmetinizi planlayın
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <FadeIn key={step.title} delay={i * 100}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm sm:p-8">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 sm:mb-4 sm:h-14 sm:w-14">
                    <Icon className="h-6 w-6 text-accent sm:h-7 sm:w-7" />
                  </div>
                  <span className="text-xs font-bold text-accent">Adım {i + 1}</span>
                  <h3 className="mt-1.5 text-base font-bold text-white sm:mt-2 sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-white/70 sm:mt-2 sm:text-sm">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
