import { IMG } from "./images";

export const IMAGES = {
  hero: IMG.hero,
  homeCleaning: IMG.homeCleaning,
  officeCleaning: IMG.officeCleaning,
  postConstruction: IMG.postConstruction,
  sofaCleaning: IMG.sofaCleaning,
  windowCleaning: IMG.windowCleaning,
  apartmentCleaning: IMG.apartmentCleaning,
  testimonial: IMG.testimonial,
  team: IMG.team,
  processBg: IMG.processBg,
  handsCleaning: IMG.handsCleaning,
  ctaTeam: IMG.ctaTeam,
  aboutOffice: IMG.officeCleaning,
  pageHero: IMG.pageHero,
  satisfaction: IMG.satisfaction,
} as const;

export const SITE = {
  name: "Atak Temizlik",
  fullName: "Atak Temizlik Hizmetleri",
  tagline: "Balıkesir'in En Güvenilir Temizlik Şirketi",
  phone: "+90 546 155 18 48",
  phoneRaw: "905461551848",
  email: "info@ataktemizlik.com",
  address: "Bahçelievler, 5013, 10100 Altıeylül/Balıkesir",
  city: "Balıkesir",
  whatsapp: "https://wa.me/905461551848",
  workingHours: "Pazartesi – Pazar: 08.00 - 22.00",
  instagram: "https://instagram.com/ataktemizlik",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  {
    href: "/hizmetler",
    label: "Hizmetlerimiz",
    children: [
      { href: "/hizmetler/ev-temizligi", label: "Ev Temizliği" },
      { href: "/hizmetler/ofis-temizligi", label: "Ofis ve İşyeri Temizliği" },
      { href: "/hizmetler/insaat-sonrasi", label: "İnşaat Sonrası Temizlik" },
      { href: "/hizmetler/cam-temizligi", label: "Cam Temizliği" },
      { href: "/hizmetler/koltuk-yatak", label: "Koltuk ve Yatak Temizliği" },
      { href: "/hizmetler/apartman-merdiven", label: "Apartman ve Merdiven Temizliği" },
    ],
  },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const SERVICES = [
  {
    slug: "ev-temizligi",
    title: "Ev Temizliği",
    description:
      "Ev temizliğine uzman kadro ve profesyonel ekipmanlarımız ile söz verdiğimiz güvenceyle hizmetinizdeyiz.",
    image: IMAGES.homeCleaning,
    icon: "home",
  },
  {
    slug: "ofis-temizligi",
    title: "Ofis ve İşyeri Temizliği",
    description:
      "İhtiyacınıza yönelik çözümlerimiz ve profesyonel ekipmanlarımızla çalışma alanlarınızı pırıl pırıl yapıyoruz.",
    image: IMAGES.officeCleaning,
    icon: "building",
  },
  {
    slug: "insaat-sonrasi",
    title: "İnşaat Sonrası Temizlik",
    description:
      "Tadilat ve inşaat sonrası kapsamlı temizlik. Yeni evinizi aile dostu hijyenle kullanıma hazır hale getiriyoruz.",
    image: IMAGES.postConstruction,
    icon: "hard-hat",
  },
  {
    slug: "koltuk-yatak",
    title: "Koltuk ve Yatak Temizliği",
    description:
      "Profesyonel ekipman ve en uygun fiyat garantisi ile koltuk, yatak ve her türlü mobilya temizliği.",
    image: IMAGES.sofaCleaning,
    icon: "sofa",
  },
] as const;

export const FEATURES = [
  {
    title: "Profesyonel Ekip",
    description:
      "Deneyimli ve eğitimli temizlik personelimiz, en yüksek standartlarda hizmet sunmak için titizlikle seçilmiştir.",
    icon: "users",
  },
  {
    title: "Kaliteli Ürünler",
    description:
      "Çevre dostu ve sağlığa zarar vermeyen ürünler kullanmaktayız. Mekanlarınızı temizlerken sağlığınızı da koruyoruz.",
    icon: "sparkles",
  },
  {
    title: "Uygun Fiyatlar",
    description:
      "Balıkesir temizlik şirketi olarak en uygun fiyat garantisi veriyoruz.",
    icon: "badge-percent",
  },
  {
    title: "Garantili Hizmet",
    description:
      "Temizlik hizmetlerimizden memnun kalmazsanız, sorunu çözmek için tekrar hizmet vermeyi taahhüt ediyoruz.",
    icon: "shield-check",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Gözü kapalı temizlik işlerini verebileceğiniz bir şirket. Uzman kadrosu ile kısa sürede mükemmel bir temizlik yaptılar. Tekrardan teşekkür ediyorum kendilerine.",
    author: "Murat Ceylan",
  },
  {
    quote:
      "Evimin camlarını emanet edebildiğim tek yer. Çok güler yüzlü ve samimi insanlar. Aldıkları parayı sonuna kadar hak ediyorlar.",
    author: "Şüheda Nur Avcı",
  },
  {
    quote:
      "Heryeri kendi evleri gibi tertemiz yapan, ilgili, güler yüzlü, pırıl pırıl çalışan bir şirket. Gönül rahatlığı ile tercih edebilirsiniz.",
    author: "Tuğçe Ş.",
  },
  {
    quote:
      "İnşaat sonrası temizlikte Balıkesir'de tek geçilebilecek bir firma. Çok memnun oldum sizinle çalıştığıma teşekkür ederim.",
    author: "Hakan Baldemir",
  },
] as const;

export const PROCESS_STEPS = [
  {
    title: "Teklif formunu doldurun",
    description: "Temizletmek istediğiniz alanı seçerek teklif alın veya arayın.",
    icon: "clipboard",
  },
  {
    title: "Temizlik tarihini belirleyin",
    description: "Müsait olduğunuz zaman aralıklarını girin.",
    icon: "calendar",
  },
  {
    title: "Gerisini bize bırakın!",
    description: "İstediğiniz alanı sizin için pırıl pırıl hale getirelim.",
    icon: "spray",
  },
] as const;

export const WHY_US = [
  "Uygun Fiyatlar",
  "Aynı Gün Teslim",
  "Memnuniyet Garantisi",
  "Profesyonel Ekip",
] as const;

export const STATS = [
  { value: "5+", label: "Hizmet Süresi (Yıl)" },
  { value: "498+", label: "Memnun Müşteri" },
  { value: "321+", label: "Temizlenen Mekân" },
  { value: "7/24", label: "Destek" },
] as const;

export const SERVICE_OPTIONS = [
  "Ev Temizliği",
  "Ofis ve İşyeri Temizliği",
  "İnşaat Sonrası Temizlik",
  "Cam Temizliği",
  "Koltuk ve Yatak Temizliği",
  "Apartman ve Merdiven Temizliği",
] as const;
