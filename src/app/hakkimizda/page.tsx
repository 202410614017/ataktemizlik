import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import CTASection from "@/components/CTASection";
import { IMAGES, SITE } from "@/lib/constants";
import { CircleDot, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: `Atak Temizlik - ${SITE.city}'in güvenilir temizlik firması. Profesyonel ekibimiz ve müşteri memnuniyeti odaklı hizmet anlayışımız.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Hakkımızda"
        image={IMAGES.team}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
                {SITE.city}&apos;in Güvenilir Temizlik Firması
              </h2>
              <p className="mt-4 leading-relaxed text-text-muted">
                Atak Temizlik Hizmetleri, beş yıldır Balıkesir ve çevresinde profesyonel
                temizlik hizmetleri sunmaktadır. Uzman ekibimizle, güvenilir ve etkili
                çözümler sağlayarak müşteri memnuniyetini ön planda tutan çalışmalar
                gerçekleştirmekteyiz.
              </p>
              <p className="mt-4 leading-relaxed text-text-muted">
                Şirketimiz, çevre dostu temizlik ürünleri ve profesyonel ekipmanlar
                kullanarak hijyen standartlarını en üst seviyeye çıkarmakta, ev, iş yeri,
                villa, apartman ve endüstriyel tesisler için özel temizlik hizmetleri
                sunmaktadır.
              </p>
            </div>
            <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl lg:order-2">
              <Image
                src={IMAGES.homeCleaning}
                alt="Temizlik ekibi"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-16 sm:gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 text-center shadow-lg sm:p-8">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CircleDot className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Vizyonumuz</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                Sağlıklı, hijyenik ve güvenli yaşam alanları sunarak temizlik sektöründe
                öncü bir marka olmak. Müşterilerimize en yüksek kalitede hizmet sunarak
                sektörde lider konuma ulaşmak.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-lg sm:p-8">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Hedefimiz</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                Balıkesir ve çevresinde profesyonel ekibimiz ve bilimsel yöntemlerle
                müşterilerimize güvenilir temizlik hizmetleri sunmak. %100 müşteri
                memnuniyeti ile sektörde fark yaratmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center bg-primary p-8 sm:p-12 lg:p-16">
            <div className="text-white">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Temizlik Sektörüne Profesyonellik Katıyoruz
              </h2>
              <p className="mt-4 leading-relaxed text-white/90">
                Atak Temizlik olarak Balıkesir&apos;de yüksek standartlarda temizlik
                hizmetleri sunuyoruz. Profesyonel ekibimiz, modern ekipmanlarımız ve
                müşteri odaklı yaklaşımımızla fark yaratıyoruz.
              </p>
              <Link href="/iletisim" className="btn-accent mt-6 w-full sm:mt-8 sm:w-auto">
                Teklif Al
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[350px]">
            <Image
              src={IMAGES.aboutOffice}
              alt="Ofis temizliği"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <WhyUs />
      <Testimonials />
      <Process />
      <CTASection />
    </>
  );
}
