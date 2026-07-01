// app/ysc/page.tsx

"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Flame,
  Gauge,
  Home,
  PackageCheck,
  PaintBucket,
  QrCode,
  ShieldCheck,
  Timer,
  Utensils,
  Wrench,
  Zap,
} from "lucide-react";

const pageTabs = [
  {
    key: "cihazlar",
    title: "YSC Çözümleri",
    description: "Yangın riskine göre doğru cihaz seçimi.",
    icon: Flame,
  },
  {
    key: "farkimiz",
    title: "AFS Farkı",
    description: "Doğru cihaz, bakım ve takip süreci.",
    icon: ShieldCheck,
  },
  {
    key: "alanlar",
    title: "Koruma Alanları",
    description: "Evden fabrikaya kadar uygun çözüm.",
    icon: Home,
  },
  {
    key: "hizmet",
    title: "Hizmet Kapsamı",
    description: "Satış, dolum, bakım ve takip.",
    icon: ClipboardCheck,
  },
];

const highlights = [
  {
    title: "4 Yıl Garanti",
    text: "Cihaz, dolum ve bakım süreçlerinde güven veren takip.",
    icon: BadgeCheck,
  },
  {
    title: "Renk Kodlu Kullanım",
    text: "Panik anında doğru cihazı hızlıca ayırt etme kolaylığı.",
    icon: PaintBucket,
  },
  {
    title: "Bakım Takibi",
    text: "Periyodik bakım tarihlerini takip eden sistemli hizmet.",
    icon: QrCode,
  },
];

const differences = [
  {
    title: "TSE Belgeli Cihaz",
    description:
      "Silindir, hortum ve söndürücü madde kalitesinde güvenilir ürün.",
    icon: BadgeCheck,
  },
  {
    title: "Doğru Cihaz Seçimi",
    description:
      "Yangın sınıfına ve kullanım alanına göre uygun cihaz planlaması.",
    icon: ShieldCheck,
  },
  {
    title: "Periyodik Bakım",
    description: "Yasal kontroller ve bakım süreçleri için düzenli takip.",
    icon: Timer,
  },
  {
    title: "Denetime Hazır",
    description: "Kontrol kartı, bakım kaydı ve uygunluk süreçlerinde destek.",
    icon: ClipboardCheck,
  },
];

const productCategories = [
  {
    number: "01",
    title: "KKT Söndürücüler",
    subtitle: "Genel kullanım için güçlü çözüm.",
    description:
      "Ev, ofis, araç, apartman, depo ve genel endüstriyel alanlarda A, B ve C sınıfı yangınlara karşı kullanılır.",
    usage: "Ev, ofis, araç, depo, apartman",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Lityum-İyon Söndürücüler",
    subtitle: "Batarya yangınlarına özel.",
    description:
      "Elektrikli araç, e-scooter, batarya alanı ve şarj istasyonlarında oluşabilecek lityum-iyon yangınları için özel çözümdür.",
    usage: "Elektrikli araç, batarya, şarj istasyonu",
    icon: BatteryCharging,
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Yağ Yangını Söndürücüler",
    subtitle: "Endüstriyel mutfaklar için.",
    description:
      "Restoran, otel ve sanayi tipi mutfaklarda F sınıfı yağ yangınlarına karşı güvenli müdahale sağlar.",
    usage: "Restoran, otel, endüstriyel mutfak",
    icon: Utensils,
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "CO2 ve HFC Söndürücüler",
    subtitle: "Hassas cihazlara uygun.",
    description:
      "Server odası, elektrik panosu, trafo ve elektronik ekipman bulunan alanlarda kalıntısız koruma sağlar.",
    usage: "Server odası, pano, trafo, hassas cihaz",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "Köpüklü ve Sulu Söndürücüler",
    subtitle: "Özel risk alanları için.",
    description:
      "Ahşap, kağıt, tekstil deposu ve akaryakıt istasyonu gibi alanlarda tamamlayıcı söndürme çözümü sunar.",
    usage: "Ahşap, kağıt, tekstil, akaryakıt",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop",
  },
];

const protectionAreas = [
  { title: "Evler", icon: Home },
  { title: "Ofisler", icon: PackageCheck },
  { title: "Araçlar", icon: Gauge },
  { title: "Apartmanlar", icon: ShieldCheck },
  { title: "Fabrikalar", icon: Wrench },
];

const serviceItems = [
  "TSE belgeli yangın tüpü satışı",
  "TSE belgeli yangın tüpü dolumu",
  "Periyodik bakım ve kontrol",
  "Risk alanına uygun cihaz planlaması",
  "Bireysel ve kurumsal çözümler",
  "İzmir ve Türkiye geneli hizmet",
];

export default function YscPage() {
  const [activeTab, setActiveTab] = useState("cihazlar");
  const [activeProduct, setActiveProduct] = useState(0);

  const currentProduct = productCategories[activeProduct];
  const CurrentProductIcon = currentProduct.icon;

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <div className="relative mx-auto min-h-[430px] max-w-[1500px] overflow-hidden sm:min-h-[390px] lg:h-[410px] lg:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1800&auto=format&fit=crop"
            alt="AFS Yangın Söndürme Cihazları"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,#031433_0%,rgba(3,20,51,0.98)_32%,rgba(3,20,51,0.78)_62%,rgba(3,20,51,0.88)_100%)]" />

          <div className="relative flex min-h-[430px] items-center px-5 py-10 sm:min-h-[390px] sm:px-8 lg:h-full lg:min-h-0 lg:px-14 lg:py-0 xl:px-20">
            <div className="max-w-[700px]">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-12 w-1.5 bg-[#d71920] sm:h-14" />
                <span className="h-9 w-1.5 bg-[#1d75bc] sm:h-10" />
                <span className="h-6 w-1.5 bg-white/80" />
              </div>

              <p className="mb-3 text-[9px] font-black uppercase tracking-[0.22em] text-[#d71920] sm:text-[11px] sm:tracking-[0.26em]">
                Yangın Söndürme Cihazları / YSC
              </p>

              <h1 className="max-w-[680px] text-[27px] font-black uppercase leading-[1.06] tracking-[-0.035em] text-white sm:text-[40px] md:text-[48px] lg:text-[54px]">
                Yangın anında şansa yer yok.
              </h1>

              <p className="mt-4 max-w-[590px] text-[13px] font-semibold leading-6 text-white/80 sm:text-[15px] sm:leading-7 md:text-base">
                TSE belgeli yangın söndürme cihazları, dolum, bakım ve periyodik
                takip hizmetleriyle güvenli koruma.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/bize-ulasin"
                  className="group inline-flex items-center justify-center gap-2 bg-[#d71920] px-5 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f] sm:justify-start sm:text-sm"
                >
                  Hızlı Teklif Al
                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#sayfa-icerigi"
                  className="inline-flex items-center justify-center gap-2 bg-white px-5 py-3 text-xs font-black uppercase tracking-wide text-[#0b2c5f] transition hover:bg-[#d71920] hover:text-white sm:justify-start sm:text-sm"
                >
                  Çözümleri İncele
                  <ArrowRight size={15} />
                </a>
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

      {/* CONTROLLED CONTENT */}
      <section id="sayfa-icerigi" className="bg-[#f4f6f8] py-12 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-8 grid grid-cols-1 gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                YSC Sayfa İçeriği
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                İhtiyacınız olan bölümü seçin.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              Cihazlar, AFS farkı, koruma alanları ve hizmet kapsamını tek
              ekrandan hızlıca inceleyebilirsiniz.
            </p>
          </div>

          {/* 4 COLUMN MAIN BOXES */}
          <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {pageTabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`group min-h-[170px] cursor-pointer border p-5 text-left transition duration-300 ${
                    active
                      ? "border-[#d71920] bg-[#06132d] text-white shadow-2xl"
                      : "border-gray-200 bg-white text-[#101827] shadow-sm hover:-translate-y-1 hover:border-[#d71920] hover:shadow-xl"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center transition ${
                      active
                        ? "bg-[#d71920] text-white"
                        : "bg-[#eef1f5] text-[#d71920] group-hover:bg-[#d71920] group-hover:text-white"
                    }`}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-base font-black uppercase leading-tight">
                    {tab.title}
                  </h3>

                  <p
                    className={`mt-3 text-xs font-semibold leading-5 sm:text-sm sm:leading-6 ${
                      active ? "text-white/70" : "text-gray-500"
                    }`}
                  >
                    {tab.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* CONTENT PANEL */}
          <div className="overflow-hidden bg-white shadow-xl">
            {activeTab === "cihazlar" && (
              <div>
                <div className="border-b border-gray-100 p-6 md:p-8 lg:p-10">
                  <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                    YSC Çözümleri
                  </p>

                  <h3 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                    Cihaz tipini seçin.
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
                    Yangın riskine ve kullanım alanına göre doğru cihaz tipini
                    hızlıca inceleyin.
                  </p>
                </div>

                {/* PRODUCT BOXES */}
                <div className="grid grid-cols-1 gap-4 border-b border-gray-100 bg-[#f8fafc] p-5 sm:grid-cols-2 lg:grid-cols-5">
                  {productCategories.map((product, index) => {
                    const Icon = product.icon;
                    const active = activeProduct === index;

                    return (
                      <button
                        key={product.title}
                        type="button"
                        onClick={() => setActiveProduct(index)}
                        className={`group min-h-[150px] cursor-pointer border p-4 text-left transition duration-300 ${
                          active
                            ? "border-[#d71920] bg-[#06132d] text-white shadow-xl"
                            : "border-gray-200 bg-white text-[#101827] hover:-translate-y-1 hover:border-[#d71920] hover:shadow-lg"
                        }`}
                      >
                        <div
                          className={`flex h-11 w-11 items-center justify-center transition ${
                            active
                              ? "bg-[#d71920] text-white"
                              : "bg-[#eef1f5] text-[#d71920] group-hover:bg-[#d71920] group-hover:text-white"
                          }`}
                        >
                          <Icon size={22} />
                        </div>

                        <p className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-[#d71920]">
                          {product.number}
                        </p>

                        <h4 className="mt-2 text-sm font-black uppercase leading-tight">
                          {product.title}
                        </h4>
                      </button>
                    );
                  })}
                </div>

                {/* PRODUCT DETAIL */}
                <div className="grid grid-cols-1 lg:grid-cols-[0.55fr_0.45fr]">
                  <div className="relative w-full overflow-hidden bg-[#06132d]">
                    <img
                      src={currentProduct.image}
                      alt={currentProduct.title}
                      className="block h-auto w-full"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,18,48,0.58),rgba(215,25,32,0.18))]" />

                    <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center bg-white text-[#d71920] shadow-xl">
                      <CurrentProductIcon size={28} />
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="inline-flex bg-[#d71920] px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
                        {currentProduct.number}
                      </p>

                      <h3 className="mt-4 max-w-2xl text-2xl font-black uppercase leading-tight text-white sm:text-3xl md:text-4xl">
                        {currentProduct.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
                    <p className="text-xl font-black uppercase leading-tight text-[#0b2c5f] md:text-2xl">
                      {currentProduct.subtitle}
                    </p>

                    <div className="mt-6 bg-[#eef1f5] px-5 py-4">
                      <p className="text-xs font-black uppercase tracking-wide text-[#0b2c5f]">
                        Kullanım Alanı
                      </p>

                      <p className="mt-2 text-sm font-bold leading-6 text-gray-700">
                        {currentProduct.usage}
                      </p>
                    </div>

                    <p className="mt-6 max-w-3xl text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                      {currentProduct.description}
                    </p>

                    <Link
                      href="/bize-ulasin"
                      className="mt-8 inline-flex w-fit items-center gap-3 bg-[#d71920] px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0b2c5f]"
                    >
                      Bu Cihaz İçin Teklif Al
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "farkimiz" && (
              <div className="p-6 md:p-8 lg:p-10">
                <div className="max-w-4xl">
                  <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                    AFS Farkı
                  </p>

                  <h3 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                    Sadece cihaz değil, güvenli kullanım süreci.
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
                    Yangın söndürme cihazı seçiminde doğru ürün, doğru
                    konumlandırma ve düzenli bakım birlikte değerlendirilir.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
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
            )}

            {activeTab === "alanlar" && (
              <div className="bg-[#06132d] p-6 text-white md:p-8 lg:p-10">
                <div className="max-w-4xl">
                  <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                    Koruma Alanları
                  </p>

                  <h3 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
                    Evden fabrikaya kadar her alana uygun çözüm.
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                    Kullanım alanına göre doğru yangın söndürme cihazı
                    planlaması yapılmalıdır.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
                  {protectionAreas.map((area) => {
                    const Icon = area.icon;

                    return (
                      <div
                        key={area.title}
                        className="flex min-h-[145px] flex-col items-center justify-center border border-white/10 bg-white/5 p-5 text-center backdrop-blur transition hover:-translate-y-2 hover:border-[#d71920] hover:bg-white/10"
                      >
                        <Icon size={32} className="text-[#d71920]" />

                        <h3 className="mt-5 text-sm font-black uppercase leading-6 text-white">
                          {area.title}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === "hizmet" && (
              <div className="p-6 md:p-8 lg:p-10">
                <div className="max-w-4xl">
                  <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                    Hizmet Kapsamı
                  </p>

                  <h3 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                    Satış, dolum, bakım ve takip tek çatı altında.
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
                    AFS Yangın, bireysel ve kurumsal ihtiyaçlara uygun yangın
                    söndürme cihazı çözümleri sunar.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {serviceItems.map((item) => (
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
            )}
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
                  Risklerinizi Birlikte Değerlendirelim
                </p>

                <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                  Hangi cihazı kullanmanız gerektiğini birlikte belirleyelim.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
                  Kullanım alanınıza, yangın riskinize ve yasal
                  gerekliliklerinize göre doğru cihaz tipini planlayalım.
                </p>
              </div>

              <Link
                href="/bize-ulasin"
                className="group inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0b2c5f]"
              >
                Hızlı Teklif Al
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