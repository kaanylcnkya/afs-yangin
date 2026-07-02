// app/ysc/page.tsx

import Link from "next/link";
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
    title: "CO2 Söndürücüler",
    subtitle: "Elektrik ve hassas cihazlar için.",
    description:
      "Elektrik panosu, server odası, trafo ve elektronik ekipman bulunan alanlarda kalıntı bırakmadan müdahale sağlar.",
    usage: "Pano, server odası, trafo, elektrik alanları",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Köpüklü Söndürücüler",
    subtitle: "Sıvı yangınlarında etkili koruma.",
    description:
      "Akaryakıt, boya, solvent ve yanıcı sıvı riski bulunan alanlarda yangının yayılmasını önlemeye yardımcı olur.",
    usage: "Akaryakıt, boya, solvent, sıvı risk alanları",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Sulu Söndürücüler",
    subtitle: "Katı madde yangınları için.",
    description:
      "Kağıt, ahşap, tekstil ve benzeri katı madde yangınlarında tercih edilen temel söndürme cihazı grubudur.",
    usage: "Ahşap, kağıt, tekstil, arşiv ve depo",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "Yağ Yangını Söndürücüler",
    subtitle: "Endüstriyel mutfaklar için.",
    description:
      "Restoran, otel, yemekhane ve sanayi tipi mutfaklarda F sınıfı yağ yangınlarına karşı güvenli müdahale sağlar.",
    usage: "Restoran, otel, yemekhane, endüstriyel mutfak",
    icon: Utensils,
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "06",
    title: "Lityum-İyon Söndürücüler",
    subtitle: "Batarya yangınlarına özel çözüm.",
    description:
      "Elektrikli araç, e-scooter, batarya depolama alanı ve şarj istasyonlarında oluşabilecek risklere yönelik kullanılır.",
    usage: "Elektrikli araç, batarya, e-scooter, şarj istasyonu",
    icon: BatteryCharging,
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "07",
    title: "HFC Söndürücüler",
    subtitle: "Kalıntısız ve hassas koruma.",
    description:
      "Elektronik cihazların bulunduğu hassas alanlarda yangına müdahale ederken kalıntı bırakmayan söndürme çözümüdür.",
    usage: "Bilgi işlem, arşiv, elektronik ekipman alanları",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "08",
    title: "Araç Tipi Söndürücüler",
    subtitle: "Araç içi güvenlik için.",
    description:
      "Binek araç, servis, ticari araç, kamyon ve iş makinelerinde ilk müdahale amacıyla kullanılan kompakt cihazlardır.",
    usage: "Binek araç, ticari araç, servis, iş makinesi",
    icon: Gauge,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "09",
    title: "Endüstriyel Tip Söndürücüler",
    subtitle: "Yüksek riskli tesislere uygun.",
    description:
      "Fabrika, üretim alanı, depo, atölye ve yüksek yangın yükü bulunan işletmeler için güçlü cihaz çözümleridir.",
    usage: "Fabrika, depo, üretim alanı, atölye",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "10",
    title: "Tekerlekli Söndürücüler",
    subtitle: "Büyük hacimli müdahale gücü.",
    description:
      "Geniş alanlarda, yüksek riskli noktalarda ve hızlı taşınabilir yüksek kapasiteli söndürme ihtiyacında kullanılır.",
    usage: "Sanayi, depo, akaryakıt, büyük tesis alanları",
    icon: PackageCheck,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1600&auto=format&fit=crop",
  },
];

const differences = [
  {
    title: "TSE Belgeli Cihaz",
    description:
      "Silindir, hortum ve söndürücü madde kalitesinde güvenilir ürün yaklaşımı.",
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
                  href="#ysc-cozumleri"
                  className="inline-flex items-center justify-center gap-2 bg-white px-5 py-3 text-xs font-black uppercase tracking-wide text-[#0b2c5f] transition hover:bg-[#d71920] hover:text-white sm:justify-start sm:text-sm"
                >
                  Cihazları İncele
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

      {/* PRODUCT CATALOG */}
      <section id="ysc-cozumleri" className="bg-[#f4f6f8] py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              YSC Çözümlerimiz
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              Yangın riskine göre doğru cihaz seçimi.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Kullanım alanına, yangın sınıfına ve risk tipine göre farklı
              yangın söndürme cihazı seçenekleri sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {productCategories.map((product) => {
              const Icon = product.icon;

              return (
                <div
                  key={product.title}
                  className="group overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative w-full overflow-hidden bg-[#06132d]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="block h-auto w-full"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,18,48,0.58),rgba(215,25,32,0.18))]" />

                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center bg-white text-[#d71920] shadow-xl">
                      <Icon size={22} />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="inline-flex bg-[#d71920] px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-white">
                        {product.number}
                      </p>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-black uppercase leading-tight text-[#101827]">
                      {product.title}
                    </h3>

                    <p className="mt-3 text-sm font-black uppercase leading-tight text-[#0b2c5f]">
                      {product.subtitle}
                    </p>

                    <div className="mt-4 bg-[#eef1f5] px-4 py-3">
                      <p className="text-[10px] font-black uppercase tracking-wide text-[#0b2c5f]">
                        Kullanım Alanı
                      </p>

                      <p className="mt-2 text-xs font-bold leading-5 text-gray-700">
                        {product.usage}
                      </p>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-gray-600">
                      {product.description}
                    </p>

                    <Link
                      href="/bize-ulasin"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase text-[#d71920]"
                    >
                      Teklif Al
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY AFS */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                AFS Farkı
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Sadece cihaz değil, güvenli kullanım süreci.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              Yangın söndürme cihazı seçiminde doğru ürün, doğru konumlandırma
              ve düzenli bakım birlikte değerlendirilmelidir.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
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

      {/* PROTECTION AREAS */}
      <section className="bg-[#06132d] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Koruma Alanları
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              Evden fabrikaya kadar her alana uygun çözüm.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {protectionAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="flex min-h-[135px] flex-col items-center justify-center border border-white/10 bg-white/5 p-5 text-center backdrop-blur transition hover:-translate-y-2 hover:border-[#d71920] hover:bg-white/10"
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
      </section>

      {/* SERVICES */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Hizmet Kapsamı
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
              Satış, dolum, bakım ve takip tek çatı altında.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              AFS Yangın, bireysel ve kurumsal ihtiyaçlara uygun yangın söndürme
              cihazı çözümleri sunar.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
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