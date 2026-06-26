// app/bize-ulasin/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";

const contactCards = [
  {
    title: "Telefon",
    value: "Telefon bilgisi eklenecek",
    description: "Yangın güvenliği ihtiyaçlarınız için bizi arayabilirsiniz.",
    icon: Phone,
  },
  {
    title: "E-Posta",
    value: "info@afs.com.tr",
    description: "Teklif, iş birliği ve başvuru taleplerinizi iletebilirsiniz.",
    icon: Mail,
  },
  {
    title: "Adres",
    value: "Adres bilgisi eklenecek",
    description: "Ofis ve hizmet noktası bilgileri burada yer alacaktır.",
    icon: MapPin,
  },
  {
    title: "Çalışma Saatleri",
    value: "Hafta içi 09:00 - 18:00",
    description: "Başvurularınız en kısa sürede değerlendirilir.",
    icon: Clock,
  },
];

const quickLinks = [
  {
    title: "Teklif Al",
    href: "/teklif-al",
  },
  {
    title: "Franchise Ol",
    href: "/franchise-ol",
  },
  {
    title: "Tedarikçi Ol",
    href: "/tedarikci-ol",
  },
  {
    title: "Kariyer",
    href: "/kariyer",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06132d] pt-36 text-white">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1800&auto=format&fit=crop"
          alt="AFS Bize Ulaşın"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98)_0%,rgba(5,18,48,0.86)_48%,rgba(215,25,32,0.32)_100%)]" />

        <div className="relative mx-auto max-w-[1500px] px-6 py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#d71920]">
              İletişim
            </p>

            <h1 className="mt-5 text-4xl font-black uppercase leading-[1.08] md:text-6xl">
              Yangın güvenliği ihtiyaçlarınız için bizimle iletişime geçin.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              Teklif, franchise, tedarikçi, kariyer ve kurumsal iş birliği
              başvurularınız için AFS ekibine ulaşabilirsiniz.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#iletisim-formu"
                className="group inline-flex items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Formu Doldur
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/teklif-al"
                className="inline-flex items-center border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="relative z-10 -mt-16">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="bg-white p-7 shadow-2xl transition hover:-translate-y-2"
                >
                  <div className="flex h-14 w-14 items-center justify-center bg-[#eef1f5] text-[#d71920]">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-black uppercase text-[#101827]">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm font-black text-[#0b2c5f]">
                    {card.value}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORM + SIDE */}
      <section id="iletisim-formu" className="py-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* FORM */}
          <div>
            <div className="mb-10">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                İletişim Formu
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Talebinizi bize iletin.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
                İletişim bilgilerinizi ve ihtiyacınızı paylaşın. AFS ekibi
                talebinizi değerlendirerek sizinle en kısa sürede iletişime
                geçecektir.
              </p>
            </div>

            <form className="grid gap-4 bg-[#f8fafc] p-7 shadow-sm">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Ad Soyad"
                  className="h-14 border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-[#d71920]"
                />
                <input
                  type="text"
                  placeholder="Firma Adı"
                  className="h-14 border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-[#d71920]"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="tel"
                  placeholder="Telefon"
                  className="h-14 border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-[#d71920]"
                />
                <input
                  type="email"
                  placeholder="E-posta"
                  className="h-14 border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-[#d71920]"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <select className="h-14 border border-gray-200 bg-white px-4 text-sm text-gray-500 outline-none transition focus:border-[#d71920]">
                  <option>Talep Türü</option>
                  <option>Teklif Talebi</option>
                  <option>Franchise Başvurusu</option>
                  <option>Tedarikçi Başvurusu</option>
                  <option>Kariyer Başvurusu</option>
                  <option>Genel Bilgi</option>
                </select>

                <input
                  type="text"
                  placeholder="Şehir / Bölge"
                  className="h-14 border border-gray-200 bg-white px-4 text-sm outline-none transition focus:border-[#d71920]"
                />
              </div>

              <textarea
                placeholder="Mesajınız"
                rows={6}
                className="resize-none border border-gray-200 bg-white p-4 text-sm outline-none transition focus:border-[#d71920]"
              />

              <button
                type="button"
                className="group mt-2 inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0b2c5f]"
              >
                Mesajı Gönder
                <Send
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>

          {/* SIDE */}
          <aside className="space-y-7">
            <div className="overflow-hidden bg-[#06132d] text-white shadow-2xl">
              <div className="relative h-[230px]">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900&auto=format&fit=crop"
                  alt="AFS İletişim"
                  className="absolute inset-0 h-full w-full object-cover opacity-55"
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,18,48,0.78),rgba(215,25,32,0.42))]" />

                <div className="absolute bottom-6 left-6">
                  <ShieldCheck size={42} className="text-[#d71920]" />
                </div>
              </div>

              <div className="p-7">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-white/55">
                  Hızlı Destek
                </p>

                <h3 className="mt-3 text-2xl font-black uppercase leading-tight">
                  Size en uygun çözümü birlikte belirleyelim.
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/68">
                  Cihaz, sistem, bakım, kontrol ve hizmet ihtiyaçlarınız için
                  AFS ekibiyle iletişim kurabilirsiniz.
                </p>

                <Link
                  href="/teklif-al"
                  className="group mt-6 inline-flex items-center gap-2 bg-[#d71920] px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
                >
                  Teklif Al
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            <div className="bg-[#f4f6f8] p-7">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d71920]">
                Hızlı Yönlendirme
              </p>

              <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-[#101827]">
                Başvuru alanınızı seçin.
              </h3>

              <div className="mt-6 space-y-3">
                {quickLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex items-center justify-between border border-gray-200 bg-white px-4 py-3 text-sm font-black uppercase tracking-wide text-[#0b2c5f] transition hover:border-[#d71920] hover:bg-[#d71920] hover:text-white"
                  >
                    {item.title}
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 p-7">
              <MessageCircle size={38} className="text-[#d71920]" />

              <h3 className="mt-5 text-2xl font-black uppercase text-[#101827]">
                WhatsApp Hattı
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Hızlı iletişim için WhatsApp yönlendirme alanı buraya
                bağlanabilir.
              </p>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 bg-[#0b2c5f] px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#d71920]"
              >
                WhatsApp ile Yaz
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Konum
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              AFS Yangın İletişim Noktası
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Harita bağlantısı ve açık adres bilgisi netleştiğinde bu alana
              Google Maps entegrasyonu eklenebilir.
            </p>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#06132d] text-white shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1800&auto=format&fit=crop"
              alt="AFS harita"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,18,48,0.9),rgba(215,25,32,0.22))]" />

            <div className="relative max-w-xl px-6 text-center">
              <MapPin size={52} className="mx-auto text-[#d71920]" />
              <h3 className="mt-6 text-3xl font-black uppercase">
                Harita alanı eklenecek
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/68">
                Google Maps iframe veya konum bağlantısı hazır olduğunda bu
                alan gerçek harita ile değiştirilebilir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}