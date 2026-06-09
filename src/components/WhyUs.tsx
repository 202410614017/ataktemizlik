import Image from "next/image";
import { Check } from "lucide-react";
import FadeIn from "./FadeIn";
import { IMAGES, WHY_US } from "@/lib/constants";

export default function WhyUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
          <FadeIn className="order-2 lg:order-1">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
              Neden Atak Temizlik?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-muted sm:mt-4 sm:text-base">
              Balıkesir&apos;de bütçenizi sarsmadan kaliteli temizlik hizmeti sunuyoruz.
              Müşteri memnuniyeti her zaman önceliğimizdir.
            </p>
            <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              {WHY_US.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-semibold text-slate-800 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={120} className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={IMAGES.handsCleaning}
                alt="Profesyonel temizlik"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
