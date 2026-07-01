// app/urunler/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Flame,
  LayoutGrid,
  Lightbulb,
  LockKeyhole,
  PackageCheck,
  ShieldCheck,
  ShoppingCart,
  Store,
  Tag,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

const highlights = [
  {
    title: "Yönetmelik Uyumlu",
    text: "Denetlenebilir ve güvenilir yangın güvenlik ürünleri.",
    icon: ShieldCheck,
  },
  {
    title: "Sertifikalı Ürünler",
    text: "TSE / CE belgeli ürün yaklaşımıyla güvenli tedarik.",
    icon: BadgeCheck,
  },
  {
    title: "Dijital Portal",
    text: "Müşteri ve bayi portalı üzerinden hızlı ürün erişimi.",
    icon: ShoppingCart,
  },
];

const differences = [
  {
    title: "Mühendislik Onaylı",
    description:
      "Yangın güvenlik ürünleri, saha kullanımı ve yönetmelik ihtiyacına göre değerlendirilir.",
    icon: BadgeCheck,
  },
  {
    title: "Doğru Ürün Seçimi",
    description:
      "Yangın dolabı, levha, armatür ve aksesuar seçiminde doğru ürün yönlendirmesi yapılır.",
    icon: ShieldCheck,
  },
  {
    title: "Geniş Ürün Ekosistemi",
    description:
      "YSC aksesuarları, mekanik ürünler, elektronik ekipmanlar ve tamamlayıcı güvenlik ürünleri.",
    icon: LayoutGrid,
  },
];

const productCategories = [
  {
    number: "01",
    title: "YSC ve Aksesuarlar",
    subtitle: "Yangın söndürme cihazları için tamamlayıcı çözümler.",
    description:
      "Yangın söndürme cihazlarının güvenli konumlandırılması ve korunması için uygun aksesuar ürünleri.",
    items: [
      "YSC dolapları",
      "YSC kılıfları",
      "YSC sehpaları",
      "Duvar askı aparatları",
    ],
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Mekanik Yangın Ürünleri",
    subtitle: "Tesisler için temel yangın savunma ekipmanları.",
    description:
      "Yangın dolabı ve mekanik yangın ekipmanlarında yönetmelik uyumlu tedarik çözümleri.",
    items: [
      "Yangın dolapları",
      "Mekanik yangın ekipmanları",
      "Su bazlı yangın savunma ürünleri",
      "Saha ekipmanları",
    ],
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Elektrik ve Elektronik Ürünler",
    subtitle: "Acil durum ve tahliye güvenliği.",
    description:
      "Acil aydınlatma, yönlendirme ve elektronik güvenlik ürünleriyle güvenli tahliye desteği.",
    items: [
      "Acil durum aydınlatma",
      "Yönlendirme sistemleri",
      "Elektronik güvenlik ürünleri",
      "Tahliye ekipmanları",
    ],
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Tamamlayıcı Güvenlik Ekipmanları",
    subtitle: "İlk müdahale ve güvenli kaçış ürünleri.",
    description:
      "Yangın güvenlik işaretleri, fosforlu levhalar, yangın battaniyeleri ve tamamlayıcı ürünler.",
    items: [
      "Yangın güvenlik işaretleri",
      "Fosforlu levhalar",
      "Yangın battaniyeleri",
      "Yeni nesil söndürücü köpükler",
    ],
    icon: PackageCheck,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop",
  },
];

const portalAdvantages = [
  "Mühendislik onaylı ürün seçimi",
  "TSE / CE sertifikalı ürün yaklaşımı",
  "Yönetmelik uyumlu tedarik",
  "Doğru yere doğru ürün",
  "Bireysel ve kurumsal çözümler",
  "Bayi ve B2B fiyat avantajları",
  "Güncellenen ürün ekosistemi",
  "Güvenilir tedarik ağı",
];

const priceGroups = [
  {
    title: "Son Kullanıcılar",
    description:
      "Ev, araç, apartman ve işletmeler için güvenilir yangın güvenlik ürünlerine kolay erişim.",
    icon: Users,
  },
  {
    title: "Bayiler ve B2B",
    description:
      "Sektör profesyonelleri için özel fiyat, tedarik ve ürün çeşitliliği avantajı.",
    icon: Store,
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <div className="relative mx-auto min-h-[430px] max-w-[1500px] overflow-hidden lg:min-h-[410px]">
          <img
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1800&auto=format&fit=crop"
            alt="AFS Yangın Güvenlik Ürünleri"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,#031433_0%,rgba(3,20,51,0.98)_34%,rgba(3,20,51,0.78)_62%,rgba(3,20,51,0.88)_100%)]" />

          <div className="relative flex min-h-[430px] items-center px-5 py-10 sm:px-8 lg:min-h-[410px] lg:px-14 xl:px-20">
            <div className="max-w-[700px]">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-12 w-1.5 bg-[#d71920] sm:h-14" />
                <span className="h-9 w-1.5 bg-[#1d75bc] sm:h-10" />
                <span className="h-6 w-1.5 bg-white/80" />
              </div>

              <p className="mb-3 text-[9px] font-black uppercase tracking-[0.22em] text-[#d71920] sm:text-[11px] sm:tracking-[0.26em]">
                Ürünler / Yangın Güvenlik Ekipmanları
              </p>

              <h1 className="max-w-[680px] text-[27px] font-black uppercase leading-[1.06] tracking-[-0.035em] text-white sm:text-[38px] md:text-[46px] lg:text-[50px]">
                Güvenilir yangın güvenlik ürünleri.
              </h1>

              <p className="mt-4 max-w-[600px] text-[13px] font-semibold leading-6 text-white/80 sm:text-[15px] sm:leading-7 md:text-base">
                YSC aksesuarları, yangın dolapları, acil aydınlatma,
                yönlendirme ve tamamlayıcı yangın ekipmanlarını AFS güvencesiyle
                inceleyin.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#urun-kategorileri"
                  className="group inline-flex items-center justify-center gap-2 bg-[#d71920] px-5 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f] sm:justify-start sm:text-sm"
                >
                  Ürünleri İncele
                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </a>

                <Link
                  href="/bize-ulasin"
                  className="inline-flex items-center justify-center gap-2 bg-white px-5 py-3 text-xs font-black uppercase tracking-wide text-[#0b2c5f] transition hover:bg-[#d71920] hover:text-white sm:justify-start sm:text-sm"
                >
                  Teklif Al
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOP CARDS */}
      <section className="relative z-10 bg-white py-5 md:py-0">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="grid grid-cols-1 gap-5 md:-mt-5 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="bg-white p-6 shadow-xl">
                  <Icon size={34} className="text-[#d71920]" />

                  <h3 className="mt-5 text-lg font-black uppercase text-[#101827]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY PORTAL */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Neden AFS Portal?
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Sadece ürün değil, doğru ürün seçimi.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              Yangın güvenlik ürünlerinde doğru seçim; yönetmelik, sertifika,
              kullanım alanı ve saha ihtiyacına göre yapılmalıdır.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {differences.map((item) => {
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

      {/* PORTAL ADVANTAGES */}
      <section className="bg-[#06132d] py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              AFS Portal Avantajı
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              Güvenilir ürün, doğru tedarik.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              Ürün seçiminde fiyat kadar uygunluk, sertifika ve kullanım alanı
              da önemlidir.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {portalAdvantages.map((item) => (
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

      {/* PRODUCT CATEGORIES */}
      <section id="urun-kategorileri" className="bg-[#f4f6f8] py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Ürün Kategorileri
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              Yangın güvenliği için temel ürün grupları.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
              YSC aksesuarları, mekanik yangın ürünleri, acil aydınlatma ve
              tamamlayıcı güvenlik ekipmanları.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
            {productCategories.map((product) => {
              const Icon = product.icon;

              return (
                <div
                  key={product.title}
                  className="group overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-[210px] sm:h-[230px]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,18,48,0.60),rgba(215,25,32,0.22))]" />

                    <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center bg-white text-[#d71920] shadow-xl">
                      <Icon size={28} />
                    </div>

                    <div className="absolute bottom-5 left-5 bg-[#d71920] px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
                      {product.number}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-black uppercase leading-tight text-[#101827]">
                      {product.title}
                    </h3>

                    <p className="mt-3 text-base font-black uppercase leading-tight text-[#0b2c5f]">
                      {product.subtitle}
                    </p>

                    <p className="mt-5 text-sm leading-7 text-gray-600">
                      {product.description}
                    </p>

                    <div className="mt-5 grid gap-3">
                      {product.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 bg-[#f4f6f8] p-4"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-[#d71920]"
                          />

                          <p className="text-sm font-bold leading-6 text-gray-700">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/bize-ulasin"
                      className="mt-6 inline-flex items-center gap-3 text-sm font-black uppercase text-[#d71920]"
                    >
                      Teklif Al
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* B2B */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              B2B ve Son Kullanıcı
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              Bayiler ve son kullanıcılar için ürün tedariki.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            {priceGroups.map((group, index) => {
              const Icon = group.icon;
              const dark = index === 1;

              return (
                <div
                  key={group.title}
                  className={`relative overflow-hidden p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl md:p-8 ${
                    dark
                      ? "bg-[#06132d] text-white"
                      : "bg-[#f4f6f8] text-[#101827]"
                  }`}
                >
                  <div
                    className={`absolute right-[-30px] top-[-30px] text-[120px] font-black uppercase leading-none ${
                      dark ? "text-white/[0.04]" : "text-[#0b2c5f]/5"
                    }`}
                  >
                    AFS
                  </div>

                  <div
                    className={`relative flex h-16 w-16 items-center justify-center ${
                      dark
                        ? "bg-white/10 text-[#d71920]"
                        : "bg-white text-[#d71920]"
                    }`}
                  >
                    <Icon size={32} />
                  </div>

                  <h3 className="relative mt-7 text-3xl font-black uppercase leading-tight">
                    {group.title}
                  </h3>

                  <p
                    className={`relative mt-5 text-sm leading-7 ${
                      dark ? "text-white/68" : "text-gray-600"
                    }`}
                  >
                    {group.description}
                  </p>

                  <Link
                    href="/bize-ulasin"
                    className={`relative mt-7 inline-flex items-center gap-3 px-6 py-4 text-sm font-black uppercase tracking-wide transition ${
                      dark
                        ? "bg-[#d71920] text-white hover:bg-white hover:text-[#0b2c5f]"
                        : "bg-[#d71920] text-white hover:bg-[#0b2c5f]"
                    }`}
                  >
                    Bilgi Al
                    <ArrowRight size={17} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#06132d] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="relative overflow-hidden bg-white p-7 text-[#101827] md:p-10 lg:p-12">
            <div className="absolute right-[-40px] top-[-30px] text-[120px] font-black uppercase leading-none text-[#0b2c5f]/5 md:text-[140px]">
              AFS
            </div>

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                  Onaylı Ürün Tedariki
                </p>

                <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                  Projenize uygun yangın güvenlik ürünlerini birlikte
                  belirleyelim.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
                  Yangın güvenlik ürünleri, YSC aksesuarları, mekanik yangın
                  ekipmanları ve acil yönlendirme ürünleri için AFS ekibiyle
                  iletişime geçin.
                </p>
              </div>

              <Link
                href="/bize-ulasin"
                className="group inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0b2c5f]"
              >
                Teklif Al
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="relative mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 bg-[#f4f6f8] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#0b2c5f]">
                <LockKeyhole size={14} />
                Güvenilir Tedarik
              </span>

              <span className="inline-flex items-center gap-2 bg-[#f4f6f8] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#0b2c5f]">
                <Tag size={14} />
                Onaylı Ürün
              </span>

              <span className="inline-flex items-center gap-2 bg-[#f4f6f8] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#0b2c5f]">
                <Zap size={14} />
                Hızlı Teklif
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}