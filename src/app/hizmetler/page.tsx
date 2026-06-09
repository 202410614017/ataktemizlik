import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { IMAGES, SERVICES } from "@/lib/constants";
import { Building2, HardHat, Home, Sofa } from "lucide-react";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Ev temizliği, ofis temizliği, inşaat sonrası temizlik, cam temizliği ve daha fazlası. Balıkesir'de profesyonel temizlik hizmetleri.",
};

const iconMap = {
  home: Home,
  building: Building2,
  "hard-hat": HardHat,
  sofa: Sofa,
} as const;

const allServices = [
  ...SERVICES,
  {
    slug: "cam-temizligi",
    title: "Cam Temizliği",
    description:
      "Pırıl pırıl camlar için profesyonel hizmet. Apartman, villa ve ofis cam temizliği.",
    image: IMAGES.windowCleaning,
    icon: "building" as const,
  },
  {
    slug: "apartman-merdiven",
    title: "Apartman ve Merdiven Temizliği",
    description:
      "Apartman ve site ortak alanlarının düzenli ve hijyenik temizliği.",
    image: IMAGES.apartmentCleaning,
    icon: "building" as const,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Hizmetlerimiz" />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <p className="mx-auto max-w-3xl text-center text-sm text-text-muted sm:text-base md:text-lg">
            Balıkesir ve çevresinde hijyenik, sağlıklı ve ferah bir yaşam alanı sunmak
            için buradayız! Profesyonel ekipman ve uzman kadromuzla kapsamlı temizlik
            hizmetleri sağlıyoruz.
          </p>

          <div className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {allServices.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Building2;
              return (
                <Link
                  key={service.slug}
                  href={`/hizmetler/${service.slug}`}
                  className="group block overflow-hidden rounded-2xl bg-white shadow-md transition active:scale-[0.98] sm:hover:shadow-xl"
                >
                  <div className="relative h-44 overflow-hidden sm:h-52">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 sm:group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 sm:mb-3 sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-800 sm:text-lg">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-text-muted sm:mt-2 sm:text-sm">
                      {service.description}
                    </p>
                    <span className="mt-3 inline-block text-xs font-bold uppercase text-primary sm:mt-4 sm:text-sm">
                      Detaylı Bilgi →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
