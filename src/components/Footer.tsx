import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  const serviceLinks = NAV_LINKS[2].children ?? [];

  return (
    <footer className="bg-footer-bg text-white">
      <div className="py-10 sm:py-14">
        <div className="container-custom">
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <Logo className="brightness-0 invert" />
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:mt-6">
                Atak Temizlik olarak, sunduğumuz temizlik hizmetlerinde %100 memnuniyet
                garantisi veriyoruz. Memnun kalmazsanız tekrar hizmet sunmaktan mutluluk
                duyarız!
              </p>
            </div>

            <div>
              <h4 className="mb-3 text-base font-bold sm:mb-4 sm:text-lg">İletişim</h4>
              <ul className="space-y-2.5 text-sm text-white/70 sm:space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" />
                  <span>{SITE.address}</span>
                </li>
                <li>
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="flex min-h-10 items-center gap-3 active:text-white"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-primary-light" />
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex min-h-10 items-center gap-3 break-all active:text-white"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-primary-light" />
                    {SITE.email}
                  </a>
                </li>
              </ul>
              <h4 className="mb-2 mt-5 font-bold sm:mt-6">Çalışma Saatleri</h4>
              <p className="flex items-center gap-2 text-sm text-white/70">
                <Clock className="h-4 w-4 shrink-0 text-primary-light" />
                {SITE.workingHours}
              </p>
            </div>

            <div>
              <h4 className="mb-3 text-base font-bold sm:mb-4 sm:text-lg">Hizmetlerimiz</h4>
              <ul className="space-y-2 text-sm text-white/70">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="block min-h-9 py-0.5 active:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-base font-bold sm:mb-4 sm:text-lg">Hızlı Linkler</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="/" className="block min-h-9 py-0.5 active:text-white">
                    Anasayfa
                  </Link>
                </li>
                <li>
                  <Link href="/hakkimizda" className="block min-h-9 py-0.5 active:text-white">
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetler" className="block min-h-9 py-0.5 active:text-white">
                    Hizmetlerimiz
                  </Link>
                </li>
                <li>
                  <Link href="/iletisim" className="block min-h-9 py-0.5 active:text-white">
                    İletişim
                  </Link>
                </li>
              </ul>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent mt-5 inline-flex text-xs sm:mt-6"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <div className="container-custom flex flex-col items-center justify-between gap-3 text-center text-xs text-white/60 sm:flex-row sm:gap-2 sm:text-left">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="#" className="min-h-9 py-1 active:text-white">
              Kullanım Koşulları
            </Link>
            <Link href="#" className="min-h-9 py-1 active:text-white">
              Gizlilik ve Çerez Politikası
            </Link>
          </div>
          <p>© {new Date().getFullYear()} Bütün hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
