// app/kariyer/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Clock,
  FileUp,
  GraduationCap,
  HeartPulse,
  Laptop,
  MapPin,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";

const benefits = [
  {
    title: "Esnek Çalışma Modelleri",
    description:
      "İşin doğasına göre tam zamanlı, yarı zamanlı, hibrit veya tamamen uzaktan çalışma fırsatları sunuyoruz.",
    icon: Laptop,
  },
  {
    title: "Sürekli Gelişim ve Eğitim",
    description:
      "“Tecrüben yok” demiyoruz; “Bizimle öğren ve uzmanlaş” diyoruz. Gerçek projelerde deneyim kazanma şansı sunuyoruz.",
    icon: GraduationCap,
  },
  {
    title: "Geleceğin Altın Mesleği",
    description:
      "Değişen yönetmeliklerle birlikte geleceğin en çok aranan mühendislik ve teknik hizmet alanında kariyer yapma imkânı.",
    icon: ShieldCheck,
  },
];

const positions = [
  {
    title: "Genç Mühendis Adayları",
    subtitle: "Yetiştirilmek Üzere",
    location: "Merkez Ofis / Hibrit / Uzaktan",
    type: "Tam Zamanlı / Yarı Zamanlı / Hibrit / Uzaktan",
    description:
      "Üniversitelerin mühendislik fakültelerinden mezun veya öğrenimine devam eden; proje okuma, çizim, risk analizi ve yasal mevzuat süreçlerinde kendini geliştirmek isteyen dinamik takım arkadaşları arıyoruz.",
    detail:
      "Merkez ofisimizde veya evden çalışarak dev projelerin mutfağında yer alacak, geleceğin Yangın Güvenlik Uzmanları olarak yetişeceksin.",
    icon: GraduationCap,
  },
  {
    title: "YSC Dolum, Bakım ve Servis Teknisyeni",
    subtitle: "Yetiştirilmek Üzere",
    location: "Saha ve Atölye",
    type: "Tam Zamanlı",
    description:
      "Masa başı işler bana göre değil, sahada aktif olmalıyım ve el becerimi geçerli bir mesleğe dönüştürmeliyim diyorsan bu pozisyon tam sana göre.",
    detail:
      "Yangın söndürme cihazlarının dolumu, periyodik bakımı ve müşteri sahasındaki servis süreçlerinde görev almak üzere, uzman ustalarımız ve mühendislerimiz tarafından sıfırdan yetiştirileceksin.",
    icon: Wrench,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Başvuru",
    description:
      "Kariyer formu üzerinden temel bilgilerini, başvurmak istediğin alanı ve CV’ni bizimle paylaşırsın.",
  },
  {
    number: "02",
    title: "Ön Değerlendirme",
    description:
      "Başvurun öğrenme isteğin, enerjin, çalışma modeli tercihin ve pozisyon uygunluğuna göre değerlendirilir.",
  },
  {
    number: "03",
    title: "Görüşme",
    description:
      "Uygun adaylarla görev kapsamı, gelişim hedefleri ve çalışma modeli üzerine görüşme yapılır.",
  },
  {
    number: "04",
    title: "Ekip Süreci",
    description:
      "Olumlu değerlendirme sonrası oryantasyon, mentörlük ve yetiştirme süreci planlanır.",
  },
];

const cultureItems = [
  "Rutin değil, amacı olan işler",
  "Ofiste, sahada veya uzaktan çalışma imkânı",
  "Deneyimli uzmanlardan mentörlük desteği",
  "Gerçek projelerde öğrenme fırsatı",
  "Mühendislik ve teknik hizmet alanında uzmanlaşma",
  "İnsan hayatını koruyan çözümlerde görev alma",
];

export default function CareerPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1800&auto=format&fit=crop"
          alt="AFS Kariyer"
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
              AFS Kariyer
            </p>

            <h1 className="mt-5 max-w-5xl text-[34px] font-black uppercase leading-[1.08] tracking-[-0.035em] text-white sm:text-[42px] md:text-[58px] xl:text-[70px]">
              Sadece bir işe değil, hayat kurtaran bir kariyere adım atın.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              AFS Yangın Mühendislik Hizmetleri A.Ş. olarak; binaları,
              tesisleri ve en önemlisi insan hayatını koruyan mühendislik
              çözümleri üretiyoruz. Bu büyük sorumluluğu taşırken gücümüzü,
              sürekli gelişen, dinamik ve işini tutkuyla yapan ekibimizden
              alıyoruz.
            </p>

            <div className="mt-8 max-w-3xl border-l-4 border-[#d71920] bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-bold leading-7 text-white/88 md:text-base">
                Eğer sen de “Sadece rutin bir işim olmasın, yaptığım işin bir
                amacı ve değeri olsun” diyorsan, doğru yerdesin.
              </p>
            </div>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75">
              Klasik ve sıkıcı mesai anlayışlarını geride bırakıyoruz;
              yeteneğin ve hevesin nerede parlıyorsa ofiste, sahada veya evden
              sana o alanı sunuyoruz. Deneyimli uzmanlarımızdan mentörlük alarak
              sektörün aranan profesyonellerinden biri olmak için ekibimize
              katıl.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#kariyer-formu"
                className="group inline-flex items-center justify-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Başvuru Yap
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="#pozisyonlar"
                className="inline-flex items-center justify-center border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Açık Pozisyonlar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO CARDS */}
      <section className="relative z-10 -mt-14">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="bg-white p-7 shadow-2xl">
              <HeartPulse size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Hayat Kurtaran İş
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Yaptığın işin doğrudan insan hayatı, bina güvenliği ve tesis
                sürekliliğiyle bağlantılı olduğu anlamlı bir alanda çalışırsın.
              </p>
            </div>

            <div className="bg-white p-7 shadow-2xl">
              <Sparkles size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Yetiştirme Kültürü
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                CV’nin çok dolu olması şart değil. Öğrenme hevesin, enerjin ve
                gelişim isteğin bizim için değerlidir.
              </p>
            </div>

            <div className="bg-white p-7 shadow-2xl">
              <Users size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Dinamik Ekip
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                İşini tutkuyla yapan, gelişime açık ve sektörün uzmanlarından
                öğrenmeye hazır bir ekibin parçası olursun.
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
                Neden AFS’de Çalışmalısın?
              </p>

              <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Öğrenmek, gelişmek ve değer üreten bir kariyer kurmak için.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              AFS’de kariyer; sadece bir görev tanımından ibaret değildir.
              Yeteneğini gösterebileceğin çalışma modeli, gerçek projelerde
              deneyim ve uzmanlardan mentörlük desteğiyle gelişim fırsatı sunar.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#d71920] hover:shadow-2xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center bg-[#eef1f5] text-[#d71920] transition group-hover:bg-[#d71920] group-hover:text-white">
                    <Icon size={32} />
                  </div>

                  <h3 className="mt-7 text-xl font-black uppercase text-[#101827]">
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

      {/* CULTURE STRIP */}
      <section className="bg-[#06132d] py-24 text-white">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              AFS Kariyer Kültürü
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              Yeteneğin ve hevesin nerede parlıyorsa, sana o alanı sunuyoruz.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              Ofiste, sahada veya evden çalışma imkânı; gerçek projeler,
              uzmanlardan mentörlük ve geleceğin mesleklerinden birinde
              uzmanlaşma fırsatı.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {cultureItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <BadgeCheck
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

      {/* POSITIONS */}
      <section id="pozisyonlar" className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Açık Pozisyonlarımız
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              Aramıza katılabileceğin alanlar
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Genç mühendis adayları ve YSC dolum, bakım, servis teknisyeni
              pozisyonlarında yetiştirilmek üzere dinamik takım arkadaşları
              arıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            {positions.map((position) => {
              const Icon = position.icon;

              return (
                <div
                  key={position.title}
                  className="group border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#d71920] hover:shadow-2xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center bg-[#eef1f5] text-[#d71920] transition group-hover:bg-[#d71920] group-hover:text-white">
                    <Icon size={32} />
                  </div>

                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d71920]">
                    {position.subtitle}
                  </p>

                  <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-[#101827]">
                    {position.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 bg-[#eef1f5] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#0b2c5f]">
                      <MapPin size={14} />
                      {position.location}
                    </span>

                    <span className="inline-flex items-center gap-2 bg-[#eef1f5] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#0b2c5f]">
                      <Clock size={14} />
                      {position.type}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-gray-600">
                    {position.description}
                  </p>

                  <p className="mt-4 text-sm font-bold leading-7 text-gray-700">
                    {position.detail}
                  </p>

                  <a
                    href="#kariyer-formu"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-black uppercase text-[#d71920]"
                  >
                    Bu Pozisyona Başvur
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </a>
                </div>
              );
            })}
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
                İlk adımdan ekip sürecine kadar net ve şeffaf ilerleriz.
              </h2>
            </div>

            <p className="max-w-lg text-base leading-8 text-gray-600">
              Başvurun sadece geçmiş deneyimlerinle değil; öğrenme hevesin,
              enerjin ve gelişim potansiyelinle birlikte değerlendirilir.
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
      <section id="kariyer-formu" className="bg-[#06132d] py-24 text-white">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Kariyer Başvurusu
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              Aramıza katılmak için ilk adımı at.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              AFS Yangın ailesinin bir parçası olmak istiyorsan, aşağıdaki formu
              doldurarak bize hemen ulaşabilirsin. CV’n henüz çok dolu
              olmayabilir; bizim için önemli olan öğrenme hevesin, enerjin ve bu
              ailenin bir parçası olma isteğindir.
            </p>

            <div className="mt-7 border-l-4 border-[#d71920] bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-bold leading-7 text-white/82">
                Özgeçmişini yükle, hangi alanda kendini geliştirmek istediğini
                kısaca anlat ve başvurunu gönder.
              </p>
            </div>
          </div>

          <form className="grid gap-4 bg-white p-6 text-[#101827] shadow-2xl md:p-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d71920]">
                Başvuru Formu
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase">
                Kariyer Başvurusu
              </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Ad Soyad"
                className="h-14 border border-gray-200 px-4 text-sm outline-none transition focus:border-[#d71920]"
              />

              <input
                type="email"
                placeholder="E-Posta"
                className="h-14 border border-gray-200 px-4 text-sm outline-none transition focus:border-[#d71920]"
              />
            </div>

            <input
              type="tel"
              placeholder="Telefon"
              className="h-14 border border-gray-200 px-4 text-sm outline-none transition focus:border-[#d71920]"
            />

            <select className="h-14 border border-gray-200 px-4 text-sm text-gray-500 outline-none transition focus:border-[#d71920]">
              <option>Departman Seçiniz</option>
              <option>Genç Mühendis</option>
              <option>YSC Bakım Teknisyeni</option>
              <option>Genel Başvuru</option>
            </select>

            <label className="group flex min-h-[92px] cursor-pointer items-center justify-between gap-4 border border-dashed border-gray-300 bg-[#f8fafc] px-5 py-4 transition hover:border-[#d71920] hover:bg-white">
              <span className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center bg-white text-[#d71920] shadow-sm group-hover:bg-[#d71920] group-hover:text-white">
                  <FileUp size={22} />
                </span>

                <span>
                  <span className="block text-sm font-black uppercase text-[#101827]">
                    Özgeçmiş Ekle
                  </span>
                  <span className="mt-1 block text-xs font-semibold text-gray-500">
                    PDF, DOC veya DOCX formatında CV yükleyebilirsiniz.
                  </span>
                </span>
              </span>

              <span className="hidden text-xs font-black uppercase tracking-wide text-[#d71920] sm:block">
                Dosya Seç
              </span>

              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
              />
            </label>

            <textarea
              placeholder="Mesajınız: Neden bizimle çalışmak istediğinizi veya çalışma modeli tercihinizi belirtebilirsiniz."
              rows={6}
              className="resize-none border border-gray-200 p-4 text-sm outline-none transition focus:border-[#d71920]"
            />

            <button
              type="button"
              className="group mt-2 inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0b2c5f]"
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
      <section className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="relative overflow-hidden bg-[#06132d] p-8 text-white md:p-14">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1600&auto=format&fit=crop"
              alt="AFS Kariyer Başvurusu"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98),rgba(5,18,48,0.78),rgba(215,25,32,0.28))]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                  AFS Ailesine Katıl
                </p>

                <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight md:text-5xl">
                  Öğrenme hevesin ve enerjin varsa, aramıza katılmak için ilk
                  adımı at.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                  Başvurunu gönder, hangi alanda kendini geliştirmek istediğini
                  bizimle paylaş.
                </p>
              </div>

              <a
                href="#kariyer-formu"
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