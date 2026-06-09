import FadeIn from "./FadeIn";
import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="border-y border-slate-100 bg-white py-10 sm:py-14">
      <div className="container-custom">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 60} className="text-center">
              <p className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs text-text-muted sm:mt-2 sm:text-sm">{stat.label}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
