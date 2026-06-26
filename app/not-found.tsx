// app/not-found.tsx

import Link from "next/link";
import {
  ArrowRight,
  Flame,
  Home,
  LifeBuoy,
  Search,
  ShieldAlert,
} from "lucide-react";

const quickLinks = [
  {
    title: "Ana Sayfa",
    href: "/",
    icon: Home,
  },
  {
    title: "Teklif Al",
    href: "/teklif-al",
    icon: Flame,
  },
  {
    title: "Bize Ulaşın",
    href: "/bize-ulasin",
    icon: LifeBuoy,
  },
];

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06132d] pt-[82px] text-white lg:pt-32">
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1800&auto=format&fit=crop"
        alt="404"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98)_0%,rgba(5,18,48,0.88)_45%,rgba(215,25,32,0.28)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.12),transparent_28%)]" />

      <div className="absolute -right-10 top-28 select-none text-[180px] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.035] md:text-[320px]">
        404
      </div>

      <section className="relative mx-auto flex min-h-[calc(100vh-82px)] max-w-[1500px] items-center px-5 py-20 lg:min-h-[calc(100vh-128px)] lg:px-6">
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[1fr_430px] lg:items-center">
          {/* Left */}
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-20 w-1.5 bg-[#d71920] lg:h-28 lg:w-2" />
              <span className="h-14 w-1.5 bg-[#1d75bc] lg:h-20 lg:w-2" />
              <span className="h-9 w-1.5 bg-white/80 lg:h-12 lg:w-2" />
            </div>

            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d71920] sm:text-sm">
              Sayfa Bulunamadı
            </p>

            <h1 className="mt-5 max-w-4xl text-[48px] font-black uppercase leading-[0.95] tracking-[-0.06em] text-white sm:text-[72px] md:text-[104px] lg:text-[128px]">
              404
            </h1>

            <h2 className="mt-6 max-w-3xl text-3xl font-black uppercase leading-tight tracking-[-0.035em] text-white md:text-5xl">
              Aradığınız sayfaya şu anda ulaşılamıyor.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">
              Bağlantı değişmiş, sayfa kaldırılmış veya adres hatalı yazılmış
              olabilir. Ana sayfaya dönebilir, teklif alabilir ya da AFS ekibi
              ile iletişime geçebilirsiniz.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/"
                className="group inline-flex items-center justify-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f] sm:justify-start"
              >
                Ana Sayfaya Dön
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/bize-ulasin"
                className="inline-flex items-center justify-center border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f] sm:justify-start"
              >
                Bize Ulaşın
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative overflow-hidden bg-white p-7 text-[#101827] shadow-2xl md:p-8">
            <div className="absolute right-[-18px] top-[-18px] text-[96px] font-black uppercase leading-none text-[#0b2c5f]/5">
              AFS
            </div>

            <div className="relative flex h-16 w-16 items-center justify-center bg-[#eef1f5] text-[#d71920]">
              <ShieldAlert size={34} strokeWidth={2.2} />
            </div>

            <p className="relative mt-7 text-xs font-black uppercase tracking-[0.25em] text-[#d71920]">
              Hızlı Yönlendirme
            </p>

            <h3 className="relative mt-3 text-2xl font-black uppercase leading-tight">
              Devam etmek için bir alan seçin.
            </h3>

            <p className="relative mt-4 text-sm leading-7 text-gray-600">
              Aradığınız içerik bulunamadıysa aşağıdaki bağlantılardan ilgili
              sayfaya hızlıca geçebilirsiniz.
            </p>

            <div className="relative mt-7 space-y-3">
              {quickLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex items-center justify-between border border-gray-200 px-4 py-3 text-sm font-black uppercase tracking-wide text-[#0b2c5f] transition hover:border-[#d71920] hover:bg-[#d71920] hover:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={18} />
                      {item.title}
                    </span>

                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                );
              })}
            </div>

            <div className="relative mt-7 border-t border-gray-100 pt-6">
              <div className="flex items-start gap-3">
                <Search size={20} className="mt-0.5 text-[#d71920]" />
                <div>
                  <p className="text-sm font-black uppercase text-[#101827]">
                    Aradığınız içerik neydi?
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Menüden ilgili bölüme geçebilir veya iletişim formundan
                    bize yazabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}