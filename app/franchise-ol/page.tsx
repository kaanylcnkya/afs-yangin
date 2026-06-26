// app/franchise-ol/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Handshake,
  MapPin,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

const benefits = [
  {
    title: "Güçlü Marka Yapısı",
    description:
      "Yangın güvenliği alanında kurumsal kimlik, güven veren marka dili ve profesyonel iş modeli.",
    icon: BadgeCheck,
  },
  {
    title: "Operasyonel Destek",
    description:
      "Başvuru, kurulum, hizmet süreçleri ve saha operasyonlarında yönlendirici destek.",
    icon: ShieldCheck,
  },
  {
    title: "Bölgesel Büyüme",
    description:
      "Bulunduğunuz bölgede yangın güvenliği hizmetleri için güçlü bir temsil ağı oluşturma fırsatı.",
    icon: MapPin,
  },
  {
    title: "Ticari Potansiyel",
    description:
      "Cihaz, sistem, bakım, kontrol ve hizmet süreçleriyle sürdürülebilir gelir modeli.",
    icon: TrendingUp,
  },
];

const steps = [
  {
    number: "01",
    title: "Ön Başvuru",
    description:
      "Franchise talebinizi ve faaliyet göstermek istediğiniz bölgeyi bizimle paylaşırsınız.",
  },
  {
    number: "02",
    title: "Değerlendirme",
    description:
      "Bölge, yatırım kapasitesi, operasyonel uygunluk ve iş modeli birlikte değerlendirilir.",
  },
  {
    number: "03",
    title: "Görüşme",
    description:
      "Franchise şartları, işleyiş, marka kullanımı ve operasyon süreçleri detaylandırılır.",
  },
  {
    number: "04",
    title: "Kurulum",
    description:
      "Uygunluk sonrası marka, hizmet, satış ve operasyon altyapısı ile süreç başlatılır.",
  },
];

const faqs = [
  {
    question: "AFS franchise modeli kimler için uygundur?",
    answer:
      "Yangın güvenliği, teknik servis, iş güvenliği, kurumsal hizmet veya saha operasyonu alanlarında faaliyet göstermek isteyen girişimciler ve firmalar için uygundur.",
  },
  {
    question: "Başvuru sonrası süreç nasıl ilerler?",
    answer:
      "Başvuru alındıktan sonra bölge ve uygunluk değerlendirmesi yapılır. Ardından detaylı görüşme ve iş modeli planlaması aşamasına geçilir.",
  },
  {
    question: "Sadece bireysel girişimciler mi başvurabilir?",
    answer:
      "Hayır. Mevcut işletmeler, teknik servis firmaları, tedarikçiler ve kurumsal yapılar da franchise veya iş ortaklığı için başvurabilir.",
  },
];

export default function FranchisePage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06132d] pt-36 text-white">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1800&auto=format&fit=crop"
          alt="AFS Franchise"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98)_0%,rgba(5,18,48,0.86)_48%,rgba(215,25,32,0.32)_100%)]" />

        <div className="relative mx-auto max-w-[1500px] px-6 py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#d71920]">
              AFS Franchise
            </p>

            <h1 className="mt-5 text-4xl font-black uppercase leading-[1.08] md:text-6xl">
              AFS markasıyla kendi bölgenizde güçlü bir iş modeli kurun.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              Yangın güvenliği sektöründe franchise modeliyle büyümek, kurumsal
              marka gücüyle bölgenizde hizmet ağı oluşturmak için başvurun.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#basvuru"
                className="group inline-flex items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Başvuru Yap
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/is-birlikleri"
                className="inline-flex items-center border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                İş Birlikleri
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Neden Franchise?
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
              Yangın güvenliği alanında büyüyen bir iş ağına katılın.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border border-gray-200 bg-[#f8fafc] p-7">
              <Building2 size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Kurumsal Model
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                AFS markası altında standart, sürdürülebilir ve profesyonel bir
                operasyon modeliyle ilerleyin.
              </p>
            </div>

            <div className="border border-gray-200 bg-[#f8fafc] p-7">
              <Users size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Geniş Müşteri Kitlesi
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                İşletmeler, fabrikalar, depolar, ticari alanlar ve kurumsal
                yapılar için yangın güvenliği çözümleri sunun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Avantajlar
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              AFS Franchise Modelinin Sağladıkları
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
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
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Başvuru Süreci
              </p>
              <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase text-[#101827] md:text-5xl">
                Franchise süreci adım adım ilerler.
              </h2>
            </div>

            <p className="max-w-lg text-base leading-8 text-gray-600">
              Başvurunuz alındıktan sonra bölgesel uygunluk, iş modeli ve
              operasyonel yapı birlikte değerlendirilir.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step) => (
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
      <section id="basvuru" className="bg-[#06132d] py-24 text-white">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Franchise Başvurusu
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              Başvuru bilgilerinizi iletin, sizinle iletişime geçelim.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              Formu doldurduktan sonra AFS ekibi başvurunuzu değerlendirir ve
              uygunluk süreci için sizinle iletişime geçer.
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
              <input
                type="text"
                placeholder="Şehir / Bölge"
                className="h-14 border border-gray-200 px-4 text-sm outline-none transition focus:border-[#d71920]"
              />
              <input
                type="text"
                placeholder="Yatırım Planı"
                className="h-14 border border-gray-200 px-4 text-sm outline-none transition focus:border-[#d71920]"
              />
            </div>

            <textarea
              placeholder="Mesajınız"
              rows={5}
              className="resize-none border border-gray-200 p-4 text-sm outline-none transition focus:border-[#d71920]"
            />

            <button
              type="button"
              className="group mt-2 inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0b2c5f]"
            >
              Başvuruyu Gönder
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Sıkça Sorulan Sorular
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              Merak Edilenler
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="border border-gray-200 p-7">
                <h3 className="text-lg font-black uppercase text-[#101827]">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}