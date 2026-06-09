import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/constants";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex max-w-[140px] shrink-0 items-center sm:max-w-none ${className}`}>
      <Image
        src={IMG.logo}
        alt={SITE.fullName}
        width={200}
        height={52}
        className="h-8 w-auto max-w-full sm:h-9 md:h-10"
        priority
      />
    </Link>
  );
}
