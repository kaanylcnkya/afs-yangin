// app/urunler/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Flame,
  Lightbulb,
  LockKeyhole,
  PackageCheck,
  PanelsTopLeft,
  ShieldCheck,
  ShoppingCart,
  Store,
  Tag,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

const differences = [
  {
    title: "Denetim Garantili ve Yönetmeliğe Uyumlu Ürünler",
    description:
      "Portalımızda sergilenen her ürün, uzman mühendislerimiz tarafından incelenmiş, TSE/CE sertifikalarına sahip ve itfaiye denetimlerinde güvenle kullanılabilecek standartlardadır.",
    icon: BadgeCheck,
  },
  {
    title: "Doğru Yere Doğru Ürün Güvencesi",
    description:
      "Hangi dolabı veya hangi levhayı almalısınız? Yanlış ürün alıp paranızı çöpe atmayın. Portalımızda yalnızca yönetmeliğin zorunlu kıldığı, sahada gerçekten işe yarayan doğru ürünleri listeliyoruz.",
    icon: ShieldCheck,
  },
  {
    title: "Her İhtiyaca Yönelik Büyüyen Ekosistem",
    description:
      "Sadece kendi ürünlerimizle sınırlı kalmıyor; sektörün güvenilir tedarikçileriyle yaptığımız özel anlaşmalarla ürün yelpazemizi her geçen gün genişletiyoruz.",
    icon: PanelsTopLeft,
  },
];

const productCategories = [
  {
    number: "01",
    title: "YSC ve Tamamlayıcı Aksesuarlar",
    subtitle: "Cihazlarınızın ömrünü uzatan ve dış etkenlerden koruyan çözümler.",
    description:
      "Yangın söndürme cihazlarının güvenli şekilde konumlandırılması, korunması ve yönetmeliğe uygun görünürlükte tutulması için tamamlayıcı aksesuar çözümleri sunuyoruz.",
    items: [
      "YSC dolapları",
      "YSC kılıfları",
      "YSC sehpaları",
      "YSC duvar askı aparatları",
    ],
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Mekanik Yangın Ürünleri",
    subtitle: "Tesislerin en temel su bazlı savunma hatları.",
    description:
      "Sahada en çok tercih edilen, yüksek dayanımlı ve yönetmelik standartlarını karşılayan mekanik yangın ürünlerini AFS güvencesiyle tedarik edebilirsiniz.",
    items: [
      "Yangın dolapları",
      "Mekanik yangın ekipmanları",
      "Su bazlı yangın savunma ürünleri",
      "Yönetmelik uyumlu saha ekipmanları",
    ],
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Elektrik ve Elektronik Güvenlik Ürünleri",
    subtitle: "Karanlıkta ve panik anında hayat kurtaran yönlendirmeler.",
    description:
      "Yangın ve acil durum anlarında güvenli tahliye için yönetmeliğe uygun acil durum aydınlatma armatürleri ve yönlendirme sistemleri sunuyoruz.",
    items: [
      "Acil durum aydınlatma armatürleri",
      "Yönlendirme sistemleri",
      "Elektronik güvenlik ürünleri",
      "Tahliye güvenliği ekipmanları",
    ],
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Diğer Yangın Güvenlik Ekipmanları",
    subtitle: "İlk müdahale ve güvenli kaçış için tamamlayıcı donanımlar.",
    description:
      "Tehlike anında ilk müdahale, güvenli kaçış ve riskin kontrol altına alınması için gerekli tamamlayıcı yangın güvenlik ekipmanlarını portalımızda bulabilirsiniz.",
    items: [
      "Yangın güvenlik işaretleri",
      "Fosforlu levhalar",
      "Standart yangın battaniyeleri",
      "Lityum / araç yangın battaniyeleri",
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
  "Yönetmelik uyumlu tedarik ağı",
  "Doğru yere doğru ürün yönlendirmesi",
  "Bireysel ve kurumsal ihtiyaçlara uygun ürün grupları",
  "Sürekli güncellenen ürün ekosistemi",
  "Güvenilir tedarikçilerle özel anlaşmalar",
  "Bayi ve B2B müşteriler için özel fiyat avantajları",
];

const priceGroups = [
  {
    title: "Son Kullanıcılar İçin",
    description:
      "“Acaba sahte mi, yönetmeliğe uygun mu?” stresine girmeden; şeffaf fiyatlarla, orijinal ve sertifikalı ürünleri doğrudan satın alma rahatlığını yaşarsınız.",
    icon: Users,
  },
  {
    title: "Bayiler ve B2B Müşterileri İçin",
    description:
      "Sektörde son kullanıcıya hizmet veren iş ortaklarımız, portalımıza bayi girişi yaparak özel iskonto oranlarından ve yüksek kâr marjlı fiyat avantajlarından yararlanır.",
    icon: Store,
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <img
          src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1800&auto=format&fit=crop"
          alt="AFS Yangın Güvenlik Ekipmanları"
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
              Ürünler / Yangın Güvenlik Ekipmanları
            </p>

            <h1 className="mt-5 max-w-5xl text-[34px] font-black uppercase leading-[1.08] tracking-[-0.035em] text-white sm:text-[42px] md:text-[58px] xl:text-[70px]">
              Güvenliği ucuza getiremezsiniz.
            </h1>

            <h2 className="mt-5 max-w-4xl text-2xl font-black uppercase leading-tight text-white/90 md:text-4xl">
              Yönetmelik onaylı, güvenilir yangın ekipmanları.
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              Piyasada sadece “işimi görsün” veya “denetimden geçeyim yeter”
              düşüncesiyle satılan standart dışı, ucuz ürünler; bir yangın
              anında en büyük düşmanınız olabilir.
            </p>

            <div className="mt-8 max-w-3xl border-l-4 border-[#d71920] bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-bold leading-7 text-white/88 md:text-base">
                Çalışmayan bir vana, yırtılan bir hortum veya karanlıkta
                yanmayan bir acil aydınlatma armatürü, telafisi imkansız
                kayıplara yol açar.
              </p>
            </div>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75">
              AFS Yangın olarak; Binaların Yangından Korunması Hakkında
              Yönetmelik'e ve uluslararası standartlara uyumlu, sertifikalı
              yangın güvenlik ürünlerini tek bir dijital platformda bir araya
              getiriyoruz. Ne aldığınızı bilin, tehlike anında yarı yolda
              kalmayın.
            </p>

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
                href="#urun-kategorileri"
                className="inline-flex items-center justify-center border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Ürünleri İncele
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
              <ShieldCheck size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Yönetmelik Uyumlu
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Yangın güvenlik ürünlerinde standart dışı çözümler yerine
                denetlenebilir ve güvenilir ürün yaklaşımı sunarız.
              </p>
            </div>

            <div className="bg-white p-7 shadow-2xl">
              <BadgeCheck size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Sertifikalı Ürünler
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                TSE / CE belgeli, sahada kullanılabilir ve denetimlerde sorun
                çıkarmayacak ürünleri ön plana çıkarırız.
              </p>
            </div>

            <div className="bg-white p-7 shadow-2xl">
              <ShoppingCart size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Dijital Portal
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Müşteri ve bayi portalı üzerinden ürünleri inceleyebilir, doğru
                tedarik sürecine hızlıca ulaşabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PORTAL */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Neden AFS Portalından Tedarik Etmelisiniz?
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Sıradan bir e-ticaret değil, mühendislik onaylı tedarik ağı.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              Müşterilerimizin internetteki bilgi kirliliği ve sahte sertifikalı
              ürünler arasında kaybolmasını istemiyoruz. AFS Müşteri ve Bayi
              Portalı üzerinden yapacağınız her tedarikte güvenilir, onaylı ve
              doğru ürünlere ulaşmanızı hedefliyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
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

                  <h3 className="relative mt-7 text-2xl font-black uppercase leading-tight text-[#101827]">
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

      {/* PORTAL ADVANTAGES */}
      <section className="bg-[#06132d] py-24 text-white">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              AFS Portal Avantajı
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              Ne aldığınızı bilin, tehlike anında yarı yolda kalmayın.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              Portal yapısı, ürün seçimini sadece fiyat odaklı olmaktan çıkarır;
              yönetmelik, sertifika, saha kullanımı ve doğru ürün eşleşmesini
              merkeze alır.
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
      <section id="urun-kategorileri" className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Portalda Sizi Neler Bekliyor?
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              Ürün kategorilerimiz.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Bireysel ve kurumsal ihtiyaçlarınızı karşılayacak, sürekli
              güncellenen ve genişleyen ürün gruplarımız portalımızda 4 ana
              kategori altında toplanmıştır.
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

                    <p className="mt-6 text-sm leading-7 text-gray-600">
                      {product.description}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
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
                      href="/teklif-al"
                      className="mt-7 inline-flex items-center gap-3 bg-[#d71920] px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0b2c5f]"
                    >
                      Bu Kategoriyi İncele
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
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              B2B ve Son Kullanıcı Avantajları
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              Hem sektör profesyonelleri hem de son kullanıcılar için özel fiyat avantajları.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
              AFS Portal, kendi güvenliğini sağlamak isteyen son kullanıcılar ve
              sektörde hizmet veren bayiler için farklı avantajlar sunar.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            {priceGroups.map((group, index) => {
              const Icon = group.icon;
              const dark = index === 1;

              return (
                <div
                  key={group.title}
                  className={`relative overflow-hidden p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    dark ? "bg-[#06132d] text-white" : "bg-[#f4f6f8] text-[#101827]"
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
                      dark ? "bg-white/10 text-[#d71920]" : "bg-white text-[#d71920]"
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
                    href="/teklif-al"
                    className={`relative mt-7 inline-flex items-center gap-3 px-6 py-4 text-sm font-black uppercase tracking-wide transition ${
                      dark
                        ? "bg-[#d71920] text-white hover:bg-white hover:text-[#0b2c5f]"
                        : "bg-[#d71920] text-white hover:bg-[#0b2c5f]"
                    }`}
                  >
                    Fiyat Avantajlarını Gör
                    <ArrowRight size={17} />
                  </Link>
                </div>
              );
            })}
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
                  Kaliteden Ödün Vermeden
                </p>

                <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                  En avantajlı fiyatlarla onaylı ürünleri inceleyin.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
                  Hemen AFS Müşteri ve Bayi Portalına adım atın; güvenilir,
                  onaylı ve sertifikalı ürünleri detaylıca inceleyip projenize
                  en uygun çözümleri tek tıkla sipariş edin.
                </p>
              </div>

              <Link
                href="/teklif-al"
                className="group inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0b2c5f]"
              >
                Giriş Yap / Kayıt Oluştur
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="relative mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 bg-[#f4f6f8] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#0b2c5f]">
                <LockKeyhole size={14} />
                Fiyat Avantajlarından Yararlan
              </span>

              <span className="inline-flex items-center gap-2 bg-[#f4f6f8] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#0b2c5f]">
                <Tag size={14} />
                Onaylı Ürünleri İncele
              </span>

              <span className="inline-flex items-center gap-2 bg-[#f4f6f8] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#0b2c5f]">
                <Zap size={14} />
                Tek Tıkla Sipariş Et
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}