import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import FadeIn from "./FadeIn";
import { IMAGES, SITE } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="container-custom">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <FadeIn className="py-10 text-white sm:py-14 lg:py-20">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Temizlik hizmeti mi arıyorsunuz?
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/90 sm:mt-4 sm:text-base">
              Ücretsiz keşif ve fiyat teklifi için hemen bizimle iletişime geçin. Profesyonel
              ekibimiz en kısa sürede size dönüş yapacaktır.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/iletisim" className="btn-accent w-full sm:w-auto">
                Teklif Al
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-md border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition active:bg-white/10 sm:w-auto"
              >
                Hemen Ara
              </a>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-8">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex min-h-11 items-center gap-2 break-all text-sm text-white/90 active:text-white"
              >
                <Phone className="h-5 w-5 shrink-0" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex min-h-11 items-center gap-2 break-all text-sm text-white/90 active:text-white"
              >
                <Mail className="h-5 w-5 shrink-0" />
                {SITE.email}
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={100} className="relative aspect-[4/3] lg:aspect-auto lg:h-[380px]">
            <Image
              src={IMAGES.ctaTeam}
              alt="Temizlik ekibi"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-t-2xl object-cover lg:rounded-tl-[60px] lg:rounded-tr-none"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
