// app/is-birlikleri/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Globe2,
  Handshake,
  Network,
  ShieldCheck,
  Store,
  Truck,
} from "lucide-react";

const partnerBadges = [
  "TSE",
  "TSE-HYB",
  "TÜRKAK",
  "TMMOB",
  "NFPA",
  "FM Approvals",
  "VdS",
];

const businessPartners = [
  "Sarızeybek Şirketler Grubu",
  "Eplus Fire Protection",
  "Kidscert Certificate",
  "A Yangın Güvenlik A.Ş.",
];

const highlights = [
  {
    title: "Uluslararası Standart",
    text: "Ürün ve hizmetlerde ulusal / uluslararası standartlara önem veririz.",
    icon: Globe2,
  },
  {
    title: "Onaylı Çözüm Ağı",
    text: "Tedarikçi, bayi ve çözüm ortaklarımızla güçlü bir ekosistem kurarız.",
    icon: BadgeCheck,
  },
  {
    title: "Güven Veren İş Birliği",
    text: "Yangın güvenliği süreçlerinde kalite ve sürdürülebilirliği esas alırız.",
    icon: ShieldCheck,
  },
];

const ecosystemItems = [
  "Kalitesini kanıtlamış markalarla iş birliği",
  "Tedarikçi, bayi ve çözüm ortağı ağı",
  "Sertifikalı ürün ve hizmet yaklaşımı",
  "Mühendislik onaylı çözüm modeli",
  "Türkiye geneli büyüyen iş ortaklığı yapısı",
  "Doğru ürünleri doğru projelerle buluşturan sistem",
];

const partnershipOptions = [
  {
    title: "Tedarikçimiz Olun",
    description:
      "Sertifikalı ve yenilikçi yangın güvenlik ürünlerinizi AFS ekosistemiyle daha geniş müşteri ve bayi ağına ulaştırın.",
    href: "/tedarikci-ol",
    button: "Tedarikçi Ol",
    icon: Truck,
  },
  {
    title: "Bayimiz Olun",
    description:
      "Bölgenizde AFS’nin bayi ağına katılarak mühendislik onaylı ürün ve hizmetleri müşterilerinize sunun.",
    href: "/franchise-ol",
    button: "Bayi Ol",
    icon: Store,
  },
];

export default function PartnershipsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <div className="relative mx-auto min-h-[430px] max-w-[1500px] overflow-hidden lg:min-h-[410px]">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1800&auto=format&fit=crop"
            alt="AFS İş Birlikleri ve Çözüm Ortakları"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,#031433_0%,rgba(3,20,51,0.98)_34%,rgba(3,20,51,0.78)_62%,rgba(3,20,51,0.88)_100%)]" />

          <div className="relative flex min-h-[430px] items-center px-5 py-10 sm:px-8 lg:min-h-[410px] lg:px-14 xl:px-20">
            <div className="max-w-[700px]">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-12 w-1.5 bg-[#d71920] sm:h-14" />
                <span className="h-9 w-1.5 bg-[#1d75bc] sm:h-10" />
                <span className="h-6 w-1.5 bg-white/80" />
              </div>

              <p className="mb-3 text-[9px] font-black uppercase tracking-[0.22em] text-[#d71920] sm:text-[11px] sm:tracking-[0.26em]">
                Kurumsal / İş Birlikleri
              </p>

              <h1 className="max-w-[680px] text-[27px] font-black uppercase leading-[1.06] tracking-[-0.035em] text-white sm:text-[38px] md:text-[46px] lg:text-[50px]">
                Güçlü iş birlikleriyle güvenli çözümler üretiyoruz.
              </h1>

              <p className="mt-4 max-w-[600px] text-[13px] font-semibold leading-6 text-white/80 sm:text-[15px] sm:leading-7 md:text-base">
                Tedarikçi, bayi ve çözüm ortaklarımızla yangın güvenliği
                alanında güvenilir ve sürdürülebilir bir ekosistem kuruyoruz.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#partner-agi"
                  className="group inline-flex items-center justify-center gap-2 bg-[#d71920] px-5 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f] sm:justify-start sm:text-sm"
                >
                  Partner Ağını İncele
                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </a>

                <Link
                  href="/bize-ulasin"
                  className="inline-flex items-center justify-center gap-2 bg-white px-5 py-3 text-xs font-black uppercase tracking-wide text-[#0b2c5f] transition hover:bg-[#d71920] hover:text-white sm:justify-start sm:text-sm"
                >
                  Bize Ulaşın
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOP CARDS */}
      <section className="relative z-10 bg-white py-5 md:py-0">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="grid grid-cols-1 gap-5 md:-mt-5 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="bg-white p-6 shadow-xl">
                  <Icon size={34} className="text-[#d71920]" />

                  <h3 className="mt-5 text-lg font-black uppercase text-[#101827]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNER AREA */}
      <section id="partner-agi" className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Güçlü Ortaklıklar
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Yetkiler, üyelikler ve çözüm ortakları.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              AFS ekosistemi; standartlara uygunluk, güvenilir tedarik ve
              mühendislik disipliniyle şekillenir.
            </p>
          </div>

          <div className="relative overflow-hidden bg-[#f4f6f8] p-6 shadow-sm md:p-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-black uppercase text-[#101827]">
                    Üyelikler / Sertifikalar
                  </h3>
                  <span className="mt-3 block h-1 w-24 bg-[#d71920]" />
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
                  {partnerBadges.map((item) => (
                    <div
                      key={item}
                      className="flex min-h-[92px] items-center justify-center border border-gray-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#d71920] hover:shadow-xl"
                    >
                      <span className="text-base font-black uppercase tracking-tight text-[#0b2c5f]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-black uppercase text-[#101827]">
                    İş Ortakları
                  </h3>
                  <span className="mt-3 block h-1 w-24 bg-[#d71920]" />
                </div>

                <div className="grid gap-4">
                  {businessPartners.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#d71920] hover:shadow-xl"
                    >
                      <Network size={24} className="shrink-0 text-[#d71920]" />

                      <span className="text-sm font-black uppercase leading-6 text-[#101827]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="bg-[#06132d] py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              AFS Ekosistemi
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              Kaliteli ürün ve hizmet ağımızı birlikte büyütüyoruz.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              İş ortaklarımızla birlikte daha güçlü, daha güvenilir ve daha
              erişilebilir yangın güvenliği çözümleri sunuyoruz.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {ecosystemItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <CheckCircle2
                  size={22}
                  className="mt-0.5 shrink-0 text-[#d71920]"
                />

                <p className="text-sm font-bold leading-7 text-white/82">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER OPTIONS */}
      <section className="bg-[#f4f6f8] py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Partner Ağı ve Bayilik
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              AFS ekosistemine katılın.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Tedarikçi, bayi veya çözüm ortağı olarak yangın güvenliği
              sektöründe birlikte büyüyebiliriz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            {partnershipOptions.map((item, index) => {
              const Icon = item.icon;
              const dark = index === 1;

              return (
                <div
                  key={item.title}
                  className={`relative overflow-hidden p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl md:p-8 ${
                    dark
                      ? "bg-[#06132d] text-white"
                      : "bg-white text-[#101827]"
                  }`}
                >
                  <div
                    className={`absolute right-[-30px] top-[-30px] text-[120px] font-black uppercase leading-none ${
                      dark ? "text-white/[0.04]" : "text-[#0b2c5f]/5"
                    }`}
                  >
                    AFS
                  </div>

                  <div
                    className={`relative flex h-16 w-16 items-center justify-center ${
                      dark
                        ? "bg-white/10 text-[#d71920]"
                        : "bg-[#eef1f5] text-[#d71920]"
                    }`}
                  >
                    <Icon size={32} />
                  </div>

                  <h3 className="relative mt-7 text-3xl font-black uppercase leading-tight">
                    {item.title}
                  </h3>

                  <p
                    className={`relative mt-5 text-sm leading-7 ${
                      dark ? "text-white/68" : "text-gray-600"
                    }`}
                  >
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    className={`relative mt-7 inline-flex items-center gap-3 px-6 py-4 text-sm font-black uppercase tracking-wide transition ${
                      dark
                        ? "bg-[#d71920] text-white hover:bg-white hover:text-[#0b2c5f]"
                        : "bg-[#d71920] text-white hover:bg-[#0b2c5f]"
                    }`}
                  >
                    {item.button}
                    <ArrowRight size={17} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="relative overflow-hidden bg-[#06132d] p-7 text-white md:p-10 lg:p-12">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop"
              alt="AFS İş Birliği ve Bayilik"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98),rgba(5,18,48,0.78),rgba(215,25,32,0.28))]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                  Güçlü İş Birlikleri
                </p>

                <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight md:text-5xl">
                  Sektörde fark yaratmak için birlikte çalışalım.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                  Ürünlerinizi doğru projelere ulaştırmak veya AFS bayi ağında
                  yer almak için yetkili birimlerimizle iletişime geçin.
                </p>
              </div>

              <Link
                href="/bize-ulasin"
                className="group inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                İş Birliği İçin Bize Ulaşın
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}