"use client";

import { useEffect, useState } from "react";
import { IMG } from "@/lib/images";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("atak-splash-seen");
    if (seen) return;

    setVisible(true);
    document.body.classList.add("menu-open");

    const t1 = setTimeout(() => setHide(true), 1800);
    const t2 = setTimeout(() => {
      setVisible(false);
      document.body.classList.remove("menu-open");
      sessionStorage.setItem("atak-splash-seen", "1");
    }, 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.classList.remove("menu-open");
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#0f1f3d] via-[#1e4a9a] to-[#153670] px-6 transition-opacity duration-500 ${
        hide ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className={`splash-logo flex flex-col items-center ${hide ? "splash-out" : "splash-in"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG.logo}
          alt="Atak Temizlik"
          width={280}
          height={72}
          className="h-12 w-auto max-w-[80vw] sm:h-16 md:h-20"
        />
        <p className="mt-4 text-center text-xs font-medium tracking-[0.25em] text-white/80 uppercase sm:mt-6 sm:text-sm sm:tracking-[0.35em]">
          Profesyonel Temizlik
        </p>
        <div className="mt-6 h-1 w-20 overflow-hidden rounded-full bg-white/20 sm:mt-8 sm:w-24">
          <div className="splash-bar h-full rounded-full bg-accent" />
        </div>
      </div>
    </div>
  );
}
