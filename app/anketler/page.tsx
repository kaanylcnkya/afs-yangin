// app/anketler/page.tsx

"use client";

import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileUp,
  GraduationCap,
  LockKeyhole,
  MessageSquareWarning,
  Send,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

const feedbackCards = [
  {
    key: "memnuniyet",
    title: "Müşteri Memnuniyet Anketi",
    description:
      "AFS Yangın'dan aldığınız projelendirme, dolum, periyodik bakım veya danışmanlık hizmetlerini değerlendirin.",
    icon: Star,
  },
  {
    key: "sikayet",
    title: "Şikayet, İtiraz ve Öneri Formu",
    description:
      "Aldığınız hizmette karşılaştığınız aksaklıkları, rapor itirazlarınızı veya geliştirme önerilerinizi iletin.",
    icon: MessageSquareWarning,
  },
  {
    key: "egitim",
    title: "Eğitim ve Tatbikat Değerlendirme Anketi",
    description:
      "Kurumsal yangın eğitimi ve acil durum tatbikatlarımızın etkisini birlikte değerlendirelim.",
    icon: GraduationCap,
  },
];

const qualityItems = [
  "TS EN ISO 9001 kalite yönetim anlayışı",
  "Departman yöneticileri tarafından titiz inceleme",
  "Hizmet kalitesini sürekli geliştirme yaklaşımı",
  "Şikayet, itiraz ve önerilerin tarafsız değerlendirilmesi",
  "En kısa sürede geri dönüş hedefi",
  "KVKK kapsamında güvenli veri kullanımı",
];

function RatingSelect({ label }: { label: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-black uppercase tracking-wide text-gray-500">
        {label}
      </label>

      <select className="h-14 w-full border border-gray-200 px-4 text-sm text-gray-500 outline-none transition focus:border-[#d71920]">
        <option>1-5 Puan Arası Seçiniz</option>
        <option>1 - Çok Zayıf</option>
        <option>2 - Zayıf</option>
        <option>3 - Orta</option>
        <option>4 - İyi</option>
        <option>5 - Çok İyi</option>
      </select>
    </div>
  );
}

export default function SurveysPage() {
  const [activeForm, setActiveForm] = useState("memnuniyet");

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1800&auto=format&fit=crop"
          alt="AFS Anketler ve Geri Bildirim"
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
              Anketler ve Geri Bildirim
            </p>

            <h1 className="mt-5 max-w-5xl text-[34px] font-black uppercase leading-[1.08] tracking-[-0.035em] text-white sm:text-[42px] md:text-[58px] xl:text-[70px]">
              Sizin sesiniz, bizim pusulamız.
            </h1>

            <h2 className="mt-5 max-w-4xl text-2xl font-black uppercase leading-tight text-white/90 md:text-4xl">
              Kalitemizi birlikte inşa ediyoruz.
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              AFS Yangın Mühendislik Hizmetleri A.Ş. olarak bizim için bir
              projenin tamamlanması, işin bittiği değil; uzun soluklu bir güven
              ilişkisinin başladığı andır.
            </p>

            <div className="mt-8 max-w-3xl border-l-4 border-[#d71920] bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-bold leading-7 text-white/88 md:text-base">
                TS EN ISO 9001 Kalite Yönetim Sistemi standartlarımız gereği,
                sunduğumuz hizmetleri her geçen gün daha da kusursuzlaştırmak
                için en çok sizin geri bildirimlerinize güveniyoruz.
              </p>
            </div>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75">
              Aldığınız hizmeti değerlendirmek, aklınıza takılan bir konuya
              itiraz etmek veya yenilikçi önerilerinizi bizimle paylaşmak için
              aşağıdaki formları kullanabilirsiniz.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#geri-bildirim-formlari"
                className="group inline-flex items-center justify-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Formları Görüntüle
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="#kvkk"
                className="inline-flex items-center justify-center border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Gizlilik Notu
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
              <ClipboardCheck size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Kalite Takibi
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Geri bildirimleriniz hizmet kalitemizi artırmak için düzenli
                olarak değerlendirilir.
              </p>
            </div>

            <div className="bg-white p-7 shadow-2xl">
              <Users size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Departman İncelemesi
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                İletilen her form ilgili departman yöneticileri tarafından
                titizlikle incelenir.
              </p>
            </div>

            <div className="bg-white p-7 shadow-2xl">
              <ShieldCheck size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Tarafsız Süreç
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Şikayet, itiraz ve öneriler AFS kalite taahhüdü kapsamında
                tarafsızlıkla ele alınır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY STRIP */}
      <section className="py-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Geri Bildirim Yaklaşımımız
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
              Bize ilettiğiniz her form kalite sürecimizin bir parçasıdır.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
              Memnuniyet, şikayet, itiraz, öneri ve eğitim değerlendirme
              formlarınız; hizmet kalitemizin geliştirilmesi, süreçlerin
              iyileştirilmesi ve müşteri deneyiminin güçlendirilmesi için
              dikkate alınır.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {qualityItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 border border-gray-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2
                  size={22}
                  className="mt-0.5 shrink-0 text-[#d71920]"
                />
                <p className="text-sm font-bold leading-7 text-gray-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMS */}
      <section id="geri-bildirim-formlari" className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Geri Bildirim Formları
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              İhtiyacınıza göre form seçin.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Aşağıdaki başlıklardan birini seçerek ilgili form alanlarını
              açabilir ve geri bildiriminizi AFS kalite sürecine iletebilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {feedbackCards.map((card) => {
              const Icon = card.icon;
              const isActive = activeForm === card.key;

              return (
                <button
                  key={card.key}
                  type="button"
                  onClick={() => setActiveForm(card.key)}
                  className={`group text-left transition duration-300 ${
                    isActive
                      ? "bg-[#06132d] text-white shadow-2xl"
                      : "bg-white text-[#101827] shadow-sm hover:-translate-y-1 hover:shadow-2xl"
                  } p-7`}
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center transition ${
                      isActive
                        ? "bg-[#d71920] text-white"
                        : "bg-[#eef1f5] text-[#d71920] group-hover:bg-[#d71920] group-hover:text-white"
                    }`}
                  >
                    <Icon size={32} />
                  </div>

                  <div className="mt-7 flex items-start justify-between gap-5">
                    <h3 className="text-xl font-black uppercase leading-tight">
                      {card.title}
                    </h3>

                    <ChevronDown
                      size={22}
                      className={`shrink-0 transition ${
                        isActive ? "rotate-180 text-[#d71920]" : "text-gray-400"
                      }`}
                    />
                  </div>

                  <p
                    className={`mt-4 text-sm leading-7 ${
                      isActive ? "text-white/68" : "text-gray-600"
                    }`}
                  >
                    {card.description}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mt-10 bg-white p-6 shadow-2xl md:p-8">
            {activeForm === "memnuniyet" && (
              <form className="grid gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d71920]">
                    Form 01
                  </p>
                  <h3 className="mt-3 text-2xl font-black uppercase text-[#101827]">
                    Müşteri Memnuniyet Anketi
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600">
                    AFS Yangın'dan aldığınız projelendirme, dolum, periyodik
                    bakım veya danışmanlık hizmetlerini nasıl buldunuz? Güçlü
                    yönlerimizi ve geliştirmemiz gereken yanları bizimle
                    paylaşın.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Ad Soyad / Firma Ünvanı"
                    className="h-14 border border-gray-200 px-4 text-sm outline-none transition focus:border-[#d71920]"
                  />

                  <input
                    type="text"
                    placeholder="İletişim Bilgileriniz (E-Posta / Telefon)"
                    className="h-14 border border-gray-200 px-4 text-sm outline-none transition focus:border-[#d71920]"
                  />
                </div>

                <select className="h-14 border border-gray-200 px-4 text-sm text-gray-500 outline-none transition focus:border-[#d71920]">
                  <option>Hizmet Aldığınız Konu</option>
                  <option>Yangın Söndürme Cihazı</option>
                  <option>Sistem Kurulumu</option>
                  <option>Periyodik Bakım</option>
                  <option>Danışmanlık ve Proje</option>
                </select>

                <div className="grid gap-4 md:grid-cols-3">
                  <RatingSelect label="Hizmet Hızımız" />
                  <RatingSelect label="Teknik Personelimizin Uzmanlığı ve İletişimi" />
                  <RatingSelect label="Genel Memnuniyet Dereceniz" />
                </div>

                <textarea
                  placeholder="Eklemek İstediğiniz Düşünceleriniz"
                  rows={6}
                  className="resize-none border border-gray-200 p-4 text-sm outline-none transition focus:border-[#d71920]"
                />

                <button
                  type="button"
                  className="group inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0b2c5f]"
                >
                  Anketi Gönder
                  <Send
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </form>
            )}

            {activeForm === "sikayet" && (
              <form className="grid gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d71920]">
                    Form 02
                  </p>
                  <h3 className="mt-3 text-2xl font-black uppercase text-[#101827]">
                    Şikayet, İtiraz ve Öneri Formu
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600">
                    Bizim için her şikayet, daha iyiye ulaşmak için bir
                    fırsattır. Aldığınız hizmette karşılaştığınız bir aksaklık,
                    raporlarınıza dair bir itiraz veya sistemlerimizi
                    geliştirecek bir öneriniz varsa lütfen çekinmeden bize
                    iletin.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Ad Soyad / Firma Ünvanı"
                    className="h-14 border border-gray-200 px-4 text-sm outline-none transition focus:border-[#d71920]"
                  />

                  <input
                    type="text"
                    placeholder="İletişim Bilgileriniz"
                    className="h-14 border border-gray-200 px-4 text-sm outline-none transition focus:border-[#d71920]"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <select className="h-14 border border-gray-200 px-4 text-sm text-gray-500 outline-none transition focus:border-[#d71920]">
                    <option>Bildirim Türü</option>
                    <option>Şikayet</option>
                    <option>Rapor-Hizmet İtirazı</option>
                    <option>Öneri</option>
                  </select>

                  <input
                    type="text"
                    placeholder="İlgili Departman veya Hizmet"
                    className="h-14 border border-gray-200 px-4 text-sm outline-none transition focus:border-[#d71920]"
                  />
                </div>

                <textarea
                  placeholder="Konunun Detayları: Lütfen karşılaştığınız durumu veya önerinizi detaylıca yazınız."
                  rows={7}
                  className="resize-none border border-gray-200 p-4 text-sm outline-none transition focus:border-[#d71920]"
                />

                <label className="group flex min-h-[92px] cursor-pointer items-center justify-between gap-4 border border-dashed border-gray-300 bg-[#f8fafc] px-5 py-4 transition hover:border-[#d71920] hover:bg-white">
                  <span className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center bg-white text-[#d71920] shadow-sm group-hover:bg-[#d71920] group-hover:text-white">
                      <FileUp size={22} />
                    </span>

                    <span>
                      <span className="block text-sm font-black uppercase text-[#101827]">
                        Dosya / Görsel Ekle
                      </span>
                      <span className="mt-1 block text-xs font-semibold text-gray-500">
                        Opsiyonel alan — varsa belge veya görsel
                        yükleyebilirsiniz.
                      </span>
                    </span>
                  </span>

                  <span className="hidden text-xs font-black uppercase tracking-wide text-[#d71920] sm:block">
                    Dosya Seç
                  </span>

                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                </label>

                <button
                  type="button"
                  className="group inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0b2c5f]"
                >
                  Bildirimi Gönder
                  <Send
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </form>
            )}

            {activeForm === "egitim" && (
              <form className="grid gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d71920]">
                    Form 03
                  </p>
                  <h3 className="mt-3 text-2xl font-black uppercase text-[#101827]">
                    Eğitim ve Tatbikat Değerlendirme Anketi
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600">
                    İşletmenizde gerçekleştirdiğimiz Kurumsal Yangın Eğitimi ve
                    Acil Durum Tatbikatları ne kadar etkiliydi? Personelinizin
                    farkındalığını artırmak için eğitimlerimizi birlikte
                    değerlendirelim.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Firma Ünvanı"
                    className="h-14 border border-gray-200 px-4 text-sm outline-none transition focus:border-[#d71920]"
                  />

                  <input
                    type="date"
                    className="h-14 border border-gray-200 px-4 text-sm text-gray-500 outline-none transition focus:border-[#d71920]"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <RatingSelect label="Eğitmenimizin Konuya Hakimiyeti" />
                  <RatingSelect label="Uygulamalı Tatbikatın Verimliliği" />
                  <RatingSelect label="Eğitimde Kullanılan Görsel ve Materyaller" />
                </div>

                <textarea
                  placeholder="Eğitimle İlgili Görüş ve Önerileriniz"
                  rows={6}
                  className="resize-none border border-gray-200 p-4 text-sm outline-none transition focus:border-[#d71920]"
                />

                <button
                  type="button"
                  className="group inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0b2c5f]"
                >
                  Değerlendirmeyi Gönder
                  <Send
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* KVKK */}
      <section id="kvkk" className="bg-[#06132d] py-24 text-white">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="relative overflow-hidden bg-white p-8 text-[#101827] md:p-12">
            <div className="absolute right-[-40px] top-[-30px] text-[140px] font-black uppercase leading-none text-[#0b2c5f]/5">
              KVKK
            </div>

            <div className="relative grid gap-8 lg:grid-cols-[0.35fr_1fr] lg:items-start">
              <div>
                <div className="flex h-20 w-20 items-center justify-center bg-[#d71920] text-white">
                  <LockKeyhole size={38} />
                </div>

                <p className="mt-6 text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                  Gizlilik ve Güven
                </p>

                <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                  Verileriniz güvende.
                </h2>
              </div>

              <div>
                <p className="text-base leading-8 text-gray-600">
                  Bu sayfa üzerinden paylaştığınız tüm geri bildirimler,
                  şikayetler ve iletişim bilgileri 6698 Sayılı KVKK kapsamında
                  sadece hizmet kalitemizi artırmak amacıyla şirket içi
                  değerlendirmelerde kullanılır.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Verileriniz hiçbir şekilde üçüncü şahıslar veya kurumlarla
                  paylaşılmaz. Süreçlerin tarafsızlığı, AFS Yangın kalite
                  taahhüdü altındadır.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-4 bg-[#f4f6f8] p-5">
                    <ShieldCheck
                      size={22}
                      className="mt-0.5 shrink-0 text-[#d71920]"
                    />
                    <p className="text-sm font-bold leading-7 text-gray-700">
                      KVKK kapsamında güvenli veri işleme yaklaşımı.
                    </p>
                  </div>

                  <div className="flex items-start gap-4 bg-[#f4f6f8] p-5">
                    <BadgeCheck
                      size={22}
                      className="mt-0.5 shrink-0 text-[#d71920]"
                    />
                    <p className="text-sm font-bold leading-7 text-gray-700">
                      AFS kalite taahhüdüyle tarafsız değerlendirme süreci.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="mx-auto max-w-2xl text-base leading-8 text-white/68">
              Geri bildiriminiz bizim için değerlidir. Hizmet kalitemizi
              birlikte geliştirmek için formunuzu bize iletebilirsiniz.
            </p>

            <a
              href="#geri-bildirim-formlari"
              className="mt-7 inline-flex items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
            >
              Formlara Geri Dön
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}