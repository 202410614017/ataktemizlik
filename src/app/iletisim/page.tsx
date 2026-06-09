import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { SITE } from "@/lib/constants";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "İletişim",
  description: `Atak Temizlik ile iletişime geçin. ${SITE.phone} - ${SITE.address}`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="İletişim" />

      <section className="section-padding bg-section-bg">
        <div className="container-custom">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">Bize Ulaşın</h2>
              <p className="mt-4 text-text-muted">
                Sorularınız ve teklifleriniz için 7/24 buradayız. Formu doldurun veya
                doğrudan arayın.
              </p>

              <div className="mt-8 space-y-6">
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-md transition hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Telefon</p>
                    <p className="text-primary">{SITE.phone}</p>
                  </div>
                </a>

                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-md transition hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <MessageCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">WhatsApp</p>
                    <p className="text-accent">Mesaj Gönder</p>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-md transition hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">E-posta</p>
                    <p className="text-primary">{SITE.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Adres</p>
                    <p className="text-text-muted">{SITE.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Çalışma Saatleri</p>
                    <p className="text-text-muted">{SITE.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
