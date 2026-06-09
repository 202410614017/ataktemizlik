import Image from "next/image";
import { IMAGES } from "@/lib/constants";

export default function HeroBackground() {
  return (
    <Image
      src={IMAGES.hero}
      alt="Profesyonel temizlik hizmeti"
      fill
      priority
      sizes="100vw"
      className="object-cover object-center opacity-60"
    />
  );
}
