// app/hakkimizda/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Flame,
  Handshake,
  ShieldCheck,
  Target,
  Users,
  Wrench,
  FileCheck2,
  CheckCircle2,
  Timer,
} from "lucide-react";

const values = [
  {
    title: "Güven",
    description:
      "Can ve mal güvenliğini şansa değil, mühendisliğin kesinliğine emanet eden bir hizmet anlayışıyla çalışırız.",
    icon: ShieldCheck,
  },
  {
    title: "Kalite",
    description:
      "Projeden uygulamaya, bakım ve kontrolden raporlamaya kadar her aşamada kalite standartlarını esas alırız.",
    icon: BadgeCheck,
  },
  {
    title: "Sorumluluk",
    description:
      "Teslim ettiğimiz her projenin ve attığımız her imzanın arkasında dururuz.",
    icon: ClipboardCheck,
  },
  {
    title: "Tek Çatı Çözüm",
    description:
      "Müşterilerimizin farklı taşeronlarla uğraşmasını önler, tüm süreci tek merkezden yönetiriz.",
    icon: Handshake,
  },
];

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
    label: "Sorun Odaklı Hizmet Anlayışı",
  },
];

const processItems = [
  {
    title: "Projelendirme",
    description:
      "İşletmenizin ihtiyaçlarına uygun yangın güvenliği projeleri teknik kadromuz tarafından hazırlanır.",
    icon: FileCheck2,
  },
  {
    title: "Resmi Ruhsat Süreçleri",
    description:
      "İtfaiye, ruhsat ve ilgili resmi süreçlerde gerekli teknik hazırlık ve yönlendirme sağlanır.",
    icon: Building2,
  },
  {
    title: "Akredite Periyodik Kontrol",
    description:
      "Yangın güvenliği ekipmanlarının periyodik kontrol ve raporlama süreçleri profesyonel şekilde yürütülür.",
    icon: ClipboardCheck,
  },
  {
    title: "Bakım ve Servis",
    description:
      "Sistemlerin kritik anda kusursuz çalışması için bakım, servis ve takip süreçleri planlanır.",
    icon: Wrench,
  },
];

const approach = [
  {
    number: "01",
    title: "Riskleri Doğru Okuruz",
    description:
      "İşletmenizin faaliyet alanını, denetim ihtiyaçlarını, mevcut ekipmanlarını ve yangın güvenliği risklerini analiz ederiz.",
  },
  {
    number: "02",
    title: "Sıfır Sorun Hedefiyle Planlarız",
    description:
      "Denetimlerde başınızı ağrıtmayacak, yasal ve teknik gereklilikleri karşılayan sürdürülebilir çözümler geliştiririz.",
  },
  {
    number: "03",
    title: "Uygular ve Arkasında Dururuz",
    description:
      "Kurulan sistemlerin, bakım ve kontrol süreçlerinin takipçisi olur; teslim ettiğimiz işin sonuna kadar arkasında dururuz.",
  },
];

const promises = [
  "İşletmenizin yangın güvenliği süreçlerini tek çatı altında yönetiriz.",
  "Farklı taşeronlarla zaman, enerji ve para kaybetmenizin önüne geçeriz.",
  "Denetimlerde sorun yaşamamanız için teknik süreci baştan doğru kurgularız.",
  "Kritik saniyede çalışması gereken sistemleri mühendislik disipliniyle kurarız.",
  "Projelendirmeden bakıma kadar tüm süreci yetkin mühendis kadromuzla takip ederiz.",
  "İşiniz durmasın, yatırımlarınız güvende kalsın diye yanınızda oluruz.",
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1800&auto=format&fit=crop"
          alt="AFS Hakkımızda"
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
              Kurumsal / Hakkımızda
            </p>

            <h1 className="mt-5 max-w-5xl text-[34px] font-black uppercase leading-[1.08] tracking-[-0.035em] text-white sm:text-[42px] md:text-[58px] xl:text-[70px]">
              Siz işinize odaklanın, yangın güvenliğinde “sıfır sorun” bizim
              işimiz.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              AFS Yangın Mühendislik Hizmetleri Tic. San. A.Ş. olarak;
              sektördeki 12 yıllık köklü tecrübemiz ve başarıyla tamamladığımız
              sayısız projeyle, can ve mal güvenliğinizi şansa değil,
              mühendisliğin kesinliğine emanet ediyoruz.
            </p>

            <div className="mt-8 max-w-3xl border-l-4 border-[#d71920] bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-bold leading-7 text-white/88 md:text-base">
                Bizim için yangın güvenliği sadece ekipman tedarik etmek veya
                yasal bir prosedürü geçiştirmek değildir. Temel felsefemiz;
                denetimlerde başınızı ağrıtmayacak, kritik anda kusursuz
                çalışacak sistemler kurmaktır.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/teklif-al"
                className="group inline-flex items-center justify-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Teklif Al
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

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

      {/* STATS */}
      <section className="relative z-10 -mt-14">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="bg-white p-7 shadow-2xl">
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

      {/* MAIN CONTENT */}
      <section className="py-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              AFS Yaklaşımı
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
              Yangın güvenliğini yasal prosedür değil, kesintisiz güvenlik
              sistemi olarak ele alıyoruz.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Bugüne kadar teslim ettiğimiz her projenin ve attığımız her
              imzanın sonuna kadar arkasında durduk, durmaya da devam ediyoruz.
              Amacımız; işletmenize “acaba çalışır mı?” endişesi yaşatmayan,
              kritik anda görevini eksiksiz yerine getiren sistemler kurmaktır.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Müşterilerimizin farklı farklı taşeronlarla uğraşarak zaman,
              enerji ve para kaybetmesinin önüne geçiyoruz. Projelendirmeden
              resmi ruhsat alımına, akredite periyodik kontrollerden bakım ve
              servise kadar tüm süreci tek çatı altında, tam yetkili mühendis
              kadromuzla yönetiyoruz.
            </p>

            <div className="mt-7 border-l-4 border-[#d71920] bg-[#f4f6f8] p-5">
              <p className="text-sm font-bold leading-7 text-gray-700">
                Çünkü biliyoruz ki; en iyi yangın güvenlik sistemi, varlığını
                unuttuğunuz ancak tehlike anında %100 çalışan sistemdir.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[560px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1600&auto=format&fit=crop"
                alt="AFS Yangın mühendislik hizmetleri"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,18,48,0.22),rgba(215,25,32,0.24))]" />

              <div className="absolute bottom-6 left-6 right-6 bg-white p-7 shadow-2xl">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d71920]">
                  Sıfır Sorun Hedefi
                </p>
                <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-[#101827]">
                  İşiniz durmasın, yatırımlarınız güvende kalsın diye
                  mühendislik gücümüzle yanınızdayız.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SCOPE */}
      <section className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Tek Çatı Altında Hizmet
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Projelendirmeden bakım ve servise kadar tüm süreci yönetiyoruz.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              Yangın güvenliği süreçlerinde parçalı çalışma modelini ortadan
              kaldırıyor; mühendislik, ruhsat, kontrol, bakım ve servis
              adımlarını tek merkezden koordine ediyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
            {processItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#d71920] hover:shadow-2xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center bg-[#eef1f5] text-[#d71920] transition group-hover:bg-[#d71920] group-hover:text-white">
                    <Icon size={32} />
                  </div>

                  <h3 className="mt-7 text-xl font-black uppercase text-[#101827]">
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
      <section className="bg-[#06132d] py-24 text-white">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              AFS Güvencesi
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              Denetimlerde sorun çıkarmayan, kritik anda çalışan sistemler.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              Yangın güvenliği bizim için görünürde duran ekipmandan ibaret
              değildir. Asıl değer, sistemin ihtiyaç duyulan o kritik saniyede
              eksiksiz çalışmasıdır.
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
      <section className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            <div className="relative overflow-hidden bg-[#06132d] p-9 text-white shadow-xl">
              <div className="absolute right-[-30px] top-[-20px] text-[110px] font-black uppercase leading-none text-white/[0.04]">
                AFS
              </div>

              <Target size={42} className="text-[#d71920]" />

              <p className="mt-7 text-sm font-black uppercase tracking-[0.28em] text-white/55">
                Misyonumuz
              </p>

              <h3 className="mt-4 text-3xl font-black uppercase leading-tight">
                İşletmelerin yangın güvenliği süreçlerini mühendislik
                disipliniyle sıfır sorun hedefine taşımak.
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/68">
                Can ve mal güvenliğini koruyan, denetimlerde güven veren ve
                tehlike anında kusursuz çalışması hedeflenen yangın güvenliği
                çözümleri sunmak için çalışıyoruz.
              </p>
            </div>

            <div className="relative overflow-hidden bg-white p-9 shadow-xl">
              <div className="absolute right-[-30px] top-[-20px] text-[110px] font-black uppercase leading-none text-[#0b2c5f]/5">
                AFS
              </div>

              <Building2 size={42} className="text-[#d71920]" />

              <p className="mt-7 text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Vizyonumuz
              </p>

              <h3 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827]">
                Yangın güvenliği alanında güvenilir, yetkin ve tek çatı çözüm
                modeliyle tercih edilen marka olmak.
              </h3>

              <p className="mt-5 text-sm leading-7 text-gray-600">
                Mühendislik gücü, kurumsal hizmet yaklaşımı, bakım ve kontrol
                kabiliyetiyle işletmelerin uzun vadeli çözüm ortağı olmayı
                hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Değerlerimiz
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              Her projenin arkasında duran hizmet anlayışı
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
              AFS yaklaşımı; güven, kalite, sorumluluk ve tek çatı çözüm
              ilkeleri üzerine kuruludur.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-[#d71920] hover:shadow-2xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center bg-[#eef1f5] text-[#d71920] transition group-hover:bg-[#d71920] group-hover:text-white">
                    <Icon size={32} />
                  </div>

                  <h3 className="mt-7 text-xl font-black uppercase text-[#101827]">
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
      <section className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Çalışma Yaklaşımımız
              </p>

              <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase text-[#101827] md:text-5xl">
                Yangın güvenliği süreçlerini baştan doğru kurgularız.
              </h2>
            </div>

            <p className="max-w-lg text-base leading-8 text-gray-600">
              En iyi yangın güvenlik sistemi; varlığını unuttuğunuz ama tehlike
              anında eksiksiz çalışan sistemdir.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {approach.map((step) => (
              <div
                key={step.number}
                className="relative overflow-hidden border border-gray-200 bg-white p-8 shadow-sm"
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
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="relative overflow-hidden bg-[#06132d] p-8 text-white md:p-14">
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