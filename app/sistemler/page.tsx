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

const authorityItems = [
  {
    title: "İzmir’in En Kapsamlı Yetki Belgesi",
    subtitle: "TSE HYB Güvencesi",
    description:
      "Kullanılan tüm ürünlerimiz sertifikalıdır. Kurulumdan teste, bakımdan devreye almaya kadar her aşama en geniş kapsamlı TSE Hizmet Yeterlilik Belgemiz ile güvence altındadır.",
    icon: BadgeCheck,
  },
  {
    title: "Uluslararası Uzmanlık",
    subtitle: "NFPA CFPS ile Dünya Standardı",
    description:
      "Uluslararası geçerliliğe sahip NFPA CFPS sertifikasına sahip İzmir'deki tek yangın firması olarak sistemlerinizi dünya standartlarında tasarlıyoruz.",
    icon: ShieldCheck,
  },
  {
    title: "Güçlü Mühendislik Kadrosu",
    subtitle: "TMMOB SMM Yetkili",
    description:
      "Elektrik mühendisi, makine mühendisi, mimar ve iş güvenliği uzmanlarından oluşan güçlü kadromuzla projelerinizi hazırlıyoruz. İtfaiye uygunluk raporu gibi resmi kurumlardan onay almak bizimle sorun olmaktan çıkar.",
    icon: HardHat,
  },
  {
    title: "Kalibrasyonlu Ölçüm",
    subtitle: "Eksiksiz Dokümantasyon",
    description:
      "Göz kararı değil, bilimsel çalışıyoruz. Sistemlerinizi kendi bünyemizdeki kalibrasyonlu cihazlarla test edip devreye alıyor ve yasal olarak ihtiyaç duyacağınız tüm dokümantasyonu anahtar teslim sunuyoruz.",
    icon: Gauge,
  },
];

const certificateScopes = [
  "TSE HYB",
  "NFPA CFPS",
  "TMMOB SMM",
  "Kalibrasyonlu Ölçüm",
  "Eksiksiz Dokümantasyon",
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
    subtitle: "Söndürürken zarar vermeyen teknoloji.",
    tags: "FM200, Novec, CO2",
    description:
      "Su veya köpük her yangında kullanılamaz. Trafo odaları, hücre odaları, hassas bilgi işlem veri merkezleri ve arşivler için özel tasarlanır. Yangını saniyeler içinde boğarken, milyonlarca liralık elektronik cihazlarınıza zarar vermez ve kalıntı bırakmaz.",
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Davlumbaz Söndürme Sistemleri",
    subtitle: "Endüstriyel mutfaklarda yangın korkusuna son.",
    tags: "Otel, Restoran, Yurt, AVM Mutfakları",
    description:
      "Oteller, restoranlar, yurtlar ve AVM'lerdeki endüstriyel mutfakların en büyük kabusu yağ yangınlarıdır. Mevzuatın zorunlu kıldığı bu sistemleri mutfağınızın mimarisine özel projelendiriyor, en ince detayına kadar uyguluyor ve 7/24 servis desteği sağlıyoruz.",
    icon: Utensils,
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Yangın Algılama ve Uyarı İkaz Sistemleri",
    subtitle: "Tehlikeyi büyümeden yakalayın.",
    tags: "Algılama, İhbar, Uyarı, Akıllı Dedektör",
    description:
      "Erken müdahale hayat kurtarır. Tesisinizin her metrekaresini akıllı dedektörlerle donatıyor; dumanı veya ısıyı ilk saniyesinde algılayıp uyarı veren, yönetmeliklere tam uyumlu ihbar sistemleri projelendirip kuruyoruz.",
    icon: Siren,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Acil Aydınlatma ve Yönlendirme Sistemleri",
    subtitle: "Karanlıkta ve panikte güvenli tahliye.",
    tags: "Yönlendirme, Tahliye, Acil Aydınlatma",
    description:
      "Yangın anında elektrikler kesildiğinde panik en büyük düşmandır. Yüksek katlı binalar, siteler ve sosyal donatı alanlarında insanların güvenle dışarı çıkabilmesi için standartlara uygun acil yönlendirme armatürleri ve aydınlatma ağları kuruyoruz.",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "Pano İçi Söndürme Sistemleri",
    subtitle: "Tehlikenin kalbine doğrudan müdahale.",
    tags: "Elektrik Panosu, Mikro Söndürme, Kaynağında Müdahale",
    description:
      "Büyük yangınlar genellikle küçük bir elektrik panosunda başlar. Elektrik panolarınızın içerisine entegre ettiğimiz mikro söndürme sistemleri ile alevi daha dışarıya sızmadan kaynağında anında bitiriyoruz.",
    icon: PanelTop,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1600&auto=format&fit=crop",
  },
];

const engineeringSteps = [
  {
    title: "İhtiyaç Analizi",
    description:
      "Tesisinizin kullanım amacı, risk sınıfı, mevcut altyapısı ve mevzuat gereksinimleri analiz edilir.",
    icon: ClipboardCheck,
  },
  {
    title: "Projelendirme",
    description:
      "İşletmenize özel otomatik söndürme, algılama ve uyarı sistemleri mühendislik hesaplarıyla projelendirilir.",
    icon: FileCheck2,
  },
  {
    title: "Kurulum ve Devreye Alma",
    description:
      "Sertifikalı ürünlerle kurulum yapılır; sistemler kalibrasyonlu cihazlarla test edilerek devreye alınır.",
    icon: Wrench,
  },
  {
    title: "Bakım ve 7/24 Destek",
    description:
      "Kurulum sonrası bakım, test, periyodik kontrol ve servis süreçleriyle kesintisiz koruma sağlanır.",
    icon: MonitorCog,
  },
];

const seoHighlights = [
  "TMMOB yetkili mühendis kadrosu",
  "NFPA CFPS uzmanlığı",
  "İzmir’in kapsamlı TSE HYB yetki yapısı",
  "A’dan Z’ye projelendirme ve kurulum",
  "Bakım, test ve periyodik kontrol desteği",
  "7/24 servis anlayışı",
];

export default function SystemsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1800&auto=format&fit=crop"
          alt="AFS Yangın Söndürme Sistemleri"
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
              Yangın Söndürme Sistemleri
            </p>

            <h1 className="mt-5 max-w-5xl text-[34px] font-black uppercase leading-[1.08] tracking-[-0.035em] text-white sm:text-[42px] md:text-[58px] xl:text-[70px]">
              Büyük yatırımlarınız şansa bırakılamaz.
            </h1>

            <h2 className="mt-5 max-w-4xl text-2xl font-black uppercase leading-tight text-white/90 md:text-4xl">
              Uluslararası mühendislik, kesintisiz koruma.
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              Milyonlarca liralık tesisleriniz, hassas veri merkezleriniz veya
              her gün binlerce kişiyi ağırlayan otel ve AVM'leriniz... Büyük
              yatırımlar, sıradan çözümlerle değil; yönetmeliklere uyumlu,
              kusursuz bir mühendislikle korunur.
            </p>

            <div className="mt-8 max-w-3xl border-l-4 border-[#d71920] bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-bold leading-7 text-white/88 md:text-base">
                AFS Yangın olarak; endüstriyel tesislerden yüksek katlı yapılara
                kadar işletmenize özel otomatik söndürme ve algılama
                sistemlerini projelendiriyor, kuruyor ve sertifikalandırıyoruz.
              </p>
            </div>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75">
              Siz üretmeye ve büyümeye devam edin, yasal prosedürleri ve
              güvenliği uzman mühendislerimize bırakın.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/teklif-al"
                className="group inline-flex items-center justify-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Hızlı Teklif Al
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#sistem-cozumleri"
                className="inline-flex items-center justify-center border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Sistemleri İncele
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TOP CARDS */}
      <section className="relative z-10 -mt-14">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="bg-white p-7 shadow-2xl">
              <Flame size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Otomatik Söndürme
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Tesisinizin risk yapısına uygun otomatik söndürme sistemlerini
                projelendirir ve kurarız.
              </p>
            </div>

            <div className="bg-white p-7 shadow-2xl">
              <Siren size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Algılama ve İkaz
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Dumanı, ısıyı ve tehlikeyi ilk saniyede algılayarak hızlı
                müdahale imkânı sağlayan sistemler kurarız.
              </p>
            </div>

            <div className="bg-white p-7 shadow-2xl">
              <ShieldCheck size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Sertifikalı Güvence
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Ürün, proje, kurulum, test ve bakım süreçlerini yetki belgeleri
                ve dokümantasyonla destekleriz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AFS */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Neden AFS?
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                İzmir'de tek, Türkiye'de öncü: mühendislik ve güvenin kesişim
                noktası.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              Kurumların denetimlerinden sorunsuz geçmek ve tehlike anında
              sistemin kusursuz çalışacağından emin olmak istiyorsanız, doğru
              adrestesiniz. Çünkü biz sadece sistem kurmuyoruz; yasal güvence ve
              huzur sağlıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            {authorityItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#d71920] hover:shadow-2xl"
                >
                  <div className="absolute right-[-30px] top-[-30px] text-[110px] font-black uppercase leading-none text-[#0b2c5f]/5">
                    AFS
                  </div>

                  <div className="relative flex h-16 w-16 items-center justify-center bg-[#eef1f5] text-[#d71920] transition group-hover:bg-[#d71920] group-hover:text-white">
                    <Icon size={32} />
                  </div>

                  <p className="relative mt-7 text-xs font-black uppercase tracking-[0.25em] text-[#d71920]">
                    {item.subtitle}
                  </p>

                  <h3 className="relative mt-3 text-2xl font-black uppercase leading-tight text-[#101827]">
                    {item.title}
                  </h3>

                  <p className="relative mt-5 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 bg-[#f4f6f8] p-6 md:p-8">
            <div className="mb-6">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Yetki Belgeleri ve Kapsamlar
              </p>

              <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-[#101827]">
                TSE HYB, NFPA CFPS, TMMOB SMM ve teknik dokümantasyon güvencesi.
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {certificateScopes.map((item) => (
                <div
                  key={item}
                  className="flex min-h-[92px] items-center justify-center border border-gray-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#d71920] hover:shadow-xl"
                >
                  <span className="text-sm font-black uppercase leading-6 text-[#0b2c5f]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              Not: 5 kapsam logoları ve yetki belge logoları ayrı görsel dosya
              olarak verildiğinde bu alana gerçek logolarla yerleştirilebilir.
            </p>
          </div>
        </div>
      </section>

      {/* FOCUS SECTORS */}
      <section className="bg-[#06132d] py-24 text-white">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Odak Sektörler
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              İşletmenize özel, teknolojik ve kesin çözümler.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/65">
              Endüstriyel tesisler, oteller, AVM’ler, hastaneler ve veri
              merkezleri için yangın söndürme ve algılama sistemleri
              geliştiriyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {focusSectors.map((sector) => {
              const Icon = sector.icon;

              return (
                <div
                  key={sector.title}
                  className="flex min-h-[170px] flex-col items-center justify-center border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition hover:-translate-y-2 hover:border-[#d71920] hover:bg-white/10"
                >
                  <Icon size={36} className="text-[#d71920]" />

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
      <section id="sistem-cozumleri" className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Sistem Çözümlerimiz
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              Yangın riskine karşı doğru sistem, doğru mühendislik.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Temiz gazlı söndürmeden davlumbaz sistemlerine, algılama
              sistemlerinden acil yönlendirme ve pano içi söndürmeye kadar tüm
              çözümleri işletmenizin risk yapısına göre projelendiriyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {systemSolutions.map((system, index) => {
              const Icon = system.icon;
              const reverse = index % 2 === 1;

              return (
                <div
                  key={system.title}
                  className="grid grid-cols-1 overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl lg:grid-cols-2"
                >
                  <div
                    className={`relative min-h-[320px] ${
                      reverse ? "lg:order-2" : ""
                    }`}
                  >
                    <img
                      src={system.image}
                      alt={system.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,18,48,0.45),rgba(215,25,32,0.20))]" />

                    <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center bg-white text-[#d71920] shadow-xl">
                      <Icon size={32} />
                    </div>
                  </div>

                  <div className="p-7 md:p-10">
                    <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                      {system.number}
                    </p>

                    <h3 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827]">
                      {system.title}
                    </h3>

                    <p className="mt-4 text-xl font-black uppercase leading-tight text-[#0b2c5f]">
                      {system.subtitle}
                    </p>

                    <div className="mt-5 inline-flex bg-[#eef1f5] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#0b2c5f]">
                      {system.tags}
                    </div>

                    <p className="mt-6 text-sm leading-7 text-gray-600">
                      {system.description}
                    </p>

                    <Link
                      href="/teklif-al"
                      className="mt-7 inline-flex items-center gap-3 bg-[#d71920] px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0b2c5f]"
                    >
                      Bu Sistem İçin Teklif Al
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
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Anahtar Teslim Süreç
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Projelendirme, kurulum, test, bakım ve servis.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              Kurulum sonrası bakım, test, periyodik kontrol ve 7/24 servis
              hizmetlerimizle her zaman yanınızdayız.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {engineeringSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="group border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-[#d71920] hover:shadow-2xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center bg-[#eef1f5] text-[#d71920] transition group-hover:bg-[#d71920] group-hover:text-white">
                    <Icon size={32} />
                  </div>

                  <h3 className="mt-7 text-xl font-black uppercase text-[#101827]">
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

      {/* SEO CLOSING */}
      <section className="bg-[#06132d] py-24 text-white">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="relative overflow-hidden bg-white p-8 text-[#101827] md:p-12">
            <div className="absolute right-[-40px] top-[-30px] text-[140px] font-black uppercase leading-none text-[#0b2c5f]/5">
              AFS
            </div>

            <div className="relative max-w-5xl">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                İzmir'de Yangın Söndürme Sistemlerinde Profesyonel Çözüm Ortağınız
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Endüstriyel tesislerin, otellerin ve eğitim kurumlarının yangın
                güvenliği yetkisiz kişilere bırakılamaz.
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600">
                Endüstriyel bir tesisin, lüks bir otelin veya bir eğitim
                kurumunun yangın güvenliği “merdiven altı” çözümlere veya
                yetkisiz kişilere teslim edilemeyecek kadar ciddidir. AFS Yangın
                olarak; TMMOB yetkili mühendis kadromuz, NFPA CFPS uzmanımız ile
                ihtiyaç analizi yaparak projelendirme gücümüz ve İzmir'in en
                kapsamlı TSE HYB belgesiyle sistemlerinizi A'dan Z'ye kuruyoruz.
                Kurulum sonrası bakım, test, periyodik kontrol ve 7/24 servis
                hizmetlerimizle her zaman yanınızdayız.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {seoHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border border-gray-200 bg-[#f4f6f8] p-4"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[#d71920]"
                    />
                    <p className="text-sm font-bold leading-6 text-gray-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/teklif-al"
                  className="group inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0b2c5f]"
                >
                  Hızlı Teklif Al
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/bize-ulasin"
                  className="inline-flex w-fit items-center border-2 border-[#0b2c5f] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#0b2c5f] transition hover:bg-[#0b2c5f] hover:text-white"
                >
                  Uzmana Danışın
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="relative overflow-hidden bg-[#06132d] p-8 text-white md:p-14">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1600&auto=format&fit=crop"
              alt="AFS Yangın Söndürme Sistemleri Teklif"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98),rgba(5,18,48,0.78),rgba(215,25,32,0.28))]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                  Projenizi Şansa Değil, Mühendislere Bırakın
                </p>

                <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight md:text-5xl">
                  Tesisinize en uygun yangın söndürme sistemini birlikte
                  belirleyelim.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                  Projelendirme, yasal gereksinimler ve ücretsiz keşif süreci
                  hakkında uzman mühendislerimizle hemen görüşün.
                </p>
              </div>

              <Link
                href="/teklif-al"
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