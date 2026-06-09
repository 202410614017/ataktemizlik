import Image from "next/image";
import { IMAGES } from "@/lib/constants";

export default function PageHero({
  title,
  image = IMAGES.pageHero,
}: {
  title: string;
  image?: string;
}) {
  return (
    <section className="relative flex h-48 items-center justify-center px-4 sm:h-56 md:h-64 lg:h-80">
      <Image
        src={image}
        alt={title}
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-navy/70" />
      <h1 className="relative max-w-full text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h1>
    </section>
  );
}
