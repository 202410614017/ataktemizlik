/** GitHub Pages alt yolu — client bundle'da da çalışması için NEXT_PUBLIC_ kullanılır */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}

/** Yerel görseller — her hizmet için alakalı görsel */
export const IMG = {
  logo: asset("/images/atak-ilaclama-logo.png"),

  // Hero & genel
  hero: asset("/images/hero-family.jpg"),
  pageHero: asset("/images/hero-family.jpg"),

  // Hizmet görselleri
  homeCleaning: asset("/images/ev-temizligi.jpg"),
  officeCleaning: asset("/images/ofis-temizligi.jpg"),
  postConstruction: asset("/images/insaat-sonrasi.jpg"),
  sofaCleaning: asset("/images/koltuk-yatak-gen.jpg"),
  windowCleaning: asset("/images/cam-temizligi.jpg"),
  apartmentCleaning: asset("/images/apartman-merdiven.jpg"),

  // Bölüm görselleri
  team: asset("/images/ekip.jpg"),
  ctaTeam: asset("/images/ekip.jpg"),
  testimonial: asset("/images/hero-family.jpg"),
  satisfaction: asset("/images/ev-temizligi.jpg"),
  processBg: asset("/images/hero-family.jpg"),
  handsCleaning: asset("/images/temizlik-detay.jpg"),

  // Yedek (WordPress)
  cleaningGeneral: asset("/images/temizlik-genel.webp"),
  heroBanner: asset("/images/hero-banner.webp"),
  koltukWebp: asset("/images/koltuk-yatak.webp"),
} as const;

export const IMAGE_BASE =
  "https://atakilaclamavetemizlik.com/wp-content/uploads";

export function remoteImg(path: string) {
  return `${IMAGE_BASE}${path}`;
}
