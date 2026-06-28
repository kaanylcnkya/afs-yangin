// app/politikalar/tarafsizlik/page.tsx

import Link from "next/link";
import { ArrowRight, CheckCircle2, Scale } from "lucide-react";

const items = [
  "Tüm projelendirme, danışmanlık, risk analizi ve teknik servis faaliyetlerimiz; ticari, mali veya diğer her türlü iç ve dış baskıdan tamamen uzak bir şekilde, sadece mühendislik doğruları ve yasal yönetmelikler baz alınarak gerçekleştirilir.",
  "Müşterilerimize sunduğumuz çözümlerde ve ihtiyaç tespitlerinde tamamen şeffaf davranılır; işletmeler gereksiz maliyetlerden korunurken, güvenlik önlemlerinin eksiksiz alınması sağlanır.",
  "Çalışanlarımızın karar alma süreçlerini ve teknik değerlendirmelerini olumsuz etkileyebilecek hiçbir ticari veya kişisel çıkar çatışmasına müsaade edilmez.",
];

export default function ImpartialityPolicyPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1800&auto=format&fit=crop"
          alt="AFS Tarafsızlık Politikası"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98),rgba(5,18,48,0.85),rgba(215,25,32,0.28))]" />

        <div className="relative mx-auto max-w-[1500px] px-5 py-20 lg:px-6 lg:py-28">
          <div className="max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#d71920]">
              Politikalarımız
            </p>

            <h1 className="mt-5 text-[34px] font-black uppercase leading-[1.08] tracking-[-0.035em] sm:text-[42px] md:text-[58px]">
              Tarafsızlık, dürüstlük ve bağımsızlık taahhüdümüz
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              Şirketimiz, sunduğu tüm mühendislik ve yangın güvenliği
              hizmetlerinde etik değerlerden, dürüstlükten ve tarafsızlık
              ilkesinden asla taviz vermez.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-6">
          <div>
            <div className="flex h-20 w-20 items-center justify-center bg-[#d71920] text-white">
              <Scale size={38} />
            </div>

            <h2 className="mt-7 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
              Bağımsız değerlendirme anlayışı
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Tüm teknik değerlendirmelerimiz, mühendislik doğruları ve yasal
              yönetmelikler esas alınarak yürütülür.
            </p>
          </div>

          <div className="grid gap-4">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 border border-gray-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2
                  size={22}
                  className="mt-0.5 shrink-0 text-[#d71920]"
                />
                <p className="text-sm font-bold leading-7 text-gray-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06132d] py-20 text-white">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-6">
          <div>
            <h2 className="text-3xl font-black uppercase">
              Şeffaf ve güvenilir hizmet anlayışı.
            </h2>
            <p className="mt-4 max-w-2xl text-white/65">
              Diğer politika ve bilgilendirme metinlerimizi de
              inceleyebilirsiniz.
            </p>
          </div>

          <Link
            href="/politikalar"
            className="inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
          >
            Tüm Politikalar
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}