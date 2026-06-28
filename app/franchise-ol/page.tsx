// app/franchise-ol/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Handshake,
  MapPin,
  Send,
  ShieldCheck,
  TrendingUp,
  Users,
  Wrench,
  ClipboardCheck,
  BriefcaseBusiness,
} from "lucide-react";

const modelItems = [
  {
    title: "A'dan Z'ye Tam Kapsam",
    description:
      "Yangın tüpü, mekanik sistemler, itfaiye ruhsat danışmanlığı, periyodik bakım ve akredite raporlama dahil müşterinizin ihtiyacı olan tüm hizmetleri AFS markasıyla tek elden sunabilirsiniz.",
    icon: ClipboardCheck,
  },
  {
    title: "Teknik Yük Sıfır",
    description:
      "Proje nasıl çizilir, denetimden nasıl geçilir, sistem nasıl kurulur diye dert etmezsiniz. Siz bölgenizde satış ve müşteri bağlantılarına odaklanırsınız; mühendislik, tedarik ve servis operasyonunu AFS yönetir.",
    icon: Wrench,
  },
  {
    title: "Sürekli Gelir Modeli",
    description:
      "Yangın güvenliği tek seferlik bir satış değildir. Periyodik bakım, yıllık denetim ve dolum işlemleri sayesinde her yıl büyüyen düzenli bir gelir modeli oluşturabilirsiniz.",
    icon: TrendingUp,
  },
];

const candidateProfiles = [
  {
    title: "Ticari Vizyonu ve Çevresi Olanlar",
    description:
      "Mühendis olmanıza veya yangın sektörünü teknik olarak bilmenize gerek yok. İkna kabiliyetiniz yüksekse ve bölgenizde güçlü iş bağlantılarına sahipseniz, AFS ekosisteminde hızla kazanç sağlayabilirsiniz.",
    icon: Users,
  },
  {
    title: "Sektöre Yakın Profesyoneller",
    description:
      "İSG firması, mühendislik ofisi, sigorta acentesi, yapı denetim veya gayrimenkul danışmanlığı gibi hazır kurumsal müşteri portföyünüz varsa, AFS franchise sistemi mevcut işinize güçlü bir ivme kazandırır.",
    icon: BriefcaseBusiness,
  },
];

const regions = [
  "İzmir ve Ege Bölgesi",
  "Sanayi bölgeleri",
  "Yüksek katlı bina yoğunluğu olan şehirler",
  "Liman ve lojistik bölgeleri",
  "Turizm tesislerinin yoğun olduğu bölgeler",
  "Türkiye genelindeki stratejik şehirler",
];

const benefits = [
  "Yangın güvenliği sektöründe büyüyen zorunlu hizmet pazarı",
  "AFS mühendislik ve operasyon desteği",
  "Ürün, sistem, bakım ve raporlama süreçlerinde tek marka güvencesi",
  "Teknik bilgi zorunluluğu olmadan ticari büyüme fırsatı",
  "Bölgesel müşteri ağı oluşturma imkânı",
  "Düzenli bakım ve denetimlerle sürdürülebilir gelir modeli",
];

export default function FranchisePage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1800&auto=format&fit=crop"
          alt="AFS Yangın Franchise"
          className="absolute inset-0 h-full w-full object-cover opacity-32"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98)_0%,rgba(5,18,48,0.9)_45%,rgba(215,25,32,0.34)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.12),transparent_28%)]" />

        <div className="relative mx-auto max-w-[1500px] px-5 py-20 lg:px-6 lg:py-28">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-20 w-1.5 bg-[#d71920] lg:h-28 lg:w-2" />
              <span className="h-14 w-1.5 bg-[#1d75bc] lg:h-20 lg:w-2" />
              <span className="h-9 w-1.5 bg-white/80 lg:h-12 lg:w-2" />
            </div>

            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#d71920] sm:text-sm">
              Bayilik ve İş Ortaklığı
            </p>

            <h1 className="mt-5 max-w-5xl text-[34px] font-black uppercase leading-[1.08] tracking-[-0.035em] text-white sm:text-[42px] md:text-[58px] xl:text-[70px]">
              Geleceğin en kârlı ve kesintisiz sektöründe yerinizi alın.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              AFS Yangın franchise ağına katılın. Yangın güvenliği sektörü,
              artan riskler ve kapıdaki radikal yönetmelik değişiklikleriyle
              tarihinin en büyük büyüme ivmesini yakalıyor.
            </p>

            <div className="mt-8 max-w-3xl border-l-4 border-[#d71920] bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-bold leading-7 text-white/88 md:text-base">
                Çok yakında zorunlu hale gelecek olan “Yangın Güvenlik Uzmanı”
                bulundurma şartı ve sıkılaştırılan rutin denetimler, bu sektörü
                tercih olmaktan çıkarıp sürekli ve zorunlu bir hizmet pazarına
                dönüştürüyor.
              </p>
            </div>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75">
              AFS Yangın Mühendislik Hizmetleri A.Ş. olarak; bu devasa pazarı
              tek başımıza değil, vizyoner iş ortaklarımızla birlikte yönetmek
              için kârlı bir ekosistem kuruyoruz.
            </p>

            <h2 className="mt-8 max-w-4xl text-xl font-black uppercase leading-tight text-white md:text-3xl">
              Siz sadece müşterinize ve büyümeye odaklanın; teknik altyapıyı,
              üretimi ve mühendisliği bize bırakın.
            </h2>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#franchise-formu"
                className="group inline-flex items-center justify-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Ön Talep Başvurusu Yap
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="#model"
                className="inline-flex items-center justify-center border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                İş Modelini İncele
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TOP STATS */}
      <section className="relative z-10 -mt-14">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="bg-white p-7 shadow-2xl">
              <ShieldCheck size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Zorunlu Hizmet Pazarı
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Denetim, bakım, raporlama ve güvenlik ihtiyaçları sürekli
                hizmet modelini güçlendirir.
              </p>
            </div>

            <div className="bg-white p-7 shadow-2xl">
              <Building2 size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Anahtar Teslim Sistem
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Ürün, mühendislik, servis ve operasyon altyapısı AFS tarafından
                desteklenir.
              </p>
            </div>

            <div className="bg-white p-7 shadow-2xl">
              <Handshake size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Vizyoner İş Ortaklığı
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Bölgesinde güçlü bağlantıları olan girişimciler için büyüme
                odaklı franchise modeli.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODEL */}
      <section id="model" className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Benzersiz İş Modelimiz
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Neden AFS Franchise Sistemi?
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              Piyasadaki klasik bayilik modellerini unutun. Biz size sadece
              satacak bir ürün değil, arkasında güçlü mühendislik altyapısı olan
              anahtar teslim bir iş modeli sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
            {modelItems.map((item) => {
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

      {/* BENEFITS STRIP */}
      <section className="bg-[#06132d] py-24 text-white">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Franchise Avantajları
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              AFS sistemiyle sadece bayi değil, güçlü bir iş ortağı olursunuz.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              AFS franchise modeli, teknik süreçleri tek başınıza çözmeye
              çalışmadan bölgenizde müşteri ağı kurmanıza ve sürdürülebilir
              gelir modeli oluşturmanıza imkân sağlar.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
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

      {/* CANDIDATE PROFILE */}
      <section className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Aday Profilimiz
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Kimler AFS Franchise’ı olabilir?
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              Öncelikli pilot bölgemiz olan İzmir ve Ege Bölgesi başta olmak
              üzere; sanayi, yüksek katlı bina, liman ve turizm tesislerinin
              yoğun olduğu tüm Türkiye genelinden ön talepleri toplamaya
              başlıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            {candidateProfiles.map((item) => {
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

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {regions.map((region) => (
              <div
                key={region}
                className="flex items-center gap-4 bg-white p-5 shadow-sm"
              >
                <MapPin size={22} className="shrink-0 text-[#d71920]" />
                <p className="text-sm font-black uppercase text-[#101827]">
                  {region}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="franchise-formu" className="py-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Franchise Ön Talep Formu
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
              Pazarın liderleriyle büyümek için ön başvurunuzu oluşturun.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
              Geleceğin en değerli sektöründe AFS Yangın güvencesiyle kendi
              işinizin patronu olmak için ön talep formunu doldurun.
              Uzmanlarımız başvurunuzu değerlendirip, bölgenizdeki potansiyel
              fırsatları görüşmek üzere sizinle iletişime geçecektir.
            </p>

            <div className="mt-7 border-l-4 border-[#d71920] bg-[#f4f6f8] p-5">
              <p className="text-sm font-bold leading-7 text-gray-700">
                Not: Yatırım ve sermaye detayları, olumlu geçen ilk ön
                değerlendirme görüşmesinden sonraki aşamada planlanacaktır.
              </p>
            </div>
          </div>

          <form className="grid gap-4 bg-[#06132d] p-6 text-white shadow-2xl md:p-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d71920]">
                Başvuru Bilgileri
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase">
                Franchise Ön Talep Formu
              </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Adınız Soyadınız"
                className="h-14 border border-white/10 bg-white px-4 text-sm text-[#101827] outline-none transition focus:border-[#d71920]"
              />

              <input
                type="tel"
                placeholder="Telefon Numaranız"
                className="h-14 border border-white/10 bg-white px-4 text-sm text-[#101827] outline-none transition focus:border-[#d71920]"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="email"
                placeholder="E-Posta Adresiniz"
                className="h-14 border border-white/10 bg-white px-4 text-sm text-[#101827] outline-none transition focus:border-[#d71920]"
              />

              <input
                type="text"
                placeholder="Franchise Düşündüğünüz Şehir / İlçe"
                className="h-14 border border-white/10 bg-white px-4 text-sm text-[#101827] outline-none transition focus:border-[#d71920]"
              />
            </div>

            <input
              type="text"
              placeholder="Mevcut Mesleğiniz / Ticari Faaliyetiniz"
              className="h-14 border border-white/10 bg-white px-4 text-sm text-[#101827] outline-none transition focus:border-[#d71920]"
            />

            <select className="h-14 border border-white/10 bg-white px-4 text-sm text-gray-500 outline-none transition focus:border-[#d71920]">
              <option>Şu Anki İş Durumunuz</option>
              <option>İş Sağlığı ve Güvenliği (İSG) Sektöründeyim</option>
              <option>Mühendislik / Mimarlık Hizmeti Veriyorum</option>
              <option>Sigorta / Gayrimenkul / Yapı Sektöründeyim</option>
              <option>Farklı Bir Ticari İşletme Sahibiyim</option>
              <option>Yeni Bir Girişimciyim</option>
            </select>

            <textarea
              placeholder="Neden AFS Franchise’ı olmak istiyorsunuz? Bölgenizdeki ticari potansiyeli nasıl değerlendiriyorsunuz?"
              rows={6}
              className="resize-none border border-white/10 bg-white p-4 text-sm text-[#101827] outline-none transition focus:border-[#d71920]"
            />

            <button
              type="button"
              className="group mt-2 inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
            >
              Ön Talep Başvurusunu Gönder
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
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop"
              alt="AFS Yangın Franchise Başvuru"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98),rgba(5,18,48,0.78),rgba(215,25,32,0.28))]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                  AFS Franchise Ağı
                </p>

                <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight md:text-5xl">
                  Bölgenizde güçlü bir yangın güvenliği iş modeli kurmak için
                  ilk adımı atın.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                  Ön başvurunuzu oluşturun, AFS uzmanları bölgenizdeki
                  potansiyel fırsatları değerlendirmek üzere sizinle iletişime
                  geçsin.
                </p>
              </div>

              <a
                href="#franchise-formu"
                className="group inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Ön Talep Formuna Git
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