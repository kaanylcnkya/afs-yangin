// app/blog-ve-faydali-bilgiler/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronRight,
  Clock,
  Flame,
  Search,
  ShieldCheck,
  Tag,
  UserRound,
} from "lucide-react";

const categories = [
  "Tümü",
  "Yangın Güvenliği",
  "Yangın Söndürme Cihazları",
  "Bakım ve Kontrol",
  "Yönetmelik",
  "İşletmeler İçin Rehber",
];

const featuredPost = {
  title: "İşletmeler İçin Yangın Güvenliği Neden Ertelenmemeli?",
  description:
    "Yangın güvenliği sadece yasal bir zorunluluk değil; çalışan güvenliği, iş sürekliliği ve kurumsal sorumluluk açısından kritik bir süreçtir.",
  category: "Yangın Güvenliği",
  date: "2026",
  readTime: "5 dk okuma",
  image:
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop",
  href: "/blog-ve-faydali-bilgiler/isletmeler-icin-yangin-guvenligi",
};

const posts = [
  {
    title: "Yangın Söndürme Cihazı Bakımı Ne Sıklıkla Yapılmalı?",
    description:
      "Periyodik bakım süreçleri, cihazların doğru çalışması ve işletme güvenliği için düzenli olarak takip edilmelidir.",
    category: "Bakım ve Kontrol",
    date: "2026",
    readTime: "4 dk",
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=900&auto=format&fit=crop",
    href: "/blog-ve-faydali-bilgiler/yangin-sondurme-cihazi-bakimi",
  },
  {
    title: "İş Yerlerinde Yangın Risk Analizi Nasıl Yapılır?",
    description:
      "Risk analizi; alan yapısı, çalışan sayısı, ekipman konumu ve acil durum planlarıyla birlikte değerlendirilmelidir.",
    category: "İşletmeler İçin Rehber",
    date: "2026",
    readTime: "6 dk",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop",
    href: "/blog-ve-faydali-bilgiler/yangin-risk-analizi",
  },
  {
    title: "Yangın Algılama ve Alarm Sistemleri Neden Önemlidir?",
    description:
      "Erken uyarı sistemleri, yangına hızlı müdahale ve tahliye sürecinin güvenli yönetilmesi açısından kritik rol oynar.",
    category: "Yangın Güvenliği",
    date: "2026",
    readTime: "5 dk",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=900&auto=format&fit=crop",
    href: "/blog-ve-faydali-bilgiler/yangin-algilama-alarm-sistemleri",
  },
  {
    title: "Yangın Yönetmelikleri İşletmeler İçin Ne Anlama Gelir?",
    description:
      "Yönetmeliklere uygunluk; denetim, sigorta, çalışan güvenliği ve işletme devamlılığı açısından önem taşır.",
    category: "Yönetmelik",
    date: "2026",
    readTime: "7 dk",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=900&auto=format&fit=crop",
    href: "/blog-ve-faydali-bilgiler/yangin-yonetmelikleri",
  },
  {
    title: "Yangın Tüpü Seçerken Nelere Dikkat Edilmeli?",
    description:
      "Alan türü, risk sınıfı, kullanılacak cihaz tipi ve doğru konumlandırma yangın tüpü seçiminde belirleyicidir.",
    category: "Yangın Söndürme Cihazları",
    date: "2026",
    readTime: "4 dk",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=900&auto=format&fit=crop",
    href: "/blog-ve-faydali-bilgiler/yangin-tupu-secimi",
  },
  {
    title: "Acil Durum Planı Hazırlarken Yapılan Hatalar",
    description:
      "Eksik tahliye planı, personel eğitimi yapılmaması ve ekipman kontrollerinin atlanması ciddi risk oluşturabilir.",
    category: "İşletmeler İçin Rehber",
    date: "2026",
    readTime: "5 dk",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop",
    href: "/blog-ve-faydali-bilgiler/acil-durum-plani-hatalari",
  },
];

const popularTopics = [
  "Yangın tüpü bakımı",
  "Periyodik kontrol",
  "Yangın algılama sistemi",
  "Acil durum planı",
  "İşletmelerde yangın güvenliği",
  "Yönetmelik ve standartlar",
];

export default function BlogPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06132d] pt-36 text-white">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop"
          alt="Blog ve Faydalı Bilgiler"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98)_0%,rgba(5,18,48,0.86)_48%,rgba(215,25,32,0.32)_100%)]" />

        <div className="relative mx-auto max-w-[1500px] px-6 py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#d71920]">
              Kaynaklar
            </p>

            <h1 className="mt-5 text-4xl font-black uppercase leading-[1.08] md:text-6xl">
              Blog ve Faydalı Bilgiler
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              Yangın güvenliği, yönetmelikler, bakım süreçleri ve işletmeler
              için pratik rehber içeriklerini bu alanda bulabilirsiniz.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/teklif-al"
                className="group inline-flex items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Teklif Al
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/bize-ulasin"
                className="inline-flex items-center border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Bize Ulaşın
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH / CATEGORIES */}
      <section className="border-b border-gray-200 bg-[#f4f6f8] py-10">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Blog içinde arama yapın..."
                className="h-14 w-full border border-gray-200 bg-white pl-14 pr-5 text-sm outline-none transition focus:border-[#d71920]"
              />
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              {categories.map((category, index) => (
                <button
                  key={category}
                  type="button"
                  className={`px-4 py-3 text-xs font-black uppercase tracking-wide transition ${
                    index === 0
                      ? "bg-[#d71920] text-white"
                      : "bg-white text-[#0b2c5f] hover:bg-[#0b2c5f] hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Öne Çıkan İçerik
              </p>
              <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase text-[#101827] md:text-5xl">
                İşletmeler için yangın güvenliği rehberi
              </h2>
            </div>

            <p className="max-w-lg text-base leading-8 text-gray-600">
              Kurumsal alanlarda yangın güvenliği süreçlerini doğru planlamak,
              riskleri azaltmak ve yasal uygunluğu sağlamak için önemlidir.
            </p>
          </div>

          <Link
            href={featuredPost.href}
            className="group grid overflow-hidden bg-[#06132d] shadow-2xl lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="relative min-h-[420px] overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,18,48,0.35),rgba(215,25,32,0.25))]" />
            </div>

            <div className="flex flex-col justify-center p-8 text-white md:p-12">
              <div className="mb-6 flex flex-wrap gap-4 text-xs font-black uppercase tracking-wide text-white/65">
                <span className="inline-flex items-center gap-2">
                  <Tag size={15} className="text-[#d71920]" />
                  {featuredPost.category}
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={15} className="text-[#d71920]" />
                  {featuredPost.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock size={15} className="text-[#d71920]" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h3 className="text-3xl font-black uppercase leading-tight md:text-5xl">
                {featuredPost.title}
              </h3>

              <p className="mt-6 text-base leading-8 text-white/72">
                {featuredPost.description}
              </p>

              <span className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase text-white">
                Yazıyı İncele
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="bg-[#f4f6f8] py-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 px-6 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="mb-10">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Tüm İçerikler
              </p>
              <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
                Faydalı Bilgiler
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
              {posts.map((post) => (
                <Link
                  key={post.title}
                  href={post.href}
                  className="group overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-[250px] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute left-5 top-5 bg-[#d71920] px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="mb-4 flex flex-wrap gap-4 text-xs font-bold uppercase text-gray-400">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays size={14} />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-black uppercase leading-tight text-[#101827]">
                      {post.title}
                    </h3>

                    <p className="mt-4 min-h-[84px] text-sm leading-7 text-gray-600">
                      {post.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase text-[#d71920]">
                      Devamını Oku
                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-7 lg:sticky lg:top-32 lg:self-start">
            <div className="bg-white p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d71920]">
                Popüler Konular
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {popularTopics.map((topic) => (
                  <Link
                    key={topic}
                    href="/blog-ve-faydali-bilgiler"
                    className="bg-[#f4f6f8] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#0b2c5f] transition hover:bg-[#d71920] hover:text-white"
                  >
                    {topic}
                  </Link>
                ))}
              </div>
            </div>

            <div className="overflow-hidden bg-[#06132d] text-white shadow-sm">
              <div className="relative h-[190px]">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900&auto=format&fit=crop"
                  alt="Yangın güvenliği teklif"
                  className="absolute inset-0 h-full w-full object-cover opacity-55"
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,18,48,0.78),rgba(215,25,32,0.42))]" />
                <div className="absolute bottom-5 left-5 right-5">
                  <Flame size={34} className="text-[#d71920]" />
                </div>
              </div>

              <div className="p-7">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-white/55">
                  Hızlı Destek
                </p>

                <h3 className="mt-3 text-2xl font-black uppercase leading-tight">
                  Yangın güvenliği ihtiyacınız mı var?
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/68">
                  İşletmeniz için uygun cihaz, sistem ve bakım çözümleri
                  hakkında teklif alabilirsiniz.
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

            <div className="bg-white p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d71920]">
                Kategoriler
              </p>

              <div className="mt-6 space-y-3">
                {categories.slice(1).map((category) => (
                  <Link
                    key={category}
                    href="/blog-ve-faydali-bilgiler"
                    className="group flex items-center justify-between border-b border-gray-100 pb-3 text-sm font-black uppercase text-[#101827] transition hover:text-[#d71920]"
                  >
                    {category}
                    <ChevronRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="relative overflow-hidden bg-[#06132d] p-8 text-white md:p-14">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1600&auto=format&fit=crop"
              alt="AFS bilgi merkezi"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98),rgba(5,18,48,0.78),rgba(215,25,32,0.28))]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                  AFS Bilgi Merkezi
                </p>

                <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight md:text-5xl">
                  Yangın güvenliği süreçlerinizi doğru bilgiyle planlayın.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                  Blog içeriklerimizden faydalanabilir, işletmeniz için uygun
                  çözüm hakkında AFS ekibiyle iletişime geçebilirsiniz.
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