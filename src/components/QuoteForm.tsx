"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { SERVICE_OPTIONS, SITE } from "@/lib/constants";

export default function QuoteForm({ className = "" }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={`rounded-2xl bg-white p-6 text-center shadow-xl sm:p-8 ${className}`}>
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 sm:h-16 sm:w-16">
          <svg className="h-7 w-7 text-accent sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-slate-800 sm:text-xl">Talebiniz Alındı!</h3>
        <p className="mt-2 text-sm text-text-muted">
          Talebiniz tarafımıza ulaştı. En kısa sürede sizinle iletişime geçeceğiz.
        </p>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl bg-white p-5 shadow-xl sm:p-6 md:p-8 ${className}`}>
      <h3 className="mb-5 text-center text-lg font-bold text-slate-800 sm:mb-6 sm:text-xl">
        Teklif Alın
      </h3>
      <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-text-muted">İsim</label>
          <input
            type="text"
            required
            autoComplete="name"
            className="input-field"
            placeholder="Adınız Soyadınız"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-text-muted">Telefon</label>
          <input
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            className="input-field"
            placeholder="05XX XXX XX XX"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-text-muted">Hizmet Seçiniz</label>
          <select required className="input-field">
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-text-muted">Tarih Seçiniz</label>
          <input type="date" className="input-field" />
        </div>
        <button type="submit" className="btn-accent w-full py-3.5 text-base sm:py-4">
          Fiyat Teklifi Al
        </button>
      </form>
      <div className="mt-5 space-y-3 border-t border-slate-100 pt-5 sm:mt-6 sm:pt-6">
        <a
          href={`tel:${SITE.phoneRaw}`}
          className="flex min-h-11 items-center gap-3 text-sm text-slate-600 active:text-primary"
        >
          <Phone className="h-4 w-4 shrink-0 text-primary" />
          <div className="min-w-0">
            <span className="block text-xs text-text-muted">Hemen Arayın</span>
            <span className="font-semibold break-all">{SITE.phone}</span>
          </div>
        </a>
        <a
          href={`mailto:${SITE.email}`}
          className="flex min-h-11 items-center gap-3 text-sm text-slate-600 active:text-primary"
        >
          <Mail className="h-4 w-4 shrink-0 text-primary" />
          <div className="min-w-0">
            <span className="block text-xs text-text-muted">E-posta</span>
            <span className="font-semibold break-all">{SITE.email}</span>
          </div>
        </a>
      </div>
    </div>
  );
}
