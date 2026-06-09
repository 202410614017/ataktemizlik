import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function FloatingButtons() {
  return (
    <div
      className="fixed bottom-4 right-4 z-40 flex flex-col gap-2.5 sm:bottom-6 sm:right-6 sm:gap-3 lg:bottom-6 lg:left-6 lg:right-auto"
      style={{ paddingBottom: "var(--safe-bottom)" }}
    >
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-lg transition active:scale-95 sm:h-14 sm:w-14 sm:hover:scale-110"
        aria-label="WhatsApp ile yazın"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
      <a
        href={`tel:${SITE.phoneRaw}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition active:scale-95 sm:h-14 sm:w-14 sm:hover:scale-110"
        aria-label="Telefon ile arayın"
      >
        <Phone className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </div>
  );
}
