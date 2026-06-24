// app/page.tsx

import Link from "next/link";
import {
  Bell,
  BadgeCheck,
  Flame,
  GraduationCap,
  ShieldCheck,
  Factory,
  Handshake,
  Landmark,
  ArrowRight,
  Wrench,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    title: "Yangın Söndürme Cihazları",
    description: "İşletmeniz için uygun yangın söndürme cihazı çözümleri.",
    icon: Flame,
    href: "/yangin-sondurme-cihazlari",
  },
  {
    title: "Alarm Sistemleri",
    description: "Yangın algılama ve alarm sistemleriyle erken uyarı güvenliği.",
    icon: Bell,
    href: "/alarm-sistemleri",
  },
  {
    title: "Yangın Söndürme Sistemleri",
    description: "Endüstriyel ve kurumsal alanlar için sistem çözümleri.",
    icon: ShieldCheck,
    href: "/yangin-sondurme-sistemleri",
  },
  {
    title: "Eğitim Hizmetleri",
    description: "Personeliniz için yangın güvenliği ve acil durum eğitimleri.",
    icon: GraduationCap,
    href: "/egitim",
  },
];

const advantages = [
  {
    title: "Kalite",
    icon: BadgeCheck,
  },
  {
    title: "Üretim",
    icon: Factory,
  },
  {
    title: "Finansal Güç",
    icon: Landmark,
  },
  {
    title: "Güven",
    icon: ShieldCheck,
  },
];

const joinCards = [
  {
    title: "Teklif Al",
    description: "İhtiyacınıza uygun çözüm için hızlı teklif talebi oluşturun.",
    href: "/teklif-al",
  },
  {
    title: "Franchise Ol",
    description: "AFS markasıyla bölgenizde güçlü bir iş modeli kurun.",
    href: "/franchise",
  },
  {
    title: "Tedarikçi Ol",
    description: "AFS tedarik ağına katılarak iş birliği sürecinizi başlatın.",
    href: "/tedarikci-ol",
  },
  {
    title: "Partner Ol",
    description: "Kurumsal iş birlikleri için bizimle iletişime geçin.",
    href: "/is-birlikleri",
  },
];

export default function Home() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#eef1f5] pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,25,32,0.18),transparent_35%),radial-gradient(circle_at_top_left,rgba(11,44,95,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-[1500px] px-6 pb-24 pt-20">
          <div className="grid min-h-[560px] grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
            {/* SOL ALAN */}
            <div>
              <span className="mb-6 inline-flex bg-white px-5 py-2 text-sm font-black uppercase tracking-[0.32em] text-[#d71920] shadow">
                Partner For Safety
              </span>

              <h1 className="max-w-4xl text-4xl font-black uppercase leading-[1.05] text-[#101827] md:text-6xl">
                Yangın Güvenliğinde Bütün İhtiyaçlarınız İçin Tek Çözüm
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
                Yangın söndürme cihazları, yangın güvenlik hizmetleri, sistem
                çözümleri ve eğitim süreçlerinde kurumsal destek sağlıyoruz.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/teklif-al"
                  className="group inline-flex items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#b9151b]"
                >
                  Teklif Al
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/hakkimizda"
                  className="inline-flex items-center border-2 border-[#0b2c5f] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#0b2c5f] transition hover:bg-[#0b2c5f] hover:text-white"
                >
                  Kurumsal Bilgi
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="bg-white px-4 py-2 text-xs font-black uppercase tracking-wide text-[#0b2c5f] shadow">
                  Yangın Cihazları
                </span>
                <span className="bg-white px-4 py-2 text-xs font-black uppercase tracking-wide text-[#0b2c5f] shadow">
                  Güvenlik Hizmetleri
                </span>
                <span className="bg-white px-4 py-2 text-xs font-black uppercase tracking-wide text-[#0b2c5f] shadow">
                  Sistem Çözümleri
                </span>
              </div>
            </div>

            {/* SAĞ HERO GÖRSEL ALANI */}
            <div className="relative">
              <div className="relative h-[520px] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1600&auto=format&fit=crop"
                  alt="AFS Yangın güvenliği çözümleri"
                  className="h-full w-full scale-105 object-cover"
                />

                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,20,45,0.9),rgba(11,44,95,0.72),rgba(215,25,32,0.58))]" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_18%)]" />

                <div className="absolute left-6 top-6 bg-white/95 px-5 py-4 shadow-xl backdrop-blur">
                  <p className="text-[11px] font-black uppercase tracking-wide text-gray-500">
                    Hizmet
                  </p>
                  <p className="mt-1 text-sm font-black uppercase text-[#0b2c5f]">
                    Kurulum & Bakım
                  </p>
                </div>

                <div className="absolute right-6 top-6 bg-[#d71920] px-5 py-4 text-white shadow-xl">
                  <p className="text-[11px] font-black uppercase tracking-wide text-white/70">
                    Destek
                  </p>
                  <p className="mt-1 text-sm font-black uppercase">
                    Kurumsal Çözüm
                  </p>
                </div>

                <div className="absolute inset-x-6 bottom-24 bg-black/35 p-8 backdrop-blur-sm">
                  <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-white/75">
                    AFS Yangın
                  </p>

                  <h2 className="max-w-lg text-3xl font-black uppercase leading-tight text-white md:text-4xl">
                    Profesyonel Yangın Güvenliği Çözümleri
                  </h2>

                  <p className="mt-4 max-w-lg text-[15px] leading-7 text-white/85">
                    Yangın söndürme cihazları, sistem çözümleri, bakım süreçleri
                    ve kurumsal güvenlik hizmetlerinde işletmenize özel
                    profesyonel destek.
                  </p>
                </div>

                <div className="absolute inset-x-6 bottom-6 grid grid-cols-3 gap-3">
                  <div className="bg-white/95 px-4 py-3 shadow-lg">
                    <p className="text-[11px] font-black uppercase tracking-wide text-gray-500">
                      Güvence
                    </p>
                    <p className="mt-1 text-sm font-black uppercase text-[#d71920]">
                      7/24 Destek
                    </p>
                  </div>

                  <div className="bg-white/95 px-4 py-3 shadow-lg">
                    <p className="text-[11px] font-black uppercase tracking-wide text-gray-500">
                      Hizmet
                    </p>
                    <p className="mt-1 text-sm font-black uppercase text-[#0b2c5f]">
                      Bakım & Kontrol
                    </p>
                  </div>

                  <div className="bg-white/95 px-4 py-3 shadow-lg">
                    <p className="text-[11px] font-black uppercase tracking-wide text-gray-500">
                      Sistem
                    </p>
                    <p className="mt-1 text-sm font-black uppercase text-[#101827]">
                      Uçtan Uca
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d71920]">
              Hizmet Alanlarımız
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              Yangın Güvenliği İçin Bütün İhtiyaçlarınız Karşılanır
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group min-h-[310px] border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-[#d71920] hover:shadow-2xl"
                >
                  <div className="mb-8 flex h-16 w-16 items-center justify-center bg-[#f2f4f7] text-[#d71920] transition group-hover:bg-[#d71920] group-hover:text-white">
                    <Icon size={32} strokeWidth={2.2} />
                  </div>

                  <h3 className="text-xl font-black uppercase leading-tight text-[#101827]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase text-[#0b2c5f]">
                    İncele
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="bg-[#0b1220] py-20 text-white">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center justify-center border border-white/10 p-8 text-center transition hover:border-[#d71920]"
                >
                  <Icon size={42} className="text-[#d71920]" />
                  <h3 className="mt-5 text-lg font-black uppercase">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d71920]">
                AFS ile Büyüyün
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-black uppercase text-[#101827] md:text-5xl">
                Bize Katılın, Tedarikçimiz Olun, İş Ortağımız Olun
              </h2>
            </div>

            <p className="max-w-lg text-base leading-7 text-gray-600">
              Franchise, tedarikçi ve kurumsal iş birliği başvurularınız için
              uygun formu seçerek süreci başlatabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {joinCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group border border-gray-200 bg-[#f8fafc] p-8 transition hover:-translate-y-2 hover:border-[#d71920] hover:bg-white hover:shadow-2xl"
              >
                <h3 className="text-2xl font-black uppercase text-[#101827]">
                  {card.title}
                </h3>

                <p className="mt-4 min-h-[76px] text-sm leading-7 text-gray-600">
                  {card.description}
                </p>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase text-[#d71920]">
                  Başvur
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}