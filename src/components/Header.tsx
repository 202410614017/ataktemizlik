"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileOpen);
    return () => document.body.classList.remove("menu-open");
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="container-custom flex h-14 items-center justify-between gap-2 sm:h-16 sm:gap-4">
        <div className="min-w-0 flex-shrink">
          <Logo />
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) =>
            "children" in link && link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors xl:px-4 ${
                    isActive(link.href)
                      ? "bg-primary text-white"
                      : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {dropdownOpen && (
                  <div className="absolute left-0 top-full z-50 mt-1 min-w-[260px] rounded-xl border border-slate-100 bg-white py-2 shadow-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors xl:px-4 ${
                  isActive(link.href)
                    ? "bg-primary text-white"
                    : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="hidden items-center gap-2 text-sm font-semibold text-primary xl:flex"
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent px-4 py-2 text-xs font-bold uppercase text-white transition hover:bg-accent-dark"
          >
            WhatsApp
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-primary transition active:bg-primary/10 sm:h-10 sm:w-10"
            aria-label="Telefon"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 sm:h-10 sm:w-10 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobil menü */}
      <div
        className={`fixed inset-x-0 top-14 z-40 max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-slate-100 bg-white shadow-lg transition-all duration-300 sm:top-16 lg:hidden ${
          mobileOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="container-custom flex flex-col gap-1 py-4 pb-8">
          {NAV_LINKS.map((link) =>
            link.href === "/hizmetler" && "children" in link && link.children ? (
              <div key={link.href}>
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left font-medium ${
                    isActive(link.href) ? "bg-primary/10 text-primary" : "text-slate-700"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {servicesOpen && (
                  <div className="mb-1 ml-2 space-y-0.5 border-l-2 border-primary/20 pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg py-2.5 pr-3 text-sm text-slate-600 active:bg-slate-50"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-lg px-3 py-3 font-medium active:bg-slate-50 ${
                  isActive(link.href) ? "bg-primary/10 text-primary" : "text-slate-700"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="mt-4 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-primary py-3 text-sm font-semibold text-primary active:bg-primary/5"
            >
              <Phone className="h-4 w-4" />
              Ara
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center justify-center rounded-lg bg-accent py-3 text-sm font-bold text-white active:bg-accent-dark"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      </div>

      {mobileOpen && (
        <button
          type="button"
          className="fixed inset-0 top-14 z-30 bg-black/30 sm:top-16 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-label="Menüyü kapat"
        />
      )}
    </header>
  );
}
