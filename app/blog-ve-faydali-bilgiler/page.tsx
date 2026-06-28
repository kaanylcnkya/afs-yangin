// app/blog-ve-faydali-bilgiler/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  BookOpenText,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Flame,
  GraduationCap,
  HardHat,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Timer,
  Utensils,
  Wrench,
} from "lucide-react";

const blogPosts = [
  {
    number: "01",
    title:
      "2026 Yangın Yönetmeliği Revizyonu: İşletmeleri ve Tesisleri Neler Bekliyor?",
    summary:
      "Binaların Yangından Korunması Hakkında Yönetmelik'te yapılması beklenen köklü değişiklikler, fabrikalar, oteller ve yüksek katlı siteler için hazırlık adımları, kapatma ve cezai yaptırımlardan kaçınmak için alınması gereken acil önlemler.",
    audience:
      "Fabrika yöneticileri, İSG uzmanları, site ve AVM yönetimleri.",
    category: "Yönetmelik",
    icon: FileCheck2,
  },
  {
    number: "02",
    title:
      'Yeni Dönem Başlıyor: "Yangın Güvenlik Uzmanı" Bulundurma Zorunluluğu Nedir?',
    summary:
      "Yönetmelikle birlikte hayatımıza girecek Yangın Güvenlik Uzmanı kavramının detayları, hangi işletmelerin bu uzmanı bulundurması gerektiği, rutin kontrollerin nasıl yapılacağı ve AFS Yangın’ın bu danışmanlık hizmetini tek çatı altında nasıl sağladığı.",
    audience:
      "Yeni ruhsat alacak veya rutin denetime girecek tüm ticari işletmeler ve kurumlar.",
    category: "Danışmanlık",
    icon: ShieldAlert,
  },
  {
    number: "03",
    title:
      "Adım Adım İtfaiye Uygunluk Raporu Nasıl Alınır? En Sık Yapılan Hatalar",
    summary:
      "İşletme açılışlarında veya yenilemelerde en çok korkulan süreçlerden biri olan İtfaiye Uygunluk Raporu’nun teknik ve resmi adımları, denetmenlerin dikkat ettiği noktalar, raporun reddedilmesine sebep olan basit hatalar ve AFS’nin tek seferde onaya odaklanan proje çözümleri.",
    audience:
      "Yeni işletme sahipleri, mimari ofisler, otel ve restoran yöneticileri.",
    category: "Ruhsat Süreci",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title:
      "Hangi Yangına Hangi Tüp? İşletmeniz İçin Doğru Yangın Söndürme Cihazı Seçimi",
    summary:
      "Elektrik panosuna su sıkılır mı? Sunucu odasında neden KKT kullanılmaz? A, B, C, D ve F sınıfı yangın türleri, AFS’nin renk kodlu cihazlarının panik anında hayat kurtaran önemi ve doğru yere doğru cihaz yerleştirmenin kuralları.",
    audience:
      "İşletme müdürleri, satın alma uzmanları, ev ve araç sahipleri.",
    category: "YSC",
    icon: Flame,
  },
  {
    number: "05",
    title:
      "Yangın Tüpü Bakım Periyotları: Dolum ve Hidrostatik Test Ne Zaman Yapılmalı?",
    summary:
      "Yangın tüpü bakımlarının sadece tarih etiketi yapıştırmaktan ibaret olmadığı, TSE ve yönetmeliklere göre aylık gözle kontroller, yıllık periyodik bakımlar ve 4 yıllık zorunlu hidrostatik test süreçlerinin teknik açıklamaları.",
    audience: "İdari işler yöneticileri, İSG uzmanları, site yöneticileri.",
    category: "Bakım",
    icon: Timer,
  },
  {
    number: "06",
    title:
      "Endüstriyel Mutfaklarda Hayati Önlem: Davlumbaz Söndürme Sistemi Teknik Şartnamesi Nasıl Olmalı?",
    summary:
      "Otel, AVM ve restoran mutfaklarında sıkça yaşanan yağ yangınlarının tehlikeleri, standart cihazların neden yeterli olmadığı, doğru bir davlumbaz söndürme sisteminin teknik şartnamesinde bulunması gereken zorunlu maddeler, malzeme kalitesi ve kurulum standartları.",
    audience:
      "Otel müdürleri, restoran zinciri sahipleri, mekanik tesisat müteahhitleri.",
    category: "Davlumbaz",
    icon: Utensils,
  },
  {
    number: "07",
    title:
      "Yeni Nesil Tehlike: Elektrikli Araç ve Lityum-İyon Batarya Yangınlarına Nasıl Müdahale Edilmeli?",
    summary:
      "Kapalı otoparklar, AVM’ler ve elektrikli araç şarj istasyonlarında büyüyen lityum-iyon batarya yangınları, bu yangınların neden suyla sönmediği, termal kaçak kavramı ve AFS’nin lityum bataryalara özel söndürücü ve battaniye çözümleri.",
    audience:
      "Site ve AVM yönetimleri, otopark işletmecileri, bireysel elektrikli araç sahipleri.",
    category: "Lityum Yangını",
    icon: BatteryCharging,
  },
  {
    number: "08",
    title:
      "Akredite Periyodik Kontrolün Gücü: TÜRKAK Onaylı Raporlar Neden Önemlidir?",
    summary:
      "Yangın pompa istasyonları, havalandırma sistemleri ve algılama panellerinin muayenesinde neden akredite bir kurumla çalışılması gerektiği, SGK, Çalışma Bakanlığı ve İtfaiye denetimlerinde TÜRKAK logolu raporların sağladığı yasal güvence ve AFS & Güçbirliği Mühendislik iş birliğinin avantajları.",
    audience: "Büyük endüstriyel tesisler, fabrikalar, hastaneler ve holdingler.",
    category: "Akredite Kontrol",
    icon: BadgeCheck,
  },
];

const featuredTopics = [
  "Değişen yangın yönetmelikleri",
  "Yeni nesil yangın riskleri",
  "İtfaiye uygunluk raporu süreçleri",
  "Yangın güvenlik uzmanlığı",
  "Yangın tüpü seçimi ve bakım periyotları",
  "Davlumbaz söndürme sistemleri",
  "Lityum-iyon batarya yangınları",
  "TÜRKAK onaylı periyodik kontrol raporları",
];

const guideCards = [
  {
    title: "Yönetmelik ve Yasal Süreçler",
    description:
      "İşletmenizi ruhsat, denetim, rapor ve yönetmelik süreçlerinde güvenceye alacak rehber içerikler.",
    icon: FileCheck2,
  },
  {
    title: "Teknik Yangın Güvenliği",
    description:
      "Yangın sınıfları, cihaz seçimi, sistem kurulumu ve bakım süreçlerine dair uygulanabilir bilgiler.",
    icon: Wrench,
  },
  {
    title: "Risk Yönetimi ve Farkındalık",
    description:
      "Yeni nesil riskler, endüstriyel tehlikeler ve tesis güvenliği için önleyici bakış açısı.",
    icon: ShieldCheck,
  },
];

export default function BlogPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop"
          alt="AFS Blog ve Faydalı Bilgiler"
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
              Blog ve Faydalı Bilgiler
            </p>

            <h1 className="mt-5 max-w-5xl text-[34px] font-black uppercase leading-[1.08] tracking-[-0.035em] text-white sm:text-[42px] md:text-[58px] xl:text-[70px]">
              Yangın güvenliğinde bilinçli adımlar.
            </h1>

            <h2 className="mt-5 max-w-4xl text-2xl font-black uppercase leading-tight text-white/90 md:text-4xl">
              Hayat kurtaran çözümler.
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              Değişen yönetmelikler, yeni nesil yangın riskleri ve işletmenizi
              yasal olarak güvenceye alacak mühendislik çözümleri hakkında en
              güncel bilgilere buradan ulaşabilirsiniz.
            </p>

            <div className="mt-8 max-w-3xl border-l-4 border-[#d71920] bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-bold leading-7 text-white/88 md:text-base">
                AFS Yangın uzmanları tarafından hazırlanan rehber yazılarımızla,
                riskleri felakete dönüşmeden önce durdurun.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#blog-yazilari"
                className="group inline-flex items-center justify-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Blog Başlıklarını İncele
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/bize-ulasin"
                className="inline-flex items-center justify-center border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Uzmana Danışın
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TOP CARDS */}
      <section className="relative z-10 -mt-14">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {guideCards.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="bg-white p-7 shadow-2xl">
                  <Icon size={38} className="text-[#d71920]" />

                  <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="py-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Faydalı Bilgi Merkezi
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
              Riskleri anlamak, güvenliği doğru yönetmenin ilk adımıdır.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
              Blog içeriklerimiz; işletme yöneticileri, İSG uzmanları, site ve
              AVM yönetimleri, otel ve restoran işletmeleri, fabrika yöneticileri
              ve bireysel kullanıcılar için pratik rehber niteliğindedir.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {featuredTopics.map((item) => (
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

      {/* BLOG POSTS */}
      <section id="blog-yazilari" className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              İlk Etapta Yayımlanacak Yazılar
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              8 vurucu blog başlığı ve konu fikri.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
              AFS Yangın uzmanlığıyla hazırlanacak bu rehber içerikler,
              işletmelerin yangın güvenliği süreçlerine bilinçli şekilde
              hazırlanmasına destek olur.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            {blogPosts.map((post) => {
              const Icon = post.icon;

              return (
                <article
                  key={post.number}
                  className="group relative overflow-hidden border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#d71920] hover:shadow-2xl md:p-8"
                >
                  <div className="absolute right-[-26px] top-[-24px] text-[100px] font-black uppercase leading-none text-[#0b2c5f]/5">
                    {post.number}
                  </div>

                  <div className="relative flex flex-wrap items-center gap-3">
                    <span className="inline-flex h-14 w-14 items-center justify-center bg-[#eef1f5] text-[#d71920] transition group-hover:bg-[#d71920] group-hover:text-white">
                      <Icon size={28} />
                    </span>

                    <span className="inline-flex bg-[#06132d] px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
                      {post.category}
                    </span>
                  </div>

                  <p className="relative mt-7 text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                    Blog {post.number}
                  </p>

                  <h3 className="relative mt-4 text-2xl font-black uppercase leading-tight text-[#101827]">
                    {post.title}
                  </h3>

                  <div className="relative mt-6 border-l-4 border-[#d71920] bg-[#f4f6f8] p-5">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-gray-400">
                      Konu Özeti
                    </p>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {post.summary}
                    </p>
                  </div>

                  <div className="relative mt-5 bg-white">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-gray-400">
                      Hedef Kitle
                    </p>

                    <p className="mt-2 text-sm font-bold leading-7 text-[#0b2c5f]">
                      {post.audience}
                    </p>
                  </div>

                  <Link
                    href="/bize-ulasin"
                    className="relative mt-7 inline-flex items-center gap-3 text-sm font-black uppercase text-[#d71920]"
                  >
                    Bu Konu Hakkında Bilgi Al
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* AUTHORITY CTA */}
      <section className="bg-[#06132d] py-24 text-white">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              AFS Uzmanlığı
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              Bilgiyi sadece okumayın, işletmenizde uygulayın.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              Yangın güvenliği süreçlerinde doğru bilgi, doğru analiz ve doğru
              uygulama birlikte ilerlemelidir. AFS Yangın, rehber içeriklerin
              yanında danışmanlık, projelendirme, bakım ve periyodik kontrol
              süreçlerinde de yanınızdadır.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Yangın danışmanlığı",
              "İtfaiye uygunluk raporu",
              "Yangın güvenlik uzmanlığı",
              "YSC seçimi ve bakım takibi",
              "Davlumbaz söndürme sistemi",
              "Lityum batarya yangını çözümleri",
              "Akredite periyodik kontrol",
              "TÜRKAK onaylı raporlama",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <BookOpenText
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

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="relative overflow-hidden bg-[#06132d] p-8 text-white md:p-14">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop"
              alt="AFS Yangın Blog ve Faydalı Bilgiler"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98),rgba(5,18,48,0.78),rgba(215,25,32,0.28))]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                  Bilinçli Güvenlik
                </p>

                <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight md:text-5xl">
                  Riskleri felakete dönüşmeden önce durdurun.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                  Yönetmelikler, yangın riskleri ve yasal süreçler hakkında
                  uzman desteği almak için AFS ekibiyle iletişime geçin.
                </p>
              </div>

              <Link
                href="/bize-ulasin"
                className="group inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Uzmana Danışın
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