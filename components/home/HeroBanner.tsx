// components/home/HeroBanner.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="bg-[#eef1f5] pt-[82px] lg:pt-32">
      {/* ÜST DUYURU BAR */}
      <div className="bg-[#0b2c5f] text-white">
        <div className="mx-auto flex max-w-[1500px] items-center justify-center px-5 py-3 text-center text-[11px] font-black uppercase leading-5 tracking-wide sm:text-xs lg:px-6">
          AFS Yangın ile işletmeniz için profesyonel yangın güvenliği çözümleri
          <ArrowRight size={15} className="ml-2 shrink-0" />
        </div>
      </div>

      {/* KISA YATAY HERO */}
      <div className="bg-[#06132d]">
        <div className="relative mx-auto h-[430px] max-w-[1500px] overflow-hidden md:h-[450px] lg:h-[470px]">
          <img
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1800&auto=format&fit=crop"
            alt="AFS Yangın Güvenliği"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,#06132d_0%,rgba(6,19,45,0.98)_24%,rgba(6,19,45,0.74)_52%,rgba(6,19,45,0.22)_78%,rgba(6,19,45,0.88)_100%)]" />

          <div className="relative flex h-full items-center px-5 sm:px-10 lg:px-16 xl:px-20">
            <div className="w-full max-w-[780px]">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-16 w-1.5 bg-[#d71920]" />
                <span className="h-11 w-1.5 bg-[#1d75bc]" />
                <span className="h-7 w-1.5 bg-white/80" />
              </div>

              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.28em] text-white/75">
                Partner For Safety
              </p>

              <h1 className="max-w-[760px] text-[31px] font-black uppercase leading-[1.08] tracking-[-0.035em] text-white sm:text-[42px] md:text-[50px] lg:text-[56px]">
                Yangın Güvenliğinde Bütün İhtiyaçlarınız İçin Tek Çözüm
              </h1>

              <p className="mt-5 max-w-[650px] text-sm font-semibold leading-7 text-white/80 sm:text-[15px] md:text-base">
                Yangın söndürme cihazları, sistem çözümleri, güvenlik hizmetleri
                ve eğitim süreçlerinde işletmenize özel profesyonel destek.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/ysc"
                  className="group inline-flex items-center gap-2 bg-white px-5 py-3 text-xs font-black uppercase tracking-wide text-[#0b2c5f] transition hover:bg-[#d71920] hover:text-white"
                >
                  Yangın Cihazları
                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/sistemler"
                  className="group inline-flex items-center gap-2 bg-white px-5 py-3 text-xs font-black uppercase tracking-wide text-[#0b2c5f] transition hover:bg-[#d71920] hover:text-white"
                >
                  Sistemler
                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/bize-ulasin"
                  className="group inline-flex items-center gap-2 bg-[#d71920] px-5 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
                >
                  Teklif Al
                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ALT KISA BAŞLIK */}
      <div className="bg-[#eef1f5]">
        <div className="mx-auto max-w-[1050px] px-5 py-7 text-center lg:px-6">
          <h2 className="text-[21px] font-black uppercase leading-tight tracking-[-0.02em] text-[#0b2c5f] sm:text-2xl md:text-3xl">
            İşletmenizin yangın güvenliği ihtiyaçlarını tek çatı altında
            çözüyoruz.
          </h2>
        </div>
      </div>
    </section>
  );
}