/** Yerel görseller — her hizmet için alakalı görsel */
export const IMG = {
  logo: "/images/atak-ilaclama-logo.png",

  // Hero & genel
  hero: "/images/hero-family.jpg",
  pageHero: "/images/hero-family.jpg",

  // Hizmet görselleri
  homeCleaning: "/images/ev-temizligi.jpg",
  officeCleaning: "/images/ofis-temizligi.jpg",
  postConstruction: "/images/insaat-sonrasi.jpg",
  sofaCleaning: "/images/koltuk-yatak-gen.jpg",
  windowCleaning: "/images/cam-temizligi.jpg",
  apartmentCleaning: "/images/apartman-merdiven.jpg",

  // Bölüm görselleri
  team: "/images/ekip.jpg",
  ctaTeam: "/images/ekip.jpg",
  testimonial: "/images/hero-family.jpg",
  satisfaction: "/images/ev-temizligi.jpg",
  processBg: "/images/hero-family.jpg",
  handsCleaning: "/images/temizlik-detay.jpg",

  // Yedek (WordPress)
  cleaningGeneral: "/images/temizlik-genel.webp",
  heroBanner: "/images/hero-banner.webp",
  koltukWebp: "/images/koltuk-yatak.webp",
} as const;

export const IMAGE_BASE =
  "https://atakilaclamavetemizlik.com/wp-content/uploads";

export function remoteImg(path: string) {
  return `${IMAGE_BASE}${path}`;
}
