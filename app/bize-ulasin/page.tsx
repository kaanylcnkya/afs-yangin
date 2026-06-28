// app/bize-ulasin/page.tsx

"use client";

import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  Factory,
  FileUp,
  Handshake,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";

const contactCards = [
  {
    title: "AFS Merkez İletişim Hattı",
    value: "0530 927 50 00",
    href: "tel:05309275000",
    icon: Phone,
  },
  {
    title: "AFS Aliağa Tesis İletişim Hattı",
    value: "0232 618 01 76",
    href: "tel:02326180176",
    icon: Factory,
  },
  {
    title: "AFS Kurumsal WhatsApp Destek Hattı",
    value: "0542 447 87 60",
    href: "https://wa.me/905424478760",
    icon: MessageSquare,
  },
];

const emailCards = [
  {
    title: "Genel Bilgi & Destek",
    value: "info@afsyangin.com",
    href: "mailto:info@afsyangin.com",
  },
  {
    title: "Satış & Teklif Talebi",
    value: "satis@afsyangin.com",
    href: "mailto:satis@afsyangin.com",
  },
  {
    title: "İş Birlikleri ve Tedarik",
    value: "satinalma@afsyangin.com",
    href: "mailto:satinalma@afsyangin.com",
  },
  {
    title: "Kariyer Başvuruları",
    value: "ik@afsyangin.com",
    href: "mailto:ik@afsyangin.com",
  },
];

const formOptions = [
  {
    key: "musteri",
    title: "Müşteri İletişim Formu",
    subtitle: "Teklif, keşif, bakım ve servis talebi",
    description:
      "İşletmenizin veya kurumunuzun yangın güvenliği ihtiyaçları için ücretsiz keşif ve hızlı teklif alın.",
    icon: ShieldCheck,
  },
  {
    key: "cozum",
    title: "Çözüm Ortağı & Tedarikçi Formu",
    subtitle: "Tedarik, bayilik ve franchise başvuruları",
    description:
      "Ürün tedariki sağlamak, AFS bayisi olmak veya iş ortaklığı ekosistemimize katılmak için bize ulaşın.",
    icon: Handshake,
  },
  {
    key: "kariyer",
    title: "Kariyer ve İnsan Kaynakları Formu",
    subtitle: "AFS ailesine katılmak isteyenler",
    description:
      "Genç mühendis adayıysanız veya sahada meslek edinmek istiyorsanız başvurunuzu İK birimimize iletin.",
    icon: Users,
  },
  {
    key: "genel",
    title: "Genel Görüş, Öneri ve Şikayetler",
    subtitle: "Kalite departmanına geri bildirim",
    description:
      "Hizmet kalitemizi artırmak için görüş, öneri ve şikayetlerinizi kalite departmanımıza iletebilirsiniz.",
    icon: MessageSquare,
  },
];

const quickItems = [
  "Yangın güvenliği teklifi",
  "Ücretsiz keşif talebi",
  "Bakım ve servis talebi",
  "Tedarikçi başvurusu",
  "Bayilik / franchise görüşmesi",
  "Kariyer başvurusu",
];

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState("musteri");

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1800&auto=format&fit=crop"
          alt="AFS Yangın Bize Ulaşın"
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
              Bize Ulaşın / İletişim
            </p>

            <h1 className="mt-5 max-w-5xl text-[34px] font-black uppercase leading-[1.08] tracking-[-0.035em] text-white sm:text-[42px] md:text-[58px] xl:text-[70px]">
              Sorularınız mı var?
            </h1>

            <h2 className="mt-5 max-w-4xl text-2xl font-black uppercase leading-tight text-white/90 md:text-4xl">
              Çözüm için bir telefon, bir tık uzağınızdayız.
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              AFS Yangın Mühendislik Hizmetleri Tic. San. A.Ş. olarak;
              iletişimde mesafelere değil, anında çözüme inanıyoruz.
            </p>

            <div className="mt-8 max-w-3xl border-l-4 border-[#d71920] bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-bold leading-7 text-white/88 md:text-base">
                İster tesisiniz için yangın güvenliği teklifi almak isteyen bir
                müşteri, ister ekosistemimize katılmak isteyen bir tedarikçi
                veya ekibimizde yer almak isteyen genç bir yetenek olun; tüm
                departmanlarımız ve uzman mühendislerimiz size destek olmak için
                hazır.
              </p>
            </div>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75">
              Bize aşağıdaki iletişim bilgilerimizden anında ulaşabilir veya
              ihtiyacınıza uygun formu doldurarak uzmanlarımızın sizi aramasını
              sağlayabilirsiniz.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#iletisim-formu"
                className="group inline-flex items-center justify-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Formu Doldur
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="tel:05309275000"
                className="inline-flex items-center justify-center border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="relative z-10 -mt-14">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {contactCards.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="group bg-white p-7 shadow-2xl transition hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(6,19,45,0.18)]"
                >
                  <Icon size={38} className="text-[#d71920]" />

                  <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-bold leading-7 text-gray-600">
                    {item.value}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase text-[#d71920]">
                    Ulaş
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORPORATE INFO */}
      <section className="py-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Kurumsal İletişim Bilgileri
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
              AFS Yangın’a doğrudan ulaşın.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
              Satış, teklif, tedarik, kariyer ve genel destek talepleriniz için
              ilgili iletişim kanallarımızı kullanabilirsiniz.
            </p>

            <div className="mt-8 bg-[#06132d] p-6 text-white shadow-xl">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d71920]">
                Firma Ünvanı
              </p>

              <h3 className="mt-3 text-2xl font-black uppercase leading-tight">
                AFS Yangın Mühendislik Hizmetleri Tic. San. A.Ş.
              </h3>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <Building2 size={28} className="mt-1 shrink-0 text-[#d71920]" />

                <div>
                  <h3 className="text-lg font-black uppercase text-[#101827]">
                    Merkez Ofis
                  </h3>

                  <p className="mt-2 text-sm font-bold uppercase tracking-wide text-gray-400">
                    Yönetim & Mühendislik Adresi
                  </p>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    Halkapınar Mahallesi, 1004 Sokak No:5D Keremoğlu İş
                    Merkezi, Konak / İZMİR
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <Factory size={28} className="mt-1 shrink-0 text-[#d71920]" />

                <div>
                  <h3 className="text-lg font-black uppercase text-[#101827]">
                    Dolum, Bakım ve Servis Tesisi
                  </h3>

                  <p className="mt-2 text-sm font-bold uppercase tracking-wide text-gray-400">
                    Aliağa Operasyon Tesisi
                  </p>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    Samurlu Mahallesi, 1251 Sokak, No: 8C/C, Aliağa / İZMİR
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {emailCards.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group border border-gray-200 bg-[#f4f6f8] p-5 transition hover:border-[#d71920] hover:bg-white hover:shadow-lg"
                >
                  <Mail size={22} className="text-[#d71920]" />

                  <h4 className="mt-4 text-sm font-black uppercase text-[#101827]">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm font-bold text-gray-600">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK NEEDS */}
      <section className="bg-[#06132d] py-24 text-white">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Size Nasıl Yardımcı Olabiliriz?
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              İhtiyacınızı seçin, sizi doğru kişiye yönlendirelim.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              AFS uzmanları, talebinizin konusuna göre ilgili departman
              tarafından değerlendirme yapılmasını sağlar.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {quickItems.map((item) => (
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

      {/* SMART FORM */}
      <section id="iletisim-formu" className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Akıllı İletişim Formu
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              Hangi konuda bize ulaşmak istersiniz?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Aşağıdaki seçeneklerden birini seçtiğinizde ilgili form alanları
              açılır ve başvurunuz doğru departmana yönlendirilir.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
            {formOptions.map((option) => {
              const Icon = option.icon;
              const isActive = activeForm === option.key;

              return (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => setActiveForm(option.key)}
                  className={`group text-left transition duration-300 ${
                    isActive
                      ? "bg-[#06132d] text-white shadow-2xl"
                      : "bg-white text-[#101827] shadow-sm hover:-translate-y-1 hover:shadow-2xl"
                  } p-6`}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center transition ${
                      isActive
                        ? "bg-[#d71920] text-white"
                        : "bg-[#eef1f5] text-[#d71920] group-hover:bg-[#d71920] group-hover:text-white"
                    }`}
                  >
                    <Icon size={28} />
                  </div>

                  <div className="mt-6 flex items-start justify-between gap-5">
                    <h3 className="text-lg font-black uppercase leading-tight">
                      {option.title}
                    </h3>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 transition ${
                        isActive ? "rotate-180 text-[#d71920]" : "text-gray-400"
                      }`}
                    />
                  </div>

                  <p
                    className={`mt-3 text-xs font-black uppercase tracking-wide ${
                      isActive ? "text-white/45" : "text-gray-400"
                    }`}
                  >
                    {option.subtitle}
                  </p>

                  <p
                    className={`mt-4 text-sm leading-7 ${
                      isActive ? "text-white/68" : "text-gray-600"
                    }`}
                  >
                    {option.description}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mt-10 bg-white p-6 shadow-2xl md:p-8">
            {activeForm === "musteri" && (
              <form className="grid gap-5">
                <FormHeader
                  label="Form 01"
                  title="Müşteri İletişim Formu"
                  description="İşletmenizin veya kurumunuzun yangın güvenliği ihtiyaçları için ücretsiz keşif ve hızlı teklif alın."
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <input className="form-input" placeholder="Ad Soyad / Firma Ünvanı" />
                  <input className="form-input" placeholder="Telefon Numaranız" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input className="form-input" placeholder="E-Posta Adresiniz" />
                  <input className="form-input" placeholder="Şehir / İlçe" />
                </div>

                <select className="form-input text-gray-500">
                  <option>Talep Konunuz</option>
                  <option>Yangın Söndürme Cihazı Alımı</option>
                  <option>Sistem Kurulumu</option>
                  <option>Periyodik Bakım</option>
                  <option>Danışmanlık ve Proje</option>
                  <option>Keşif Talebi</option>
                </select>

                <textarea
                  rows={6}
                  className="form-textarea"
                  placeholder="Talebinizi kısaca açıklayın."
                />

                <SubmitButton label="Talebi Gönder" />
              </form>
            )}

            {activeForm === "cozum" && (
              <form className="grid gap-5">
                <FormHeader
                  label="Form 02"
                  title="Çözüm Ortağı & Tedarikçi Formu"
                  description="Ürün tedariki sağlamak, AFS bayisi olmak veya franchise ekosistemimize katılmak için bize ulaşın."
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <input className="form-input" placeholder="Firma Ünvanı" />
                  <input className="form-input" placeholder="Yetkili Kişi Adı Soyadı" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input className="form-input" placeholder="Telefon Numaranız" />
                  <input className="form-input" placeholder="E-Posta Adresiniz" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input className="form-input" placeholder="Faaliyet Gösterdiğiniz İl / İlçe" />
                  <select className="form-input text-gray-500">
                    <option>Başvuru Türü</option>
                    <option>Tedarikçi Olmak İstiyorum</option>
                    <option>AFS Bayisi Olmak İstiyorum</option>
                    <option>Franchise / İş Ortaklığı Görüşmek İstiyorum</option>
                    <option>Genel İş Birliği</option>
                  </select>
                </div>

                <textarea
                  rows={6}
                  className="form-textarea"
                  placeholder="Ürünleriniz, hizmetleriniz veya iş birliği teklifiniz hakkında bilgi veriniz."
                />

                <SubmitButton label="Başvuruyu Gönder" />
              </form>
            )}

            {activeForm === "kariyer" && (
              <form className="grid gap-5">
                <FormHeader
                  label="Form 03"
                  title="Kariyer ve İnsan Kaynakları Formu"
                  description="AFS ailesine katılmak için başvurunuzu İK birimimize iletin."
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <input className="form-input" placeholder="Ad Soyad" />
                  <input className="form-input" placeholder="Telefon Numaranız" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input className="form-input" placeholder="E-Posta Adresiniz" />
                  <select className="form-input text-gray-500">
                    <option>Başvurmak İstediğiniz Alan</option>
                    <option>Genç Mühendis Adayı</option>
                    <option>YSC Bakım Teknisyeni</option>
                    <option>Saha Personeli</option>
                    <option>Genel Başvuru</option>
                  </select>
                </div>

                <label className="group flex min-h-[92px] cursor-pointer items-center justify-between gap-4 border border-dashed border-gray-300 bg-[#f8fafc] px-5 py-4 transition hover:border-[#d71920] hover:bg-white">
                  <span className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center bg-white text-[#d71920] shadow-sm group-hover:bg-[#d71920] group-hover:text-white">
                      <FileUp size={22} />
                    </span>

                    <span>
                      <span className="block text-sm font-black uppercase text-[#101827]">
                        CV / Özgeçmiş Yükle
                      </span>
                      <span className="mt-1 block text-xs font-semibold text-gray-500">
                        PDF, DOC veya DOCX formatında dosya yükleyebilirsiniz.
                      </span>
                    </span>
                  </span>

                  <span className="hidden text-xs font-black uppercase tracking-wide text-[#d71920] sm:block">
                    Dosya Seç
                  </span>

                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                </label>

                <textarea
                  rows={6}
                  className="form-textarea"
                  placeholder="Kendinizden, hedeflerinizden veya çalışma modeli tercihinizden bahsedebilirsiniz."
                />

                <SubmitButton label="Kariyer Başvurusunu Gönder" />
              </form>
            )}

            {activeForm === "genel" && (
              <form className="grid gap-5">
                <FormHeader
                  label="Form 04"
                  title="Genel Görüş, Öneri ve Şikayetler"
                  description="Hizmet kalitemizi artırmak için düşünceleriniz bizim için altın değerindedir."
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <input className="form-input" placeholder="Ad Soyad / Firma Ünvanı" />
                  <input className="form-input" placeholder="İletişim Bilgileriniz" />
                </div>

                <select className="form-input text-gray-500">
                  <option>Bildirim Türü</option>
                  <option>Görüş</option>
                  <option>Öneri</option>
                  <option>Şikayet</option>
                  <option>Diğer</option>
                </select>

                <textarea
                  rows={7}
                  className="form-textarea"
                  placeholder="Görüş, öneri veya şikayetinizi detaylıca yazınız."
                />

                <SubmitButton label="Bildirimi Gönder" />
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MAPS */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Konum ve Ulaşım
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              Bizi ziyaret edin.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Sizleri merkez ofisimizde kahve içmeye veya Aliağa’daki dolum ve
              bakım tesisimizde operasyonlarımızı yerinde görmeye bekleriz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            <MapBlock
              title="Merkez Ofis"
              subtitle="Konak / İzmir"
              query="Halkapınar Mahallesi 1004 Sokak No 5D Keremoğlu İş Merkezi Konak İzmir"
            />

            <MapBlock
              title="Dolum, Bakım ve Servis Tesisi"
              subtitle="Aliağa / İzmir"
              query="Samurlu 1251. Sokak no 8C D C Aliağa İzmir PXX9+XF"
            />
          </div>
        </div>
      </section>

      <style jsx global>{`
        .form-input {
          height: 56px;
          border: 1px solid #e5e7eb;
          padding: 0 16px;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .form-input:focus {
          border-color: #d71920;
        }

        .form-textarea {
          resize: none;
          border: 1px solid #e5e7eb;
          padding: 16px;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .form-textarea:focus {
          border-color: #d71920;
        }
      `}</style>
    </main>
  );
}

function FormHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d71920]">
        {label}
      </p>

      <h3 className="mt-3 text-2xl font-black uppercase text-[#101827]">
        {title}
      </h3>

      <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600">
        {description}
      </p>
    </div>
  );
}

function SubmitButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="group inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0b2c5f]"
    >
      {label}
      <Send size={18} className="transition group-hover:translate-x-1" />
    </button>
  );
}

function MapBlock({
  title,
  subtitle,
  query,
}: {
  title: string;
  subtitle: string;
  query: string;
}) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    query
  )}&output=embed`;

  return (
    <div className="overflow-hidden bg-white shadow-xl">
      <div className="flex items-start gap-4 bg-[#06132d] p-6 text-white">
        <MapPin size={28} className="mt-1 shrink-0 text-[#d71920]" />

        <div>
          <h3 className="text-xl font-black uppercase">{title}</h3>
          <p className="mt-2 text-sm font-bold uppercase tracking-wide text-white/55">
            {subtitle}
          </p>
        </div>
      </div>

      <iframe
        src={src}
        className="h-[360px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}