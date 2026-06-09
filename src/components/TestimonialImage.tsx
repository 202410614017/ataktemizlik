import Image from "next/image";
import { IMAGES } from "@/lib/constants";

export default function TestimonialImage() {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl sm:aspect-[4/3] lg:aspect-[4/3]">
      <Image
        src={IMAGES.testimonial}
        alt="Mutlu müşteri"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}
