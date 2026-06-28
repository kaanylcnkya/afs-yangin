// app/politikalar/kalite/page.tsx

import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2 } from "lucide-react";

const items = [
  "TS EN ISO 9001 Kalite Yönetim Sistemi standartlarına uygun bir yönetim altyapısı kurmak, uygulamak ve sistemin etkinliğini sürekli iyileştirmek.",
  "Sunduğumuz tüm projelendirme, danışmanlık, satış, dolum ve teknik servis hizmetlerinde yüksek kalitede, hızlı ve güvenilir çözümler üretmek.",
  "Personelimizin yasal mevzuatlar, değişen yangın yönetmelikleri ve teknolojik gelişmeler konusunda sürekli eğitilmesini sağlayarak teknik yetkinliklerimizi en üst seviyede tutmak.",
  "Müşteri memnuniyetini ve güvenini işimizin merkezine koyarak, teslim ettiğimiz her projenin ve hizmetin sonuna kadar arkasında durmak.",
];

export default function QualityPolicyPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1800&auto=format&fit=crop"
          alt="AFS Kalite Politikası"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98),rgba(5,18,48,0.85),rgba(215,25,32,0.28))]" />

        <div className="relative mx-auto max-w-[1500px] px-5 py-20 lg:px-6 lg:py-28">
          <div className="max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#d71920]">
              Politikalarımız
            </p>

            <h1 className="mt-5 text-[34px] font-black uppercase leading-[1.08] tracking-[-0.035em] sm:text-[42px] md:text-[58px]">
              Kalite Politikamız
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              AFS Yangın Mühendislik Hizmetleri Tic. San. A.Ş. olarak temel
              amacımız; müşterilerimizin can ve mal güvenliğini koruyan çözümler
              üretirken, ihtiyaç ve beklentileri uluslararası standartlarda, en
              üst düzeyde karşılamaktır.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-6">
          <div>
            <div className="flex h-20 w-20 items-center justify-center bg-[#d71920] text-white">
              <BadgeCheck size={38} />
            </div>

            <h2 className="mt-7 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
              Kalite ilkelerimiz
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Bu doğrultuda benimsediğimiz kalite ilkeleri aşağıda yer
              almaktadır.
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
              Politikalarımızı incelemeye devam edin.
            </h2>
            <p className="mt-4 max-w-2xl text-white/65">
              Gizlilik, tarafsızlık ve KVKK bilgilendirme metinlerimize de
              ulaşabilirsiniz.
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