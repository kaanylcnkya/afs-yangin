// app/sistemler/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Cpu,
  FileCheck2,
  Flame,
  Gauge,
  HardHat,
  Hotel,
  Lightbulb,
  MonitorCog,
  Network,
  PanelTop,
  ShieldCheck,
  Siren,
  Utensils,
  Wrench,
  Zap,
} from "lucide-react";

const highlights = [
  {
    title: "Otomatik Söndürme",
    text: "Risk yapısına uygun yangın söndürme sistemleri.",
    icon: Flame,
  },
  {
    title: "Algılama ve İkaz",
    text: "Duman, ısı ve tehlikeyi erken algılayan uyarı sistemleri.",
    icon: Siren,
  },
  {
    title: "Sertifikalı Güvence",
    text: "Proje, kurulum, test ve bakımda belgeli süreç yönetimi.",
    icon: ShieldCheck,
  },
];

const authorityItems = [
  {
    title: "TSE HYB Güvencesi",
    description:
      "Kurulum, test, bakım ve devreye alma süreçlerinde TSE Hizmet Yeterlilik Belgesi güvencesi.",
    icon: BadgeCheck,
  },
  {
    title: "NFPA CFPS Uzmanlığı",
    description:
      "Yangın söndürme sistemlerinde uluslararası standartlara uygun mühendislik yaklaşımı.",
    icon: ShieldCheck,
  },
  {
    title: "TMMOB SMM Yetkisi",
    description:
      "Elektrik, makine, mimari ve iş güvenliği uzmanlığıyla teknik proje desteği.",
    icon: HardHat,
  },
  {
    title: "Kalibrasyonlu Test",
    description:
      "Sistemlerin ölçüm, test ve devreye alma süreçlerinde teknik dokümantasyon.",
    icon: Gauge,
  },
];

const certificateScopes = [
  "TSE HYB",
  "NFPA CFPS",
  "TMMOB SMM",
  "Kalibrasyonlu Ölçüm",
  "Teknik Dokümantasyon",
];

const focusSectors = [
  {
    title: "Endüstriyel Tesisler",
    icon: Building2,
  },
  {
    title: "Oteller",
    icon: Hotel,
  },
  {
    title: "AVM’ler",
    icon: Network,
  },
  {
    title: "Hastaneler",
    icon: ShieldCheck,
  },
  {
    title: "Veri Merkezleri",
    icon: Cpu,
  },
];

const systemSolutions = [
  {
    number: "01",
    title: "Temiz Gazlı Söndürme Sistemleri",
    subtitle: "Hassas alanlara kalıntısız koruma.",
    tags: "FM200, Novec, CO2",
    description:
      "Trafo odası, veri merkezi, arşiv ve hassas elektronik alanlarda yangına hızlı ve kalıntısız müdahale sağlar.",
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Davlumbaz Söndürme Sistemleri",
    subtitle: "Endüstriyel mutfaklar için güvenlik.",
    tags: "Otel, restoran, AVM mutfakları",
    description:
      "Yağ yangını riski taşıyan endüstriyel mutfaklarda otomatik söndürme, bakım ve servis çözümü sunar.",
    icon: Utensils,
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Yangın Algılama ve Uyarı Sistemleri",
    subtitle: "Tehlikeyi büyümeden algılayın.",
    tags: "Algılama, ihbar, uyarı",
    description:
      "Duman, ısı ve yangın riskini erken tespit eden, yönetmeliklere uygun algılama ve ikaz sistemleri kurarız.",
    icon: Siren,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Acil Aydınlatma ve Yönlendirme",
    subtitle: "Güvenli tahliye için doğru yönlendirme.",
    tags: "Yönlendirme, tahliye, acil aydınlatma",
    description:
      "Elektrik kesintisi ve panik anında güvenli tahliye için standartlara uygun yönlendirme sistemleri sağlar.",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "Pano İçi Söndürme Sistemleri",
    subtitle: "Yangına kaynağında müdahale.",
    tags: "Elektrik panosu, mikro söndürme",
    description:
      "Elektrik panolarında başlayan yangın risklerine karşı kaynağında otomatik müdahale sağlayan sistemlerdir.",
    icon: PanelTop,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1600&auto=format&fit=crop",
  },
];

const engineeringSteps = [
  {
    title: "İhtiyaç Analizi",
    description: "Tesisin risk sınıfı, kullanım amacı ve mevcut altyapısı incelenir.",
    icon: ClipboardCheck,
  },
  {
    title: "Projelendirme",
    description: "Söndürme, algılama ve uyarı sistemleri teknik olarak planlanır.",
    icon: FileCheck2,
  },
  {
    title: "Kurulum",
    description: "Sertifikalı ürünlerle sistem kurulumu ve devreye alma yapılır.",
    icon: Wrench,
  },
  {
    title: "Bakım ve Destek",
    description: "Periyodik bakım, test ve servis süreçleriyle koruma sürdürülür.",
    icon: MonitorCog,
  },
];

const seoHighlights = [
  "Yangın söndürme sistemleri",
  "Temiz gazlı söndürme",
  "Davlumbaz söndürme sistemi",
  "Yangın algılama sistemi",
  "Acil yönlendirme sistemi",
  "Pano içi söndürme",
  "TSE HYB belgeli hizmet",
  "NFPA CFPS uzmanlığı",
];

export default function SystemsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <div className="relative mx-auto min-h-[430px] max-w-[1500px] overflow-hidden lg:min-h-[410px]">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1800&auto=format&fit=crop"
            alt="AFS Yangın Söndürme Sistemleri"
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
                Yangın Söndürme Sistemleri
              </p>

              <h1 className="max-w-[680px] text-[27px] font-black uppercase leading-[1.06] tracking-[-0.035em] text-white sm:text-[38px] md:text-[46px] lg:text-[50px]">
                Büyük yatırımlarınız şansa bırakılamaz.
              </h1>

              <p className="mt-4 max-w-[600px] text-[13px] font-semibold leading-6 text-white/80 sm:text-[15px] sm:leading-7 md:text-base">
                Otomatik söndürme, algılama, ikaz ve acil yönlendirme
                sistemlerinde mühendislik temelli çözümler sunarız.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#sistem-cozumleri"
                  className="group inline-flex items-center justify-center gap-2 bg-[#d71920] px-5 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f] sm:justify-start sm:text-sm"
                >
                  Sistemleri İncele
                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </a>

                <Link
                  href="/bize-ulasin"
                  className="inline-flex items-center justify-center gap-2 bg-white px-5 py-3 text-xs font-black uppercase tracking-wide text-[#0b2c5f] transition hover:bg-[#d71920] hover:text-white sm:justify-start sm:text-sm"
                >
                  Teklif Al
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

      {/* WHY AFS */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Neden AFS?
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Belgeli, yetkili ve mühendislik temelli hizmet.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              Yangın söndürme sistemlerinde doğru proje, doğru ürün ve düzenli
              bakım birlikte değerlendirilmelidir.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {authorityItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#d71920] hover:shadow-2xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center bg-[#eef1f5] text-[#d71920] transition group-hover:bg-[#d71920] group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-lg font-black uppercase leading-tight text-[#101827]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 bg-[#f4f6f8] p-6 md:p-8">
            <div className="mb-6">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Yetki Belgeleri
              </p>

              <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-[#101827]">
                TSE HYB, NFPA CFPS, TMMOB SMM ve teknik dokümantasyon.
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {certificateScopes.map((item) => (
                <div
                  key={item}
                  className="flex min-h-[88px] items-center justify-center border border-gray-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#d71920] hover:shadow-xl"
                >
                  <span className="text-sm font-black uppercase leading-6 text-[#0b2c5f]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS SECTORS */}
      <section className="bg-[#06132d] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Odak Sektörler
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              Yüksek riskli alanlara özel sistem çözümleri.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {focusSectors.map((sector) => {
              const Icon = sector.icon;

              return (
                <div
                  key={sector.title}
                  className="flex min-h-[135px] flex-col items-center justify-center border border-white/10 bg-white/5 p-5 text-center backdrop-blur transition hover:-translate-y-2 hover:border-[#d71920] hover:bg-white/10"
                >
                  <Icon size={32} className="text-[#d71920]" />

                  <h3 className="mt-5 text-sm font-black uppercase leading-6 text-white">
                    {sector.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SYSTEM SOLUTIONS */}
      <section id="sistem-cozumleri" className="bg-[#f4f6f8] py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Sistem Çözümleri
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              Risk alanına göre doğru sistem.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Temiz gazlı söndürme, davlumbaz söndürme, algılama, yönlendirme ve
              pano içi söndürme çözümleri.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
            {systemSolutions.map((system) => {
              const Icon = system.icon;

              return (
                <div
                  key={system.title}
                  className="group overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-[210px] sm:h-[230px]">
                    <img
                      src={system.image}
                      alt={system.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,18,48,0.60),rgba(215,25,32,0.22))]" />

                    <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center bg-white text-[#d71920] shadow-xl">
                      <Icon size={28} />
                    </div>

                    <div className="absolute bottom-5 left-5 bg-[#d71920] px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
                      {system.number}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-black uppercase leading-tight text-[#101827]">
                      {system.title}
                    </h3>

                    <p className="mt-3 text-base font-black uppercase leading-tight text-[#0b2c5f]">
                      {system.subtitle}
                    </p>

                    <div className="mt-5 bg-[#eef1f5] px-4 py-3">
                      <p className="text-xs font-black uppercase tracking-wide text-[#0b2c5f]">
                        Kapsam
                      </p>

                      <p className="mt-2 text-sm font-bold leading-6 text-gray-700">
                        {system.tags}
                      </p>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-gray-600">
                      {system.description}
                    </p>

                    <Link
                      href="/bize-ulasin"
                      className="mt-6 inline-flex items-center gap-3 text-sm font-black uppercase text-[#d71920]"
                    >
                      Teklif Al
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENGINEERING PROCESS */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Süreç
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Analizden bakıma anahtar teslim hizmet.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              Yangın söndürme sistemleri; doğru analiz, doğru proje, doğru
              kurulum ve düzenli bakım ile güven verir.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {engineeringSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="group border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#d71920] hover:shadow-2xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center bg-[#eef1f5] text-[#d71920] transition group-hover:bg-[#d71920] group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-lg font-black uppercase leading-tight text-[#101827]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO HIGHLIGHTS */}
      <section className="bg-[#06132d] py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              AFS Sistem Çözümleri
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              Profesyonel yangın söndürme sistemleri.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              Endüstriyel tesis, otel, AVM, hastane ve veri merkezi gibi alanlar
              için projelendirme, kurulum, test ve bakım desteği sağlarız.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {seoHighlights.map((item) => (
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

      {/* FINAL CTA */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="relative overflow-hidden bg-[#06132d] p-7 text-white md:p-10 lg:p-12">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1600&auto=format&fit=crop"
              alt="AFS Yangın Söndürme Sistemleri Teklif"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98),rgba(5,18,48,0.78),rgba(215,25,32,0.28))]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                  Projenizi Mühendislere Bırakın
                </p>

                <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight md:text-5xl">
                  Tesisinize en uygun yangın söndürme sistemini birlikte
                  belirleyelim.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                  Projelendirme, yasal gereksinimler ve keşif süreci için AFS
                  uzmanlarıyla iletişime geçin.
                </p>
              </div>

              <Link
                href="/bize-ulasin"
                className="group inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Hızlı Teklif Al
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