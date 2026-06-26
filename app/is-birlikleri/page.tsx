// app/is-birlikleri/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  Handshake,
  Network,
  Send,
  ShieldCheck,
  Store,
  Truck,
  Users,
} from "lucide-react";

const partnershipTypes = [
  {
    title: "Franchise İş Birliği",
    description:
      "AFS markasıyla bölgenizde yangın güvenliği alanında güçlü ve sürdürülebilir bir iş modeli kurun.",
    href: "/franchise-ol",
    icon: Store,
  },
  {
    title: "Tedarikçi İş Birliği",
    description:
      "Ürün, ekipman, lojistik ve hizmet süreçlerinde AFS tedarik ağına dahil olun.",
    href: "/tedarikci-ol",
    icon: Truck,
  },
  {
    title: "Kurumsal Partnerlik",
    description:
      "Kurumsal firmalar, tesis yönetimleri ve hizmet sağlayıcılarla ortak çözüm modeli geliştirelim.",
    href: "/bize-ulasin",
    icon: Handshake,
  },
  {
    title: "Proje İş Birliği",
    description:
      "Yangın güvenliği, bakım, sistem ve hizmet projelerinde birlikte sürdürülebilir çözümler üretelim.",
    href: "/bize-ulasin",
    icon: Network,
  },
];

const benefits = [
  {
    title: "Kurumsal Marka Gücü",
    description:
      "AFS markası altında güven veren, standartları belirlenmiş ve sürdürülebilir bir yapı içinde ilerleyin.",
    icon: BadgeCheck,
  },
  {
    title: "Operasyonel Uyum",
    description:
      "Başvuru, değerlendirme, hizmet, saha ve müşteri süreçlerinde daha düzenli bir iş akışı oluşturun.",
    icon: ClipboardCheck,
  },
  {
    title: "Geniş Hizmet Alanı",
    description:
      "Yangın söndürme cihazları, sistemler, bakım, kontrol ve eğitim süreçlerinde ortak çalışma fırsatı.",
    icon: ShieldCheck,
  },
  {
    title: "Büyüme Potansiyeli",
    description:
      "Bölgesel ve kurumsal talepler doğrultusunda yeni müşteri, proje ve hizmet alanlarına erişim sağlayın.",
    icon: BriefcaseBusiness,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Başvuru",
    description:
      "İş birliği yapmak istediğiniz alanı ve temel bilgilerinizi bizimle paylaşırsınız.",
  },
  {
    number: "02",
    title: "Ön Değerlendirme",
    description:
      "Başvurunuz faaliyet alanı, bölge, kapasite ve iş modeli açısından değerlendirilir.",
  },
  {
    number: "03",
    title: "Görüşme",
    description:
      "Uygun başvurular için iş birliği kapsamı, beklentiler ve çalışma modeli detaylandırılır.",
  },
  {
    number: "04",
    title: "Süreç Başlangıcı",
    description:
      "Mutabakat sağlanması halinde iş birliği modeli planlanır ve operasyon süreci başlatılır.",
  },
];

const suitableFor = [
  "Yangın güvenliği alanında faaliyet gösteren firmalar",
  "Teknik servis ve bakım hizmeti sunan işletmeler",
  "Ürün, ekipman veya lojistik tedarikçileri",
  "Tesis yönetimi ve kurumsal hizmet sağlayıcılar",
  "Yeni bölgelerde AFS markasıyla büyümek isteyen girişimciler",
  "Saha operasyonu ve müşteri ilişkileri güçlü işletmeler",
];

export default function PartnershipsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06132d] pt-36 text-white">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1800&auto=format&fit=crop"
          alt="AFS İş Birlikleri"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98)_0%,rgba(5,18,48,0.86)_48%,rgba(215,25,32,0.32)_100%)]" />

        <div className="relative mx-auto max-w-[1500px] px-6 py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#d71920]">
              AFS İş Birlikleri
            </p>

            <h1 className="mt-5 text-4xl font-black uppercase leading-[1.08] md:text-6xl">
              Güçlü iş ortaklıklarıyla yangın güvenliği ağını birlikte büyütelim.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              Franchise, tedarikçi, kurumsal partnerlik ve proje iş birlikleri
              için AFS ile ortak çalışma modellerini değerlendirebilirsiniz.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#is-birligi-formu"
                className="group inline-flex items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                İş Birliği Başvurusu
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/franchise-ol"
                className="inline-flex items-center border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Franchise Ol
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TOP CARDS */}
      <section className="relative z-10 -mt-16">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="bg-white p-7 shadow-2xl">
              <Handshake size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Ortak Büyüme
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                İş ortaklarımızla uzun vadeli, güvenilir ve sürdürülebilir
                modeller kurmayı hedefliyoruz.
              </p>
            </div>

            <div className="bg-white p-7 shadow-2xl">
              <Building2 size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Kurumsal Yapı
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Başvuru, değerlendirme ve operasyon süreçlerinde kurumsal
                standartlarla ilerliyoruz.
              </p>
            </div>

            <div className="bg-white p-7 shadow-2xl">
              <Users size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Geniş Ağ
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Bölgesel ve kurumsal talepleri karşılayacak güçlü bir hizmet ağı
                oluşturuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP TYPES */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                İş Birliği Modelleri
              </p>

              <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                AFS ile farklı alanlarda ortaklık kurabilirsiniz.
              </h2>
            </div>

            <p className="max-w-lg text-base leading-8 text-gray-600">
              Franchise, tedarik, kurumsal partnerlik ve proje bazlı iş
              birlikleri için başvurularınızı değerlendirebiliriz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
            {partnershipTypes.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative min-h-[330px] overflow-hidden bg-[#06132d] p-8 text-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,25,32,0.25),transparent_34%)]" />
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#d71920] transition-all duration-500 group-hover:w-full" />

                  <div className="relative flex h-16 w-16 items-center justify-center bg-white/10 text-[#d71920] transition group-hover:bg-[#d71920] group-hover:text-white">
                    <Icon size={32} />
                  </div>

                  <h3 className="relative mt-7 text-2xl font-black uppercase leading-tight">
                    {item.title}
                  </h3>

                  <p className="relative mt-4 text-sm leading-7 text-white/70">
                    {item.description}
                  </p>

                  <span className="relative mt-7 inline-flex items-center gap-2 text-sm font-black uppercase text-white">
                    Detaylı İncele
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

      {/* WHO CAN APPLY */}
      <section className="bg-[#f4f6f8] py-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Kimler Başvurabilir?
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
              İş birliği modeli farklı sektör oyuncuları için uygundur.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
              AFS iş birlikleri; mevcut işletmeler, teknik servis firmaları,
              tedarikçiler, girişimciler ve kurumsal çözüm ortakları için
              değerlendirilebilir.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {suitableFor.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 border border-gray-200 bg-white p-5 shadow-sm"
              >
                <ShieldCheck
                  size={22}
                  className="mt-0.5 shrink-0 text-[#d71920]"
                />
                <p className="text-sm font-bold leading-7 text-[#101827]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Avantajlar
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              AFS iş birlikleri ne sağlar?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item) => {
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

      {/* PROCESS */}
      <section className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Süreç
              </p>

              <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase text-[#101827] md:text-5xl">
                İş birliği başvurunuz adım adım değerlendirilir.
              </h2>
            </div>

            <p className="max-w-lg text-base leading-8 text-gray-600">
              Talebiniz doğrultusunda başvuru türü, faaliyet alanı ve operasyon
              uygunluğu birlikte incelenir.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
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

      {/* FORM */}
      <section id="is-birligi-formu" className="bg-[#06132d] py-24 text-white">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              İş Birliği Başvurusu
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              İş birliği talebinizi iletin, birlikte değerlendirelim.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              Formu doldurduktan sonra AFS ekibi başvurunuzu değerlendirir ve
              uygun iş modeli için sizinle iletişime geçer.
            </p>
          </div>

          <form className="grid gap-4 bg-white p-7 text-[#101827] shadow-2xl">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Ad Soyad"
                className="h-14 border border-gray-200 px-4 text-sm outline-none transition focus:border-[#d71920]"
              />
              <input
                type="text"
                placeholder="Firma Adı"
                className="h-14 border border-gray-200 px-4 text-sm outline-none transition focus:border-[#d71920]"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="tel"
                placeholder="Telefon"
                className="h-14 border border-gray-200 px-4 text-sm outline-none transition focus:border-[#d71920]"
              />
              <input
                type="email"
                placeholder="E-posta"
                className="h-14 border border-gray-200 px-4 text-sm outline-none transition focus:border-[#d71920]"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <select className="h-14 border border-gray-200 px-4 text-sm text-gray-500 outline-none transition focus:border-[#d71920]">
                <option>İş Birliği Türü</option>
                <option>Franchise İş Birliği</option>
                <option>Tedarikçi İş Birliği</option>
                <option>Kurumsal Partnerlik</option>
                <option>Proje İş Birliği</option>
                <option>Diğer</option>
              </select>

              <input
                type="text"
                placeholder="Şehir / Bölge"
                className="h-14 border border-gray-200 px-4 text-sm outline-none transition focus:border-[#d71920]"
              />
            </div>

            <input
              type="text"
              placeholder="Faaliyet Alanınız"
              className="h-14 border border-gray-200 px-4 text-sm outline-none transition focus:border-[#d71920]"
            />

            <textarea
              placeholder="İş birliği talebiniz / mesajınız"
              rows={5}
              className="resize-none border border-gray-200 p-4 text-sm outline-none transition focus:border-[#d71920]"
            />

            <button
              type="button"
              className="group mt-2 inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0b2c5f]"
            >
              Başvuruyu Gönder
              <Send
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}