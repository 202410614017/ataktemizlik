import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import CTASection from "@/components/CTASection";
import { IMAGES, SERVICES, SITE } from "@/lib/constants";
import { Check } from "lucide-react";

const allServices = [
  ...SERVICES,
  {
    slug: "cam-temizligi",
    title: "Cam Temizliği",
    description:
      "Pırıl pırıl camlar için profesyonel hizmet. Apartman, villa ve ofis cam temizliği.",
    image: IMAGES.windowCleaning,
    icon: "building",
    details: [
      "İç ve dış cam temizliği",
      "Apartman ve bina cephe cam temizliği",
      "Vitrin ve mağaza cam temizliği",
      "Güvenli ekipman ve profesyonel ekip",
    ],
  },
  {
    slug: "apartman-merdiven",
    title: "Apartman ve Merdiven Temizliği",
    description:
      "Apartman ve site ortak alanlarının düzenli ve hijyenik temizliği.",
    image: IMAGES.apartmentCleaning,
    icon: "building",
    details: [
      "Merdiven ve sahanlık temizliği",
      "Asansör ve ortak alan temizliği",
      "Düzenli periyodik temizlik",
      "Site ve apartman yönetimlerine özel paketler",
    ],
  },
].map((s) => ({
  ...s,
  details: "details" in s ? s.details : [
    "Profesyonel ekip ve ekipman",
    "Çevre dostu temizlik ürünleri",
    "Uygun fiyat garantisi",
    "%100 müşteri memnuniyeti",
  ],
}));

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);
  if (!service) return { title: "Hizmet Bulunamadı" };
  return {
    title: service.title,
    description: `${service.description} - ${SITE.name}, ${SITE.city}`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero title={service.title} image={service.image} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">{service.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">
                {service.description}
              </p>

              <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl sm:mt-8 sm:aspect-[16/9]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>

              <h3 className="mt-10 text-xl font-bold text-slate-800">
                Hizmet Kapsamımız
              </h3>
              <ul className="mt-4 space-y-3">
                {service.details.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded bg-primary">
                      <Check className="h-4 w-4 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 leading-relaxed text-text-muted">
                {SITE.city} ve çevresinde {service.title.toLowerCase()} hizmetimizle
                yaşam alanlarınızı profesyonelce temizliyor, hijyen standartlarını en üst
                seviyeye çıkarıyoruz. Ücretsiz keşif ve fiyat teklifi için hemen bizimle
                iletişime geçin.
              </p>

              <Link href="/iletisim" className="btn-primary mt-6 w-full sm:mt-8 sm:w-auto">
                Teklif Alın
              </Link>
            </div>

            <div className="lg:sticky lg:top-24 lg:self-start">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
