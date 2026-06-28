// app/is-birlikleri/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Globe2,
  Handshake,
  Network,
  ShieldCheck,
  Store,
  Truck,
  Users,
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

const trustItems = [
  {
    title: "Uluslararası Standart",
    description:
      "Projelerimizde kullanılan donanım ve hizmetlerin ulusal ve uluslararası standartlara uygun olmasına önem veririz.",
    icon: Globe2,
  },
  {
    title: "Onaylı Çözüm Ortakları",
    description:
      "TÜRKAK akredite kuruluşlar, global yangın ekipmanı üreticileri ve yetkin hizmet sağlayıcılarla çalışırız.",
    icon: BadgeCheck,
  },
  {
    title: "Güven Veren Ekosistem",
    description:
      "İnsan hayatı ve yüksek değerli yatırımlar söz konusu olduğunda hiçbir detayı şansa bırakmayız.",
    icon: ShieldCheck,
  },
];

const partnershipOptions = [
  {
    title: "Tedarikçimiz Olun",
    description:
      "Yönetmeliklere tam uyumlu, sertifikalı ve yenilikçi yangın güvenlik ürünleriniz varsa; özel söndürücü köpükler, yeni nesil cihazlar ve benzeri çözümleri AFS güvencesiyle geniş müşteri ve bayi ağımıza sunabiliriz.",
    href: "/tedarikci-ol",
    button: "Tedarikçi Ol",
    icon: Truck,
  },
  {
    title: "Bayimiz Olun",
    description:
      "Bölgenizde AFS’nin ayrıcalıklı bayi ağına katılarak yüksek kâr marjlı, sertifikalı ve mühendislik onaylı ürünleri müşterilerinize ulaştırmanın ticari avantajlarını yakalayabilirsiniz.",
    href: "/franchise-ol",
    button: "Bayi Ol",
    icon: Store,
  },
];

const ecosystemItems = [
  "Kalitesini kanıtlamış markalarla güç birliği",
  "Tedarikçi, bayi ve çözüm ortağı ağı",
  "Sertifikalı ürün ve hizmet yaklaşımı",
  "Mühendislik onaylı çözüm modeli",
  "İzmir ve Ege Bölgesi başta olmak üzere Türkiye geneli büyüme",
  "Doğru ürünleri doğru projelerle buluşturan yapı",
];

export default function PartnershipsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1800&auto=format&fit=crop"
          alt="AFS İş Birlikleri ve Çözüm Ortakları"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98)_0%,rgba(5,18,48,0.88)_48%,rgba(215,25,32,0.32)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.12),transparent_28%)]" />

        <div className="relative mx-auto max-w-[1500px] px-5 py-20 lg:px-6 lg:py-28">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-20 w-1.5 bg-[#d71920] lg:h-28 lg:w-2" />
              <span className="h-14 w-1.5 bg-[#1d75bc] lg:h-20 lg:w-2" />
              <span className="h-9 w-1.5 bg-white/80 lg:h-12 lg:w-2" />
            </div>

            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#d71920] sm:text-sm">
              İş Birliklerimiz ve Çözüm Ortaklarımız
            </p>

            <h1 className="mt-5 max-w-5xl text-[34px] font-black uppercase leading-[1.08] tracking-[-0.035em] text-white sm:text-[42px] md:text-[58px] xl:text-[70px]">
              Güvenlik zayıf halka kabul etmez.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              Sektörün en iyileriyle omuz omuzayız. İnsan hayatı ve milyonlarca
              liralık yatırımlar söz konusu olduğunda hiçbir detayı şansa
              bırakamayız.
            </p>

            <div className="mt-8 max-w-3xl border-l-4 border-[#d71920] bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-bold leading-7 text-white/88 md:text-base">
                AFS Yangın Mühendislik Hizmetleri A.Ş. olarak; projelerimizde
                kullandığımız her donanımın ve sunduğumuz her hizmetin
                uluslararası standartlarda olmasını sağlamak için sektörünün
                lider tedarikçileri ve onaylı çözüm ortaklarıyla güçlü bir
                ekosistem kurduk.
              </p>
            </div>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75">
              Sizlere kesin çözüm sunabilmek için, kalitesini kanıtlamış
              markalarla gücümüzü birleştiriyor ve bu güçlü ağı her geçen gün
              büyütüyoruz.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#partner-agi"
                className="group inline-flex items-center justify-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Partner Ağını İncele
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/bize-ulasin"
                className="inline-flex items-center justify-center border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Bize Ulaşın
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TOP TRUST CARDS */}
      <section className="relative z-10 -mt-14">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="bg-white p-7 shadow-2xl">
                  <Icon size={38} className="text-[#d71920]" />
                  <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNER LOGO STYLE AREA */}
      <section id="partner-agi" className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Güçlü Ortaklıklar
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Yetkiler, üyelikler, çalışma grupları ve çözüm ortakları.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              AFS ekosistemi; standartlara uygunluk, güvenilir tedarik,
              mühendislik disiplini ve güçlü çözüm ortaklığı anlayışıyla
              şekillenir.
            </p>
          </div>

          <div className="relative overflow-hidden bg-[#f4f6f8] p-6 shadow-sm md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,25,32,0.08),transparent_35%)]" />

            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-black uppercase text-[#101827]">
                    Üyelikler / Çalışma Grupları / Sertifikalar
                  </h3>
                  <span className="mt-3 block h-1 w-24 bg-[#d71920]" />
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
                  {partnerBadges.map((item) => (
                    <div
                      key={item}
                      className="flex min-h-[92px] items-center justify-center border border-gray-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#d71920] hover:shadow-xl"
                    >
                      <span className="text-lg font-black uppercase tracking-tight text-[#0b2c5f]">
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

          <p className="mt-5 text-sm leading-7 text-gray-500">
            Not: Bu alandaki marka, sertifika ve çözüm ortağı logoları görsel
            dosya olarak ayrıca yüklendiğinde gerçek logolarla değiştirilebilir.
          </p>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="bg-[#06132d] py-24 text-white">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              AFS Ekosistemi
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              Kaliteli ürün ve hizmet ağımızı birlikte büyütüyoruz.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              İzmir ve Ege Bölgesi başta olmak üzere, Türkiye'nin dört bir
              yanındaki projelerimizde kaliteli ürün ve hizmet ağımızı
              genişletmeye devam ediyoruz.
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

      {/* PARTNER CTA OPTIONS */}
      <section className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Partner Ağı ve Bayilik
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              AFS ekosistemine katılın, birlikte büyüyelim.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Yangın güvenliği sektöründe standartları belirleyen bu vizyonun
              bir parçası olmak istiyorsanız, kapımız iş birliklerine her zaman
              açık.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            <div className="group relative overflow-hidden bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute right-[-30px] top-[-30px] text-[120px] font-black uppercase leading-none text-[#0b2c5f]/5">
                AFS
              </div>

              <div className="relative flex h-16 w-16 items-center justify-center bg-[#eef1f5] text-[#d71920] transition group-hover:bg-[#d71920] group-hover:text-white">
                <Truck size={32} />
              </div>

              <h3 className="relative mt-7 text-3xl font-black uppercase leading-tight text-[#101827]">
                Tedarikçimiz Olun
              </h3>

              <p className="relative mt-5 text-sm leading-7 text-gray-600">
                Yönetmeliklere tam uyumlu, sertifikalı ve yenilikçi yangın
                güvenlik ürünleriniz varsa; özel söndürücü köpükler, yeni nesil
                cihazlar ve benzeri çözümleri AFS güvencesiyle geniş müşteri ve
                bayi portalımızda sunabiliriz.
              </p>

              <Link
                href="/tedarikci-ol"
                className="relative mt-7 inline-flex items-center gap-3 bg-[#d71920] px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0b2c5f]"
              >
                Tedarikçi Ol
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="group relative overflow-hidden bg-[#06132d] p-8 text-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute right-[-30px] top-[-30px] text-[120px] font-black uppercase leading-none text-white/[0.04]">
                AFS
              </div>

              <div className="relative flex h-16 w-16 items-center justify-center bg-white/10 text-[#d71920] transition group-hover:bg-[#d71920] group-hover:text-white">
                <Store size={32} />
              </div>

              <h3 className="relative mt-7 text-3xl font-black uppercase leading-tight">
                Bayimiz Olun
              </h3>

              <p className="relative mt-5 text-sm leading-7 text-white/68">
                Bölgenizde AFS'nin ayrıcalıklı bayi ağına katılarak; yüksek kâr
                marjlı, sertifikalı ve mühendislik onaylı ürünleri
                müşterilerinize ulaştırmanın ticari avantajlarını yakalayın.
              </p>

              <Link
                href="/franchise-ol"
                className="relative mt-7 inline-flex items-center gap-3 bg-[#d71920] px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Bayi Ol
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="relative overflow-hidden bg-[#06132d] p-8 text-white md:p-14">
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
                  Sektörde fark yaratmak için bir adım atın.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                  Ürünlerinizi doğru projelere ulaştırmak veya AFS'nin onaylı
                  bayi ağında yer almak için yetkili birimlerimizle hemen
                  iletişime geçin.
                </p>
              </div>

              <Link
                href="/bize-ulasin"
                className="group inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                İş Birliği ve Bayilik İçin Bize Ulaşın
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