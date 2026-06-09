import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SplashScreen from "@/components/SplashScreen";
import { SITE } from "@/lib/constants";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1e4a9a",
};

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | ${SITE.city} Profesyonel Temizlik Hizmetleri`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Balıkesir'de ev temizliği, ofis temizliği, inşaat sonrası temizlik ve daha fazlası. Atak Temizlik ile profesyonel, güvenilir ve uygun fiyatlı temizlik hizmetleri.",
  keywords: [
    "balıkesir temizlik",
    "ev temizliği balıkesir",
    "ofis temizliği",
    "inşaat sonrası temizlik",
    "profesyonel temizlik",
    "atak temizlik",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <SplashScreen />
        <Header />
        <main className="main-content flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
