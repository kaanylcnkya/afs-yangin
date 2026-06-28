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

const differences = [
  {
    title: "Silindirden İçeriğe 4 Yıl Kesintisiz Garanti",
    description:
      "Tüm cihazlarımız; silindiri, hortumu ve içindeki yüksek kaliteli söndürücü maddesiyle eksiksiz TSE sertifikalıdır. Bizden aldığınız cihazlara ve bakım hizmetlerine tam 4 yıl garanti veriyoruz.",
    icon: BadgeCheck,
  },
  {
    title: "Panik Anında Hayat Kurtaran Renk Kodları",
    description:
      "Hangi tüp nerede kullanılır? Yanlış cihaza sarılıp felaketi büyütmeyin. AFS'nin renk kodlu özel tasarımı sayesinde siz veya personeliniz tehlike anında doğru cihazı saniyeler içinde ayırt eder.",
    icon: PaintBucket,
  },
  {
    title: "Bakım Tarihini Unutturmayan Akıllı Sistem",
    description:
      "“Tüpün tarihi geçmiş miydi?” derdine son. AFS özel yazılımı sayesinde periyodik bakım zamanlarınızı biz takip ediyor, vakti gelmeden size hatırlatıyoruz.",
    icon: Timer,
  },
  {
    title: "Denetimlere Her An Hazır, Yasalara Tam Uyum",
    description:
      "Cihazlarımızın üzerinde bulunan dış ortama dayanıklı özel aylık kontrol kartları sayesinde, yasal prosedürleri ve zorunlu kontrolleri eksiksiz yerine getirmenizi sağlıyoruz.",
    icon: ClipboardCheck,
  },
];

const productCategories = [
  {
    number: "01",
    title: "KKT Söndürücüler",
    subtitle: "Genel maksatlı güç.",
    description:
      "Ev, ofis, araç, apartman ve genel endüstriyel alanlardaki standart yangınlar için ilk savunma hattınız. A, B ve C sınıfı yangınlarda yüksek söndürme kapasitesiyle alevleri hızla keser, yangının büyümesini anında durdurur.",
    usage: "Ev, ofis, araç, apartman, depo ve genel endüstriyel alanlar",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Lityum-İyon Söndürücüler",
    subtitle: "Geleceğin teknolojisine özel.",
    description:
      "Elektrikli araçlar, e-scooter'lar, akıllı telefonlar ve şarj istasyonlarındaki batarya yangınları suyla sönmez. Özel formüllü Lityum-İyon cihazlarımız, bu yeni nesil ve son derece tehlikeli pil yangınlarını kaynağında soğutarak boğar.",
    usage: "Elektrikli araçlar, e-scooter, batarya alanları ve şarj istasyonları",
    icon: BatteryCharging,
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Yağ Yangını Söndürücüler",
    subtitle: "Endüstriyel mutfakların kahramanı.",
    description:
      "Restoran, otel ve sanayi tipi mutfaklarda kızgın yağların alev alması en büyük risktir. F sınıfı yangınlara özel bu cihazlarımız, alev alan yağı saniyeler içinde sabunlaştırarak üstünü bir film tabakası gibi örter ve yeniden alevlenmeyi imkansız hale getirir.",
    usage: "Restoran, otel, endüstriyel mutfak ve sanayi tipi mutfaklar",
    icon: Utensils,
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "CO2 ve HFC Söndürücüler",
    subtitle: "Hassas cihazlara zararsız koruma.",
    description:
      "Elektrik panoları, server odaları, trafolar ve pahalı teknolojik yatırımlarınız için idealdir. Yangını söndürürken cihazlarınıza zarar vermez, ortamda kalıntı bırakmaz ve sonrasında temizlik gerektirmez.",
    usage: "Server odaları, elektrik panoları, trafo alanları ve hassas cihaz odaları",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "Köpüklü ve Sulu Söndürücüler",
    subtitle: "Spesifik riskler için tamamlayıcı çözümler.",
    description:
      "Ahşap, kağıt, tekstil deposu veya akaryakıt istasyonu gibi özel risk taşıyan alanlarınız için köpüklü ve sulu yangın söndürme cihazlarımızla yanınızdayız.",
    usage: "Ahşap, kağıt, tekstil deposu, akaryakıt istasyonu ve özel risk alanları",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop",
  },
];

const protectionAreas = [
  {
    title: "Evler",
    icon: Home,
  },
  {
    title: "Ofisler",
    icon: PackageCheck,
  },
  {
    title: "Araçlar",
    icon: Gauge,
  },
  {
    title: "Apartmanlar",
    icon: ShieldCheck,
  },
  {
    title: "Fabrikalar",
    icon: Wrench,
  },
];

const investmentItems = [
  "TSE belgeli yangın tüpü satışı",
  "TSE belgeli yangın tüpü dolumu",
  "4 yıl garantili periyodik bakım",
  "İzmir ve çevresi başta olmak üzere Türkiye geneli hizmet",
  "Bireysel ve kurumsal işletmelere çözüm",
  "Yasal sorumlulukların eksiksiz yerine getirilmesi",
  "Sevdiklerinizi ve yatırımlarınızı güvence altına alma",
  "Riskinize uygun cihaz tipi ve adet planlaması",
];

export default function YscPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <img
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1800&auto=format&fit=crop"
          alt="AFS Yangın Söndürme Cihazları"
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
              Yangın Söndürme Cihazları / YSC
            </p>

            <h1 className="mt-5 max-w-5xl text-[34px] font-black uppercase leading-[1.08] tracking-[-0.035em] text-white sm:text-[42px] md:text-[58px] xl:text-[70px]">
              Yangın anında şansa yer yok.
            </h1>

            <h2 className="mt-5 max-w-4xl text-2xl font-black uppercase leading-tight text-white/90 md:text-4xl">
              AFS ile 4 yıl garantili tam koruma.
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              Söz konusu can ve mal güvenliğiniz olduğunda, “en ucuzunu” değil,
              tehlike anında %100 çalışacak olanı seçmelisiniz. AFS Yangın
              olarak; evinizden fabrikanıza kadar tüm yaşam alanlarınızı TSE
              belgeli, uluslararası standartlara uygun ve renk kodlu akıllı
              cihazlarla koruma altına alıyoruz.
            </p>

            <div className="mt-8 max-w-3xl border-l-4 border-[#d71920] bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-bold leading-7 text-white/88 md:text-base">
                Siz sadece güvenle işinize odaklanın; bakım zamanınızı takip
                etmeyi ve yasal prosedürleri biz halledelim.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/teklif-al"
                className="group inline-flex items-center justify-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Hızlı Teklif Al
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#ysc-cozumleri"
                className="inline-flex items-center justify-center border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Cihazları İncele
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
              <BadgeCheck size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                4 Yıl Garanti
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Cihaz ve bakım hizmetlerimizle uzun süreli, güven veren koruma
                yaklaşımı sunarız.
              </p>
            </div>

            <div className="bg-white p-7 shadow-2xl">
              <PaintBucket size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Renk Kodlu Cihazlar
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Panik anında doğru cihazın saniyeler içinde ayırt edilmesini
                sağlayan akıllı tasarım.
              </p>
            </div>

            <div className="bg-white p-7 shadow-2xl">
              <QrCode size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Akıllı Bakım Takibi
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Periyodik bakım zamanlarını takip eder, vakti gelmeden sizi
                bilgilendiririz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AFS */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Farkımız Nedir?
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Neden sıradan bir tüp değil de AFS’yi seçmelisiniz?
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              İnternette veya yapı marketlerde pek çok cihaz bulabilirsiniz.
              Ancak bir yangın anında o cihazın çalışıp çalışmayacağı,
              hayatınızla kumar oynamaktır. Biz cihaz değil, güven ve hizmet
              sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
            {differences.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#d71920] hover:shadow-2xl"
                >
                  <div className="absolute right-[-30px] top-[-30px] text-[110px] font-black uppercase leading-none text-[#0b2c5f]/5">
                    AFS
                  </div>

                  <div className="relative flex h-16 w-16 items-center justify-center bg-[#eef1f5] text-[#d71920] transition group-hover:bg-[#d71920] group-hover:text-white">
                    <Icon size={32} />
                  </div>

                  <h3 className="relative mt-7 text-xl font-black uppercase leading-tight text-[#101827]">
                    {item.title}
                  </h3>

                  <p className="relative mt-5 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROTECTION AREAS */}
      <section className="bg-[#06132d] py-24 text-white">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Koruma Alanları
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              Evinizden fabrikanıza kadar tüm yaşam alanlarınız için.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/65">
              Riskinize, kullanım alanınıza ve yasal gereksinimlerinize göre
              doğru cihaz tipini ve adet planlamasını birlikte belirliyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {protectionAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="flex min-h-[170px] flex-col items-center justify-center border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition hover:-translate-y-2 hover:border-[#d71920] hover:bg-white/10"
                >
                  <Icon size={36} className="text-[#d71920]" />

                  <h3 className="mt-5 text-sm font-black uppercase leading-6 text-white">
                    {area.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section id="ysc-cozumleri" className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              YSC Çözümlerimiz
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              İhtiyacınıza ve riskinize en uygun çözümler.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Her yangın riski aynı cihazla çözülemez. AFS Yangın olarak kullanım
              alanınıza, yangın sınıfınıza ve yasal gerekliliklerinize göre doğru
              yangın söndürme cihazını planlıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {productCategories.map((product, index) => {
              const Icon = product.icon;
              const reverse = index % 2 === 1;

              return (
                <div
                  key={product.title}
                  className="grid grid-cols-1 overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl lg:grid-cols-2"
                >
                  <div
                    className={`relative min-h-[320px] ${
                      reverse ? "lg:order-2" : ""
                    }`}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,18,48,0.45),rgba(215,25,32,0.20))]" />

                    <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center bg-white text-[#d71920] shadow-xl">
                      <Icon size={32} />
                    </div>
                  </div>

                  <div className="p-7 md:p-10">
                    <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                      {product.number}
                    </p>

                    <h3 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827]">
                      {product.title}
                    </h3>

                    <p className="mt-4 text-xl font-black uppercase leading-tight text-[#0b2c5f]">
                      {product.subtitle}
                    </p>

                    <div className="mt-5 inline-flex bg-[#eef1f5] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#0b2c5f]">
                      Kullanım Alanı
                    </div>

                    <p className="mt-4 text-sm font-bold leading-7 text-gray-700">
                      {product.usage}
                    </p>

                    <p className="mt-6 text-sm leading-7 text-gray-600">
                      {product.description}
                    </p>

                    <Link
                      href="/teklif-al"
                      className="mt-7 inline-flex items-center gap-3 bg-[#d71920] px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0b2c5f]"
                    >
                      Bu Cihaz İçin Teklif Al
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICE VS LIFE */}
      <section className="py-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Güven Odaklı Yaklaşım
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
              Fiyat odaklı değil, hayat odaklı yatırım yapın.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Sadece denetimden geçmek veya prosedürü tamamlamak için alınan
              kalitesiz cihazlar, en ihtiyaç duyduğunuz anda sizi yarı yolda
              bırakır. AFS Yangın olarak; TSE belgeli yangın tüpü dolumu, satışı
              ve 4 yıl garantili periyodik bakımı ile İzmir ve çevresi başta
              olmak üzere tüm Türkiye'de hem bireysel hem de kurumsal işletmelerin
              çözüm ortağıyız.
            </p>

            <div className="mt-7 border-l-4 border-[#d71920] bg-[#f4f6f8] p-5">
              <p className="text-sm font-bold leading-7 text-gray-700">
                Yasal sorumluluklarınızı eksiksiz yerine getirmek ve
                sevdiklerinizi güvence altına almak sandığınızdan çok daha kolay.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {investmentItems.map((item) => (
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
      <section className="bg-[#06132d] py-24 text-white">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="relative overflow-hidden bg-white p-8 text-[#101827] md:p-12">
            <div className="absolute right-[-40px] top-[-30px] text-[140px] font-black uppercase leading-none text-[#0b2c5f]/5">
              AFS
            </div>

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                  Risklerinizi Birlikte Değerlendirelim
                </p>

                <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                  İşletmeniz veya eviniz için hangi tip cihaza ihtiyacınız
                  olduğunu birlikte belirleyelim.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
                  Kaç adet ve hangi tip yangın söndürme cihazına ihtiyacınız
                  olduğunu bilmiyor musunuz? Hiç dert etmeyin. Uzman ekibimizle
                  size en uygun çözümü ve fiyatlandırmayı sunmak için hazırız.
                </p>
              </div>

              <Link
                href="/teklif-al"
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