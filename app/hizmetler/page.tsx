// app/hizmetler/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  HardHat,
  QrCode,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Timer,
  Wrench,
} from "lucide-react";

const highlights = [
  {
    title: "Denetimlere Hazırlık",
    text: "İtfaiye, Bakanlık ve kurumsal denetimler için resmi ve teknik hazırlık.",
    icon: Siren,
  },
  {
    title: "Mühendislik Çözümü",
    text: "Risk ve ihtiyaç analizine göre doğru sistem planlaması.",
    icon: HardHat,
  },
  {
    title: "Dosya Yönetimi",
    text: "Ruhsat, proje, plan, bakım ve raporlama süreçlerinde düzenli takip.",
    icon: FileCheck2,
  },
];

const differences = [
  {
    title: "Tek Çatı",
    description:
      "Danışmanlık, proje, bakım ve kontrol süreçleri tek merkezden yönetilir.",
    icon: Building2,
  },
  {
    title: "Yasal Uyum",
    description: "İtfaiye ve ilgili mevzuatlara uygun teknik süreç hazırlanır.",
    icon: ShieldCheck,
  },
  {
    title: "Zaman Tasarrufu",
    description:
      "Doğru ihtiyaç tespitiyle gereksiz maliyet ve süreç kaybı azaltılır.",
    icon: Timer,
  },
];

const serviceCategories = [
  {
    number: "01",
    title: "Yangın Danışmanlığı",
    subtitle: "Denetim ve ruhsat süreçlerine hazırlık.",
    description:
      "Yangın güvenlik uzmanlığı, itfaiye uygunluk raporu ve yangın risk değerlendirmesi süreçlerinde teknik destek sağlarız.",
    scope:
      "Yangın danışmanlığı, itfaiye uygunluk raporu, risk değerlendirmesi, patlamadan korunma dokümanı, eğitim ve tatbikat.",
    href: "/bize-ulasin",
    icon: ShieldAlert,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Projelendirme",
    subtitle: "Doğru proje, güvenli sistem.",
    description:
      "Yangın mekanik tesisat, algılama, acil aydınlatma, yönlendirme ve söndürme sistemlerinde mevzuata uygun proje çözümleri sunarız.",
    scope:
      "Mimari yangın projesi, mekanik yangın projesi, temiz gazlı sistemler, davlumbaz söndürme, algılama ve ikaz sistemleri.",
    href: "/bize-ulasin",
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Plan Hazırlama",
    subtitle: "Acil durumda doğru yönlendirme.",
    description:
      "Tahliye, vaziyet, röleve ve yangından korunma planlarını işletmenizin yapısına uygun şekilde hazırlarız.",
    scope:
      "Vaziyet planı, röleve planı, tahliye planı, yangından korunma planı.",
    href: "/bize-ulasin",
    icon: ClipboardCheck,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Bakım ve Servis",
    subtitle: "Sistemlerin çalışır kalması.",
    description:
      "Yangın söndürme sistemleri, algılama sistemleri, yönlendirme ekipmanları ve yangın tüplerinin bakım süreçlerini yürütürüz.",
    scope:
      "Sulu söndürme sistemleri, otomatik söndürme, algılama, yönlendirme, yangın tüpü bakımı, davlumbaz baca temizliği.",
    href: "/bize-ulasin",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "Akredite Periyodik Kontrol",
    subtitle: "TÜRKAK onaylı raporlama.",
    description:
      "Güçbirliği Mühendislik iş birliğiyle yangın sistemleri ve ekipman kontrollerinde akredite periyodik kontrol desteği sağlarız.",
    scope:
      "Yangın sistemleri, basınçlı kaplar, kaldırma ekipmanları, elektriksel kontroller, havalandırma, ex-proof ekipman kontrolü.",
    href: "/bize-ulasin",
    icon: QrCode,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
  },
];

const serviceHighlights = [
  "Yangın danışmanlığı",
  "İtfaiye uygunluk raporu",
  "Yangın risk değerlendirmesi",
  "Patlamadan korunma dokümanı",
  "Yangın projelendirme",
  "Tahliye planı",
  "TSE belgeli bakım ve servis",
  "TÜRKAK akredite periyodik kontrol",
];

const digitalItems = [
  "Karekodlu raporlama",
  "Dijital kayıt takibi",
  "Denetim anında belge erişimi",
  "Geçmiş kontrol arşivi",
  "Rapor ve belge takibi",
  "Kurumsal tesis kontrol sistemi",
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <div className="relative mx-auto min-h-[430px] max-w-[1500px] overflow-hidden lg:min-h-[410px]">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1800&auto=format&fit=crop"
            alt="AFS Yangın Hizmetleri"
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
                Hizmetler / Yangın Danışmanlığı
              </p>

              <h1 className="max-w-[680px] text-[27px] font-black uppercase leading-[1.06] tracking-[-0.035em] text-white sm:text-[38px] md:text-[46px] lg:text-[50px]">
                Yangın güvenliği sürecinizi tek çatı altında yönetin.
              </h1>

              <p className="mt-4 max-w-[600px] text-[13px] font-semibold leading-6 text-white/80 sm:text-[15px] sm:leading-7 md:text-base">
                Danışmanlık, projelendirme, bakım, servis ve akredite periyodik
                kontrol hizmetleriyle işletmenizi denetimlere hazırlarız.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#hizmet-kategorileri"
                  className="group inline-flex items-center justify-center gap-2 bg-[#d71920] px-5 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f] sm:justify-start sm:text-sm"
                >
                  Hizmetleri İncele
                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </a>

                <Link
                  href="/bize-ulasin"
                  className="inline-flex items-center justify-center gap-2 bg-white px-5 py-3 text-xs font-black uppercase tracking-wide text-[#0b2c5f] transition hover:bg-[#d71920] hover:text-white sm:justify-start sm:text-sm"
                >
                  Uzmana Danış
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

      {/* WHY US */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Neden Biz?
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Tek muhatap, düzenli süreç, net raporlama.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              Proje, bakım, danışmanlık ve kontrol süreçlerini ayrı ayrı takip
              etmek yerine tek merkezden yönetebilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {differences.map((item) => {
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
        </div>
      </section>

      {/* SERVICE HIGHLIGHTS */}
      <section className="bg-[#06132d] py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Hizmet Kapsamı
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              Resmi ve teknik süreçler tek merkezde.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              Yangın güvenliği hizmetlerinizi mevzuata uygun, takip edilebilir
              ve raporlanabilir şekilde yönetiriz.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {serviceHighlights.map((item) => (
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

      {/* SERVICE CATEGORIES */}
      <section id="hizmet-kategorileri" className="bg-[#f4f6f8] py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Hizmet Kategorileri
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              Yangın güvenliği için temel hizmetler.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
              İhtiyacınıza göre danışmanlık, proje, plan, bakım veya akredite
              kontrol desteği alabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
            {serviceCategories.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-[210px] sm:h-[230px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,18,48,0.60),rgba(215,25,32,0.22))]" />

                    <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center bg-white text-[#d71920] shadow-xl">
                      <Icon size={28} />
                    </div>

                    <div className="absolute bottom-5 left-5 bg-[#d71920] px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
                      {service.number}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-black uppercase leading-tight text-[#101827]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-base font-black uppercase leading-tight text-[#0b2c5f]">
                      {service.subtitle}
                    </p>

                    <div className="mt-5 bg-[#eef1f5] px-4 py-3">
                      <p className="text-xs font-black uppercase tracking-wide text-[#0b2c5f]">
                        Hizmet Kapsamı
                      </p>

                      <p className="mt-2 text-sm font-bold leading-6 text-gray-700">
                        {service.scope}
                      </p>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-gray-600">
                      {service.description}
                    </p>

                    <Link
                      href={service.href}
                      className="mt-6 inline-flex items-center gap-3 text-sm font-black uppercase text-[#d71920]"
                    >
                      Bilgi Al
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIGITAL REPORTING */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Dijital Raporlama
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
              Karekodlu ve erişilebilir raporlama.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Rapor ve kontrol kayıtlarınızı dijital ortamda takip ederek
              denetim anında belge erişimini kolaylaştırırız.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {digitalItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 border border-gray-200 bg-white p-5 shadow-sm"
              >
                <QrCode size={22} className="mt-0.5 shrink-0 text-[#d71920]" />

                <p className="text-sm font-bold leading-7 text-gray-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#06132d] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="relative overflow-hidden bg-white p-7 text-[#101827] md:p-10 lg:p-12">
            <div className="absolute right-[-40px] top-[-30px] text-[120px] font-black uppercase leading-none text-[#0b2c5f]/5 md:text-[140px]">
              AFS
            </div>

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                  AFS Hizmetleri
                </p>

                <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                  Yangın güvenliği sürecinizi tek muhatapla yönetin.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
                  Danışmanlık, projelendirme, bakım, servis ve periyodik kontrol
                  ihtiyaçlarınız için AFS ekibiyle iletişime geçin.
                </p>
              </div>

              <Link
                href="/bize-ulasin"
                className="group inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0b2c5f]"
              >
                Hizmetler İçin Bize Ulaşın
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
