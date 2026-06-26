// app/kariyer/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Clock,
  GraduationCap,
  MapPin,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const benefits = [
  {
    title: "Kurumsal Çalışma Ortamı",
    description:
      "Standartları belirlenmiş, düzenli ve gelişime açık bir çalışma yapısı.",
    icon: Building2,
  },
  {
    title: "Saha ve Ofis Deneyimi",
    description:
      "Yangın güvenliği sektöründe operasyon, hizmet ve müşteri süreçlerini deneyimleme imkânı.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Eğitim ve Gelişim",
    description:
      "Teknik bilgi, ürün bilgisi ve hizmet süreçlerinde sürekli gelişim fırsatı.",
    icon: GraduationCap,
  },
  {
    title: "Güven Odaklı Ekip",
    description:
      "İş güvenliği, müşteri memnuniyeti ve profesyonel hizmet anlayışıyla çalışan ekip yapısı.",
    icon: ShieldCheck,
  },
];

const positions = [
  {
    title: "Saha Operasyon Personeli",
    location: "Bölgeye göre değerlendirilecek",
    type: "Tam Zamanlı",
    description:
      "Yangın güvenliği hizmetleri, saha kontrol süreçleri ve müşteri operasyonlarında görev alacak ekip arkadaşları.",
  },
  {
    title: "Teknik Servis Personeli",
    location: "Bölgeye göre değerlendirilecek",
    type: "Tam Zamanlı",
    description:
      "Yangın söndürme cihazları, bakım, dolum, kontrol ve teknik servis süreçlerinde görev alacak personeller.",
  },
  {
    title: "Satış ve Müşteri İlişkileri",
    location: "Ofis / Saha",
    type: "Tam Zamanlı",
    description:
      "Kurumsal müşteri görüşmeleri, teklif süreçleri ve iş geliştirme faaliyetlerinde görev alacak ekip arkadaşları.",
  },
  {
    title: "Franchise Operasyon Destek",
    location: "Merkez / Hibrit",
    type: "Tam Zamanlı",
    description:
      "Franchise, tedarikçi ve iş ortaklığı süreçlerinin takibinde operasyonel destek sağlayacak personeller.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Başvuru",
    description:
      "Kariyer formu üzerinden temel bilgilerinizi ve başvurmak istediğiniz alanı iletin.",
  },
  {
    number: "02",
    title: "Ön Değerlendirme",
    description:
      "Başvurunuz pozisyon, deneyim, şehir ve uygunluk kriterlerine göre değerlendirilir.",
  },
  {
    number: "03",
    title: "Görüşme",
    description:
      "Uygun adaylarla görev kapsamı, çalışma modeli ve beklentiler hakkında görüşme yapılır.",
  },
  {
    number: "04",
    title: "Süreç Başlangıcı",
    description:
      "Olumlu değerlendirme sonrası işe alım ve oryantasyon süreci planlanır.",
  },
];

export default function CareerPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06132d] pt-36 text-white">
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1800&auto=format&fit=crop"
          alt="AFS Kariyer"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98)_0%,rgba(5,18,48,0.86)_48%,rgba(215,25,32,0.32)_100%)]" />

        <div className="relative mx-auto max-w-[1500px] px-6 py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#d71920]">
              AFS Kariyer
            </p>

            <h1 className="mt-5 text-4xl font-black uppercase leading-[1.08] md:text-6xl">
              Güvenli alanlar oluşturan ekibin bir parçası olun.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              AFS Yangın’da teknik servis, saha operasyonu, satış, müşteri
              ilişkileri ve kurumsal destek alanlarında kariyer fırsatlarını
              değerlendirebilirsiniz.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#kariyer-formu"
                className="group inline-flex items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Başvuru Yap
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="#pozisyonlar"
                className="inline-flex items-center border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Açık Pozisyonlar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO CARDS */}
      <section className="relative z-10 -mt-16">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="bg-white p-7 shadow-2xl">
              <Users size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Ekip Kültürü
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Çözüm odaklı, sorumluluk sahibi ve gelişime açık bir ekip
                yapısı.
              </p>
            </div>

            <div className="bg-white p-7 shadow-2xl">
              <Sparkles size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Gelişim Fırsatı
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Yangın güvenliği sektöründe teknik ve operasyonel bilgi
                kazanma imkânı.
              </p>
            </div>

            <div className="bg-white p-7 shadow-2xl">
              <BadgeCheck size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Profesyonel Standart
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Hizmet kalitesi, müşteri memnuniyeti ve güven esaslı çalışma
                anlayışı.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AFS */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                AFS’de Çalışmak
              </p>

              <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Sektörel deneyim kazanabileceğiniz güçlü bir çalışma alanı.
              </h2>
            </div>

            <p className="max-w-lg text-base leading-8 text-gray-600">
              AFS Yangın’da çalışma modeli; güvenlik, sorumluluk, teknik
              yeterlilik ve müşteri memnuniyeti üzerine kuruludur.
            </p>
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

      {/* POSITIONS */}
      <section id="pozisyonlar" className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Açık Pozisyonlar
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              Başvurabileceğiniz Alanlar
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Aşağıdaki pozisyonlar genel başvuru alanları olarak
              değerlendirilir. Başvurular ihtiyaç ve bölge durumuna göre
              incelenir.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {positions.map((position) => (
              <div
                key={position.title}
                className="group border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-[#d71920] hover:shadow-2xl"
              >
                <div className="mb-5 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 bg-[#eef1f5] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#0b2c5f]">
                    <MapPin size={14} />
                    {position.location}
                  </span>

                  <span className="inline-flex items-center gap-2 bg-[#eef1f5] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#0b2c5f]">
                    <Clock size={14} />
                    {position.type}
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase text-[#101827]">
                  {position.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {position.description}
                </p>

                <a
                  href="#kariyer-formu"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase text-[#d71920]"
                >
                  Bu Pozisyona Başvur
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                İşe Alım Süreci
              </p>

              <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase text-[#101827] md:text-5xl">
                Başvurudan görüşmeye kadar süreç şeffaf ilerler.
              </h2>
            </div>

            <p className="max-w-lg text-base leading-8 text-gray-600">
              Başvurunuz alındıktan sonra uygun pozisyonlar ve bölgesel
              ihtiyaçlar doğrultusunda değerlendirme yapılır.
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
      <section id="kariyer-formu" className="bg-[#06132d] py-24 text-white">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Kariyer Başvurusu
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              Başvuru bilgilerinizi iletin, sizinle iletişime geçelim.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              Formu doldurduktan sonra başvurunuz değerlendirilir. Uygun
              pozisyon oluşması halinde AFS ekibi sizinle iletişime geçer.
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
                type="tel"
                placeholder="Telefon"
                className="h-14 border border-gray-200 px-4 text-sm outline-none transition focus:border-[#d71920]"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="email"
                placeholder="E-posta"
                className="h-14 border border-gray-200 px-4 text-sm outline-none transition focus:border-[#d71920]"
              />
              <input
                type="text"
                placeholder="Şehir / Bölge"
                className="h-14 border border-gray-200 px-4 text-sm outline-none transition focus:border-[#d71920]"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <select className="h-14 border border-gray-200 px-4 text-sm text-gray-500 outline-none transition focus:border-[#d71920]">
                <option>Başvurmak İstediğiniz Alan</option>
                <option>Saha Operasyon Personeli</option>
                <option>Teknik Servis Personeli</option>
                <option>Satış ve Müşteri İlişkileri</option>
                <option>Franchise Operasyon Destek</option>
                <option>Genel Başvuru</option>
              </select>

              <select className="h-14 border border-gray-200 px-4 text-sm text-gray-500 outline-none transition focus:border-[#d71920]">
                <option>Çalışma Tercihi</option>
                <option>Tam Zamanlı</option>
                <option>Yarı Zamanlı</option>
                <option>Staj</option>
                <option>Proje Bazlı</option>
              </select>
            </div>

            <input
              type="text"
              placeholder="CV Linki veya Portfolyo Linki"
              className="h-14 border border-gray-200 px-4 text-sm outline-none transition focus:border-[#d71920]"
            />

            <textarea
              placeholder="Kısa ön yazı / mesajınız"
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