// app/tedarikci-ol/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileUp,
  Globe2,
  Handshake,
  PackageCheck,
  Send,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

const advantages = [
  {
    title: "Güçlü ve Güvenilir Sermaye Yapısı",
    description:
      "Ticarette en önemli şey güvendir. Güçlü finansal altyapımızla ödemelerinizde ve süreçlerinizde sürpriz yaşamazsınız.",
    icon: Building2,
  },
  {
    title: "Dev Projeler ve Prestijli Network",
    description:
      "AFS'nin çözüm ortağı olduğunuzda ürünleriniz veya hizmetleriniz Türkiye'nin büyük firmalarının projelerinde yer bulur.",
    icon: Globe2,
  },
  {
    title: "Gerçek Kazan-Kazan Felsefesi",
    description:
      "Sadece tek taraflı bir alım süreci değil, uzun vadeli bir ortaklık kurarız. Kaliteyi standart haline getiren partnerlerimizle birlikte büyümeyi hedefleriz.",
    icon: Handshake,
  },
];

const supplierTypes = [
  {
    title: "Ürün Tedarikçileri",
    description:
      "Yangın kapısı, yangın tüpü, özel söndürme maddeleri, mekanik ve elektronik güvenlik donanımları üreticileri.",
    icon: PackageCheck,
  },
  {
    title: "Hizmet ve Mühendislik Partnerleri",
    description:
      "Yangın pompası bakımı yapan servisler, algılama sistemi kuran teknoloji firmaları, PKD hazırlayabilen uzmanlar ve yangın eğitimi verebilecek kişiler.",
    icon: Wrench,
  },
  {
    title: "Tamamlayıcı Çözüm Ortakları",
    description:
      "Etiket, reklam, baskı, sarf malzeme ve kalite süreçlerimize katkı sunabilecek farklı sektörlerden çözüm ortakları.",
    icon: Truck,
  },
];

const standards = [
  "Binaların Yangından Korunması Hakkında Yönetmelik’e uygunluk",
  "TSE, CE, NFPA ve ilgili ulusal / uluslararası standartlara uyum",
  "Ürün veya hizmete ilişkin geçerli sertifika ve uygunluk belgeleri",
  "Denetimden geçebilecek, belgeli ve izlenebilir kalite yaklaşımı",
  "Standart dışı ürün ve hizmetlerin AFS projelerinde kullanılmaması",
  "Sürdürülebilir, güvenilir ve profesyonel tedarik anlayışı",
];

const processSteps = [
  {
    number: "01",
    title: "Başvuru",
    description:
      "Firma bilgilerinizi, faaliyet alanınızı, ürün veya hizmet kategorinizi başvuru formu üzerinden iletirsiniz.",
  },
  {
    number: "02",
    title: "Belge İncelemesi",
    description:
      "Sertifika, uygunluk ve yeterlilik belgeleriniz ilgili departmanlarımız tarafından değerlendirilir.",
  },
  {
    number: "03",
    title: "Ön Görüşme",
    description:
      "Uygun görülen başvurular için ürün, hizmet, kapasite ve iş birliği modeli üzerine görüşme yapılır.",
  },
  {
    number: "04",
    title: "Çözüm Ortaklığı",
    description:
      "Kalite ve standart uygunluğu sağlanan firmalarla uzun vadeli kazan-kazan temelli iş birliği süreci başlatılır.",
  },
];

export default function SupplierPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1800&auto=format&fit=crop"
          alt="AFS Tedarikçi Ol"
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
              Tedarikçi Ol / Çözüm Ortaklığı
            </p>

            <h1 className="mt-5 max-w-5xl text-[34px] font-black uppercase leading-[1.08] tracking-[-0.035em] text-white sm:text-[42px] md:text-[58px] xl:text-[70px]">
              Birlikte büyüyor, birlikte kazanıyoruz.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              AFS Yangın tedarikçi ağına katılın. Türkiye'nin dev projelerinde,
              sanayi tesislerinde ve kurumsal markalarında güvenliği inşa
              ederken en büyük gücümüzü sağlam çözüm ortaklarımızdan alıyoruz.
            </p>

            <div className="mt-8 max-w-3xl border-l-4 border-[#d71920] bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-bold leading-7 text-white/88 md:text-base">
                Bizim için tedarikçi, sadece malzeme alınan bir yer değil; aynı
                masada oturduğumuz, gücümüze güç katan değerli bir iş ortağıdır.
              </p>
            </div>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75">
              “Bizi destekleyeni, biz daha fazla destekleriz” prensibiyle
              kurduğumuz bu güçlü kazan-kazan ekosistemine katılmak ve büyük
              projelerde bizimle omuz omuza yürümek istiyorsanız, kapımız size
              açık.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#tedarikci-formu"
                className="group inline-flex items-center justify-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Başvuru Yap
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="#standartlar"
                className="inline-flex items-center justify-center border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Standartları İncele
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
              <Handshake size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Çözüm Ortaklığı
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Tedarikçilerimizi kısa vadeli alım noktası değil, uzun vadeli
                iş ortağı olarak görürüz.
              </p>
            </div>

            <div className="bg-white p-7 shadow-2xl">
              <ShieldCheck size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Standart Odaklılık
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                AFS projelerinde yalnızca belgeli, denetlenebilir ve
                standartlara uygun ürün ve hizmetler yer alır.
              </p>
            </div>

            <div className="bg-white p-7 shadow-2xl">
              <BadgeCheck size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Kaliteli Paydaş Ağı
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Ürün, hizmet, mühendislik ve tamamlayıcı çözümlerde güçlü
                paydaşlarla birlikte ilerleriz.
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
                Neden AFS’nin Tedarikçisi Olmalısınız?
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Güçlü bir A.Ş. ile çalışmanın ayrıcalığını yaşayın.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              Piyasada sıradan bir müşteriyle değil, mühendislik temelli güçlü
              bir yapı ile çalışırsınız. İşini iyi yapan, kaliteyi standart
              haline getiren her partnerimizi kendi ailemizden sayarız.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
            {advantages.map((item) => {
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

      {/* WHO CAN BE SUPPLIER */}
      <section className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Kimler Tedarikçimiz Olabilir?
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Lokasyon sınırı yoktur; kalite ve standart bizim için esastır.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              İşimiz güvenlik. Bu büyük çarkın dönmesi için pek çok alanda
              kaliteli paydaşlara ihtiyacımız var. Türkiye'nin veya dünyanın
              neresinde olduğunuz önemli değil; işinizi standartlara uygun
              yapıyorsanız bu ağda size de yer var.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
            {supplierTypes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#d71920] hover:shadow-2xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center bg-[#eef1f5] text-[#d71920] transition group-hover:bg-[#d71920] group-hover:text-white">
                    <Icon size={32} />
                  </div>

                  <h3 className="mt-7 text-2xl font-black uppercase leading-tight text-[#101827]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STANDARDS */}
      <section id="standartlar" className="bg-[#06132d] py-24 text-white">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Kırmızı Çizgimiz
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              Yönetmelik ve standartlara uyum.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              Bizim işimizde şansa, varsayımlara ve eksik belgelere yer yoktur.
              Binaların Yangından Korunması Hakkında Yönetmelik ve uluslararası
              standartlar bizim anayasamızdır.
            </p>

            <div className="mt-7 border-l-4 border-[#d71920] bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-bold leading-7 text-white/82">
                Denetimden geçemeyecek, standart dışı hiçbir ürün veya hizmet
                AFS projelerinde kullanılamaz.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {standards.map((item) => (
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

      {/* PROCESS */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Başvuru Süreci
              </p>

              <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase text-[#101827] md:text-5xl">
                Tedarikçi başvurunuz titizlikle değerlendirilir.
              </h2>
            </div>

            <p className="max-w-lg text-base leading-8 text-gray-600">
              Ürünleriniz, hizmetleriniz ve kalite belgeleriniz ilgili
              departmanlarımız tarafından incelenir.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="relative overflow-hidden border border-gray-200 bg-white p-8 shadow-sm"
              >
                <span className="absolute right-5 top-3 text-6xl font-black text-[#0b2c5f]/5">
                  {step.number}
                </span>

                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#d71920]">
                  {step.number}
                </p>

                <h3 className="mt-5 text-2xl font-black uppercase text-[#101827]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="tedarikci-formu" className="bg-[#f4f6f8] py-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Tedarikçi / İş Birliği Başvuru Formu
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
              Gücümüzü birleştirmek için formu doldurun.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
              Ürünlerinizi, hizmetlerinizi ve kalite belgelerinizi bizimle
              paylaşın. İlgili departmanımız başvurunuzu titizlikle inceleyip
              en kısa sürede sizinle iletişime geçecektir.
            </p>

            <div className="mt-7 border-l-4 border-[#d71920] bg-white p-5 shadow-sm">
              <p className="text-sm font-bold leading-7 text-gray-700">
                Sertifika ve yeterlilik belgeleri zorunludur. Lütfen yalnızca
                standartlara uygunluk belgelerinizi yükleyiniz.
              </p>
            </div>
          </div>

          <form className="grid gap-4 bg-[#06132d] p-6 text-white shadow-2xl md:p-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d71920]">
                Başvuru Bilgileri
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase">
                Tedarikçi Başvurusu
              </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Firma Ünvanı"
                className="h-14 border border-white/10 bg-white px-4 text-sm text-[#101827] outline-none transition focus:border-[#d71920]"
              />

              <input
                type="text"
                placeholder="Yetkili Kişi Adı Soyadı"
                className="h-14 border border-white/10 bg-white px-4 text-sm text-[#101827] outline-none transition focus:border-[#d71920]"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="tel"
                placeholder="Telefon Numarası"
                className="h-14 border border-white/10 bg-white px-4 text-sm text-[#101827] outline-none transition focus:border-[#d71920]"
              />

              <input
                type="email"
                placeholder="E-Posta Adresi"
                className="h-14 border border-white/10 bg-white px-4 text-sm text-[#101827] outline-none transition focus:border-[#d71920]"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Faaliyet Gösterdiğiniz İl / İlçe"
                className="h-14 border border-white/10 bg-white px-4 text-sm text-[#101827] outline-none transition focus:border-[#d71920]"
              />

              <select className="h-14 border border-white/10 bg-white px-4 text-sm text-gray-500 outline-none transition focus:border-[#d71920]">
                <option>Tedarik / Hizmet Kategoriniz</option>
                <option>Üretici</option>
                <option>Hizmet ve Servis</option>
                <option>Danışmanlık</option>
                <option>Diğer</option>
              </select>
            </div>

            <label className="group flex min-h-[92px] cursor-pointer items-center justify-between gap-4 border border-dashed border-white/25 bg-white/5 px-5 py-4 transition hover:border-[#d71920] hover:bg-white/10">
              <span className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center bg-white text-[#d71920] shadow-sm">
                  <FileCheck2 size={22} />
                </span>

                <span>
                  <span className="block text-sm font-black uppercase text-white">
                    Sertifika ve Yeterlilik Belgeleri
                  </span>
                  <span className="mt-1 block text-xs font-semibold text-white/55">
                    Zorunlu alan — standartlara uygunluk belgelerinizi yükleyin.
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

            <label className="group flex min-h-[92px] cursor-pointer items-center justify-between gap-4 border border-dashed border-white/25 bg-white/5 px-5 py-4 transition hover:border-[#d71920] hover:bg-white/10">
              <span className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center bg-white text-[#d71920] shadow-sm">
                  <FileUp size={22} />
                </span>

                <span>
                  <span className="block text-sm font-black uppercase text-white">
                    Tanıtım Kataloğu / Broşür
                  </span>
                  <span className="mt-1 block text-xs font-semibold text-white/55">
                    Opsiyonel alan — firmanızı veya ürünlerinizi tanıtan dosya.
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

            <textarea
              placeholder="Mesajınız / İş Birliği Teklifiniz"
              rows={6}
              className="resize-none border border-white/10 bg-white p-4 text-sm text-[#101827] outline-none transition focus:border-[#d71920]"
            />

            <button
              type="button"
              className="group mt-2 inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
            >
              Başvuruyu Gönder
              <Send
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="relative overflow-hidden bg-[#06132d] p-8 text-white md:p-14">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1600&auto=format&fit=crop"
              alt="AFS Tedarikçi Başvurusu"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98),rgba(5,18,48,0.78),rgba(215,25,32,0.28))]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                  AFS Tedarikçi Ağı
                </p>

                <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight md:text-5xl">
                  Kalitenizle AFS projelerine değer katın.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                  Ürünlerinizi, hizmetlerinizi ve kalite belgelerinizi paylaşın;
                  güçlü çözüm ortaklığı için ilk adımı birlikte atalım.
                </p>
              </div>

              <a
                href="#tedarikci-formu"
                className="group inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Başvuru Formuna Git
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}