// app/hakkimizda/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Handshake,
  ShieldCheck,
  Target,
  Wrench,
} from "lucide-react";

const stats = [
  {
    value: "12+",
    label: "Yıllık Sektör Tecrübesi",
  },
  {
    value: "360°",
    label: "Yangın Güvenliği Yaklaşımı",
  },
  {
    value: "Tek",
    label: "Çatı Altında Süreç Yönetimi",
  },
  {
    value: "0",
    label: "Sorun Hedefi",
  },
];

const highlights = [
  {
    title: "Mühendislik Gücü",
    text: "Yangın güvenliğini teknik analiz ve doğru planlama ile ele alırız.",
    icon: ShieldCheck,
  },
  {
    title: "Tek Çatı Çözüm",
    text: "Proje, ruhsat, bakım ve kontrol süreçlerini tek merkezden yönetiriz.",
    icon: Handshake,
  },
  {
    title: "Sıfır Sorun Hedefi",
    text: "Denetimlerde ve kritik anda güven veren sistemler kurmayı hedefleriz.",
    icon: BadgeCheck,
  },
];

const processItems = [
  {
    title: "Projelendirme",
    description:
      "İşletmenizin ihtiyaçlarına uygun yangın güvenliği projeleri hazırlanır.",
    icon: FileCheck2,
  },
  {
    title: "Resmi Süreçler",
    description:
      "İtfaiye, ruhsat ve ilgili teknik hazırlık süreçlerinde destek sağlanır.",
    icon: Building2,
  },
  {
    title: "Periyodik Kontrol",
    description:
      "Yangın güvenliği ekipmanlarının kontrol ve raporlama süreçleri yürütülür.",
    icon: ClipboardCheck,
  },
  {
    title: "Bakım ve Servis",
    description:
      "Sistemlerin çalışır kalması için bakım, servis ve takip planlanır.",
    icon: Wrench,
  },
];

const promises = [
  "Yangın güvenliği süreçlerini tek çatı altında yönetiriz.",
  "Farklı taşeronlarla zaman ve enerji kaybını azaltırız.",
  "Denetimlere uygun teknik süreç kurgularız.",
  "Kritik anda çalışması gereken sistemleri takip ederiz.",
  "Projelendirmeden bakıma kadar süreci planlarız.",
  "İşiniz durmasın, yatırımlarınız güvende kalsın diye yanınızda oluruz.",
];

const values = [
  {
    title: "Güven",
    description:
      "Can ve mal güvenliğini mühendislik disipliniyle ele alırız.",
    icon: ShieldCheck,
  },
  {
    title: "Kalite",
    description:
      "Projeden bakıma kadar her aşamada kalite standartlarını esas alırız.",
    icon: BadgeCheck,
  },
  {
    title: "Sorumluluk",
    description:
      "Teslim ettiğimiz her işin ve attığımız her imzanın arkasında dururuz.",
    icon: ClipboardCheck,
  },
  {
    title: "Tek Çatı",
    description:
      "Müşterilerimizin tüm süreci tek muhatapla yönetmesini sağlarız.",
    icon: Handshake,
  },
];

const approach = [
  {
    number: "01",
    title: "Riskleri Analiz Ederiz",
    description:
      "İşletmenizin faaliyet alanı, ekipmanları ve yangın güvenliği ihtiyaçları incelenir.",
  },
  {
    number: "02",
    title: "Doğru Süreci Planlarız",
    description:
      "Yasal ve teknik gerekliliklere uygun, sürdürülebilir çözümler hazırlanır.",
  },
  {
    number: "03",
    title: "Uygular ve Takip Ederiz",
    description:
      "Kurulan sistemlerin bakım, kontrol ve servis süreçleri takip edilir.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <div className="relative mx-auto min-h-[430px] max-w-[1500px] overflow-hidden lg:min-h-[410px]">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1800&auto=format&fit=crop"
            alt="AFS Hakkımızda"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,#031433_0%,rgba(3,20,51,0.98)_34%,rgba(3,20,51,0.78)_62%,rgba(3,20,51,0.88)_100%)]" />

          <div className="relative flex min-h-[430px] items-center px-5 py-10 sm:px-8 lg:min-h-[410px] lg:px-14 xl:px-20">
            <div className="max-w-[720px]">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-12 w-1.5 bg-[#d71920] sm:h-14" />
                <span className="h-9 w-1.5 bg-[#1d75bc] sm:h-10" />
                <span className="h-6 w-1.5 bg-white/80" />
              </div>

              <p className="mb-3 text-[9px] font-black uppercase tracking-[0.22em] text-[#d71920] sm:text-[11px] sm:tracking-[0.26em]">
                Kurumsal / Hakkımızda
              </p>

              <h1 className="max-w-[700px] text-[27px] font-black uppercase leading-[1.06] tracking-[-0.035em] text-white sm:text-[38px] md:text-[46px] lg:text-[50px]">
                Yangın güvenliğinde sıfır sorun hedefiyle çalışıyoruz.
              </h1>

              <p className="mt-4 max-w-[610px] text-[13px] font-semibold leading-6 text-white/80 sm:text-[15px] sm:leading-7 md:text-base">
                AFS Yangın olarak; projelendirme, resmi süreçler, bakım, servis
                ve kontrol hizmetlerini tek çatı altında yönetiyoruz.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/bize-ulasin"
                  className="group inline-flex items-center justify-center gap-2 bg-[#d71920] px-5 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f] sm:justify-start sm:text-sm"
                >
                  Bize Ulaşın
                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/hizmetler"
                  className="inline-flex items-center justify-center gap-2 bg-white px-5 py-3 text-xs font-black uppercase tracking-wide text-[#0b2c5f] transition hover:bg-[#d71920] hover:text-white sm:justify-start sm:text-sm"
                >
                  Hizmetleri İncele
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 bg-white py-5 md:py-0">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="grid grid-cols-1 gap-5 md:-mt-5 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="bg-white p-6 shadow-xl">
                <p className="text-4xl font-black uppercase text-[#d71920]">
                  {item.value}
                </p>

                <p className="mt-3 text-sm font-black uppercase tracking-wide text-[#101827]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                AFS Yaklaşımı
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Yangın güvenliğini mühendislik disipliniyle ele alıyoruz.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              Amacımız; denetimlerde güven veren, kritik anda çalışan ve düzenli
              takip edilen yangın güvenliği süreçleri oluşturmaktır.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {highlights.map((item) => {
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
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-[#f4f6f8] py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Tek Çatı Modeli
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
              Proje, ruhsat, bakım ve kontrol tek merkezde.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Farklı taşeronlarla zaman kaybetmeden, yangın güvenliği sürecinizi
              tek muhatapla yönetmenizi sağlarız.
            </p>

            <div className="mt-7 border-l-4 border-[#d71920] bg-white p-5">
              <p className="text-sm font-bold leading-7 text-gray-700">
                En iyi yangın güvenlik sistemi; varlığını unuttuğunuz ama
                tehlike anında eksiksiz çalışan sistemdir.
              </p>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden shadow-2xl md:min-h-[460px]">
            <img
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1600&auto=format&fit=crop"
              alt="AFS Yangın mühendislik hizmetleri"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,18,48,0.28),rgba(215,25,32,0.22))]" />

            <div className="absolute bottom-5 left-5 right-5 bg-white p-6 shadow-2xl">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d71920]">
                Sıfır Sorun Hedefi
              </p>

              <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-[#101827]">
                İşiniz durmasın, yatırımlarınız güvende kalsın.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SCOPE */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Hizmet Kapsamı
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Projelendirmeden bakım ve servise kadar.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              Mühendislik, ruhsat, kontrol, bakım ve servis adımlarını tek
              merkezden koordine ediyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processItems.map((item) => {
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

      {/* PROMISES */}
      <section className="bg-[#06132d] py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              AFS Güvencesi
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              Denetimde güven, kritik anda çalışan sistem.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              Yangın güvenliği bizim için sadece ekipman değil; planlı,
              denetlenebilir ve sürdürülebilir bir güvenlik sistemidir.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {promises.map((item) => (
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

      {/* MISSION VISION */}
      <section className="bg-[#f4f6f8] py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            <div className="relative overflow-hidden bg-[#06132d] p-8 text-white shadow-xl md:p-9">
              <div className="absolute right-[-30px] top-[-20px] text-[110px] font-black uppercase leading-none text-white/[0.04]">
                AFS
              </div>

              <Target size={42} className="text-[#d71920]" />

              <p className="mt-7 text-sm font-black uppercase tracking-[0.28em] text-white/55">
                Misyonumuz
              </p>

              <h3 className="mt-4 text-3xl font-black uppercase leading-tight">
                Yangın güvenliği süreçlerini sıfır sorun hedefine taşımak.
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/68">
                Can ve mal güvenliğini koruyan, denetimlerde güven veren ve
                tehlike anında çalışması hedeflenen çözümler sunarız.
              </p>
            </div>

            <div className="relative overflow-hidden bg-white p-8 shadow-xl md:p-9">
              <div className="absolute right-[-30px] top-[-20px] text-[110px] font-black uppercase leading-none text-[#0b2c5f]/5">
                AFS
              </div>

              <Building2 size={42} className="text-[#d71920]" />

              <p className="mt-7 text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Vizyonumuz
              </p>

              <h3 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827]">
                Yangın güvenliğinde güvenilir çözüm ortağı olmak.
              </h3>

              <p className="mt-5 text-sm leading-7 text-gray-600">
                Mühendislik gücü, kurumsal hizmet yaklaşımı, bakım ve kontrol
                kabiliyetiyle uzun vadeli çözüm ortağı olmayı hedefleriz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Değerlerimiz
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              Güven, kalite, sorumluluk ve tek çatı çözüm.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:border-[#d71920] hover:shadow-2xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center bg-[#eef1f5] text-[#d71920] transition group-hover:bg-[#d71920] group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-lg font-black uppercase text-[#101827]">
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

      {/* APPROACH */}
      <section className="bg-[#f4f6f8] py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Çalışma Yaklaşımı
              </p>

              <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase text-[#101827] md:text-5xl">
                Süreci baştan doğru kurgularız.
              </h2>
            </div>

            <p className="max-w-lg text-base leading-8 text-gray-600">
              Doğru analiz, doğru planlama ve düzenli takip güvenliğin temelidir.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {approach.map((step) => (
              <div
                key={step.number}
                className="relative overflow-hidden border border-gray-200 bg-white p-7 shadow-sm"
              >
                <span className="absolute right-5 top-3 text-6xl font-black text-[#0b2c5f]/5">
                  {step.number}
                </span>

                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#d71920]">
                  {step.number}
                </p>

                <h3 className="mt-5 text-2xl font-black uppercase text-[#101827]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {step.description}
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
              alt="AFS Yangın teklif"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98),rgba(5,18,48,0.78),rgba(215,25,32,0.28))]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                  AFS ile Sıfır Sorun Hedefi
                </p>

                <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight md:text-5xl">
                  İşiniz durmasın, yatırımlarınız güvende kalsın.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                  Yangın güvenliği süreçlerinizi mühendislik gücüyle planlamak
                  için AFS ekibiyle iletişime geçebilirsiniz.
                </p>
              </div>

              <Link
                href="/bize-ulasin"
                className="group inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Bize Ulaşın
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