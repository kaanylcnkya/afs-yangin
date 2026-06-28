// app/politikalar/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  FileText,
  LockKeyhole,
  Scale,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const policyCards = [
  {
    id: "kalite",
    title: "Kalite Politikamız",
    description:
      "Müşterilerimizin can ve mal güvenliğini koruyan çözümleri uluslararası standartlarda sunma taahhüdümüz.",
    icon: BadgeCheck,
  },
  {
    id: "tarafsizlik",
    title: "Tarafsızlık, Dürüstlük ve Bağımsızlık",
    description:
      "Mühendislik doğruları ve yasal yönetmelikler doğrultusunda tarafsız hizmet anlayışımız.",
    icon: Scale,
  },
  {
    id: "gizlilik",
    title: "Gizlilik Politikası",
    description:
      "Müşterilerimize ait ticari, teknik, mimari ve kişisel bilgilerin korunmasına yönelik taahhüdümüz.",
    icon: LockKeyhole,
  },
  {
    id: "kvkk",
    title: "KVKK ve Aydınlatma Metni",
    description:
      "6698 sayılı KVKK kapsamında kişisel verilerin işlenmesi, aktarılması ve haklarınıza ilişkin bilgilendirme.",
    icon: UserCheck,
  },
];

const qualityItems = [
  "TS EN ISO 9001 Kalite Yönetim Sistemi standartlarına uygun bir yönetim altyapısı kurmak, uygulamak ve sistemin etkinliğini sürekli iyileştirmek.",
  "Sunduğumuz tüm projelendirme, danışmanlık, satış, dolum ve teknik servis hizmetlerinde yüksek kalitede, hızlı ve güvenilir çözümler üretmek.",
  "Personelimizin yasal mevzuatlar, değişen yangın yönetmelikleri ve teknolojik gelişmeler konusunda sürekli eğitilmesini sağlayarak teknik yetkinliklerimizi en üst seviyede tutmak.",
  "Müşteri memnuniyetini ve güvenini işimizin merkezine koyarak, teslim ettiğimiz her projenin ve hizmetin sonuna kadar arkasında durmak.",
];

const impartialityItems = [
  "Tüm projelendirme, danışmanlık, risk analizi ve teknik servis faaliyetlerimiz; ticari, mali veya diğer her türlü iç ve dış baskıdan tamamen uzak bir şekilde, sadece mühendislik doğruları ve yasal yönetmelikler baz alınarak gerçekleştirilir.",
  "Müşterilerimize sunduğumuz çözümlerde ve ihtiyaç tespitlerinde tamamen şeffaf davranılır; işletmeler gereksiz maliyetlerden korunurken, güvenlik önlemlerinin eksiksiz alınması sağlanır.",
  "Çalışanlarımızın karar alma süreçlerini ve teknik değerlendirmelerini olumsuz etkileyebilecek hiçbir ticari veya kişisel çıkar çatışmasına müsaade edilmez.",
];

const privacyItems = [
  "Faaliyetlerimiz sırasında işletmelere ve kurumlara ait elde edilen her türlü ticari, teknik, mimari ve kişisel bilgi “Gizli Bilgi” statüsünde değerlendirilir.",
  "Müşterilerimizin tescilli hakları, ticari sırları ve projelerine ait mimari detaylar titizlikle korunur.",
  "Kanunların veya yasal mercilerin bilgi talep ettiği istisnai durumlar haricinde, elde edilen hiçbir bilgi müşterinin yazılı izni olmadan üçüncü şahıslar veya kurumlarla kesinlikle paylaşılmaz. Yasal bir zorunluluk halinde müşteri önceden bilgilendirilir.",
  "Bilgilerin gizliliğini ve güvenliğini tam sağlamak amacıyla tüm personelimiz gizlilik sözleşmelerine bağlı olarak çalışmaktadır.",
];

const kvkkPurposes = [
  "Size yönelik tekliflerin hazırlanması ve sunulan hizmet / ürün süreçlerinin yürütülmesi.",
  "Kariyer, tedarikçi ve franchise başvurularınızın değerlendirilmesi ve sizinle iletişime geçilmesi.",
  "Müşteri memnuniyetine yönelik geri bildirimlerin, anketlerin, şikayetlerin ve önerilerin değerlendirilmesi.",
  "Yasal yükümlülüklerimizin yerine getirilmesi.",
];

const kvkkRights = [
  "Kişisel verilerinizin işlenip işlenmediğini öğrenme.",
  "Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme.",
  "Kişisel verilerinizin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme.",
  "Eksik veya yanlış işlenmiş kişisel verilerinizin düzeltilmesini isteme.",
  "Kişisel verilerinizin silinmesini veya yok edilmesini talep etme.",
];

function PolicyList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <div
          key={item}
          className={`flex items-start gap-4 p-5 ${
            dark
              ? "border border-white/10 bg-white/5"
              : "border border-gray-200 bg-white"
          }`}
        >
          <CheckCircle2
            size={22}
            className="mt-0.5 shrink-0 text-[#d71920]"
          />

          <p
            className={`text-sm font-bold leading-7 ${
              dark ? "text-white/80" : "text-gray-700"
            }`}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function PoliciesPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1800&auto=format&fit=crop"
          alt="AFS Politikalarımız ve Bilgilendirme"
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
              Politikalarımız ve Bilgilendirme
            </p>

            <h1 className="mt-5 max-w-5xl text-[34px] font-black uppercase leading-[1.08] tracking-[-0.035em] text-white sm:text-[42px] md:text-[58px] xl:text-[70px]">
              Güven, kalite ve şeffaflık ilkelerimiz.
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              AFS Yangın Mühendislik Hizmetleri Tic. San. A.Ş. olarak kalite,
              tarafsızlık, gizlilik ve kişisel verilerin korunması konularında
              benimsediğimiz temel ilkeleri kamuoyu, müşterilerimiz, çalışan
              adaylarımız ve iş ortaklarımızla şeffaf şekilde paylaşıyoruz.
            </p>

            <div className="mt-8 max-w-3xl border-l-4 border-[#d71920] bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-bold leading-7 text-white/88 md:text-base">
                Tüm mühendislik, danışmanlık, satış, dolum, bakım ve teknik
                servis hizmetlerimizde güvenilir, tarafsız, mevzuata uygun ve
                sürdürülebilir hizmet anlayışını esas alıyoruz.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#politikalar"
                className="group inline-flex items-center justify-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Politikaları İncele
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/bize-ulasin"
                className="inline-flex items-center justify-center border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Bize Ulaşın
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* POLICY CARDS */}
      <section id="politikalar" className="relative z-10 -mt-14">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {policyCards.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group bg-white p-7 shadow-2xl transition hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(6,19,45,0.18)]"
                >
                  <Icon size={38} className="text-[#d71920]" />

                  <h3 className="mt-5 text-xl font-black uppercase leading-tight text-[#101827]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase text-[#d71920]">
                    İncele
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section id="kalite" className="py-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              01 / Kalite Politikamız
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
              Can ve mal güvenliğini koruyan çözümlerde kalite standardımız.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
              AFS Yangın Mühendislik Hizmetleri Tic. San. A.Ş. olarak temel
              amacımız; müşterilerimizin can ve mal güvenliğini koruyan çözümler
              üretirken, ihtiyaç ve beklentileri uluslararası standartlarda, en
              üst düzeyde karşılamaktır.
            </p>
          </div>

          <PolicyList items={qualityItems} />
        </div>
      </section>

      {/* IMPARTIALITY */}
      <section id="tarafsizlik" className="bg-[#06132d] py-24 text-white">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              02 / Tarafsızlık, Dürüstlük ve Bağımsızlık
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              Etik değerlerden ve mühendislik doğrularından taviz vermeyiz.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              Şirketimiz, sunduğu tüm mühendislik ve yangın güvenliği
              hizmetlerinde etik değerlerden, dürüstlükten ve tarafsızlık
              ilkesinden asla taviz vermez.
            </p>
          </div>

          <PolicyList items={impartialityItems} dark />
        </div>
      </section>

      {/* PRIVACY */}
      <section id="gizlilik" className="py-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              03 / Gizlilik Politikası
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
              Müşterilerimizin güveni en değerli varlığımızdır.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
              AFS Yangın Mühendislik Hizmetleri A.Ş. olarak,
              gerçekleştirdiğimiz tüm mühendislik, projelendirme, dolum, bakım
              ve resmi danışmanlık hizmetleri sırasında elde edilen bilgilerin
              güvenliğini taahhüt ediyoruz.
            </p>
          </div>

          <PolicyList items={privacyItems} />
        </div>
      </section>

      {/* KVKK */}
      <section id="kvkk" className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                04 / Kişisel Verilerin Korunması
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                KVKK ve aydınlatma metni.
              </h2>
            </div>

            <div className="border-l-4 border-[#d71920] bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-gray-400">
                Veri Sorumlusu
              </p>

              <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-[#101827]">
                AFS Yangın Mühendislik Hizmetleri Tic. San. A.Ş.
              </h3>

              <p className="mt-5 text-base leading-8 text-gray-600">
                6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca, web
                sitemizi ziyaretleriniz, doldurduğunuz iletişim formları,
                franchise ve kariyer başvurularınız kapsamında elde edilen
                kişisel verileriniz veri sorumlusu sıfatıyla şirketimiz
                tarafından yasal çerçevede işlenmektedir.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            <div className="bg-white p-7 shadow-sm md:p-8">
              <div className="flex h-16 w-16 items-center justify-center bg-[#eef1f5] text-[#d71920]">
                <FileText size={32} />
              </div>

              <h3 className="mt-7 text-2xl font-black uppercase text-[#101827]">
                Kişisel Verilerin İşlenme Amacı
              </h3>

              <div className="mt-6">
                <PolicyList items={kvkkPurposes} />
              </div>
            </div>

            <div className="bg-[#06132d] p-7 text-white shadow-sm md:p-8">
              <div className="flex h-16 w-16 items-center justify-center bg-white/10 text-[#d71920]">
                <ShieldCheck size={32} />
              </div>

              <h3 className="mt-7 text-2xl font-black uppercase">
                Verilerin Aktarılması
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/68">
                Kişisel verileriniz, açık rızanız bulunmaksızın veya KVKK’nın 8
                ve 9. maddelerinde öngörülen yasal istisnalar dışında üçüncü
                şahıslara kesinlikle aktarılmamaktadır.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/68">
                Resmi kurumların yasal talepleri veya iş sürekliliği için resmi
                hizmet alınan bilişim / altyapı tedarikçileri gibi yasal
                istisnalar kapsamında işlem yapılması gerektiğinde, süreç yasal
                çerçevede yürütülür.
              </p>
            </div>
          </div>

          <div className="mt-7 bg-white p-7 shadow-sm md:p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                  KVKK Madde 11 Kapsamındaki Haklarınız
                </p>

                <h3 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827]">
                  Kişisel veri sahibi olarak haklarınız.
                </h3>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Kişisel veri sahibi olarak şirketimize başvurarak aşağıdaki
                  haklarınızı kullanabilirsiniz.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  Başvurularınızı{" "}
                  <a
                    href="mailto:info@afsyangin.com"
                    className="font-black text-[#d71920]"
                  >
                    info@afsyangin.com
                  </a>{" "}
                  adresi üzerinden veri sorumlusuna iletebilirsiniz.
                </p>
              </div>

              <PolicyList items={kvkkRights} />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="relative overflow-hidden bg-[#06132d] p-8 text-white md:p-14">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop"
              alt="AFS Politikalar ve Bilgilendirme"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98),rgba(5,18,48,0.78),rgba(215,25,32,0.28))]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                  Bilgilendirme ve Başvuru
                </p>

                <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight md:text-5xl">
                  Politika ve KVKK süreçleri hakkında bizimle iletişime
                  geçebilirsiniz.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                  Kalite, gizlilik, tarafsızlık ve kişisel verilerin korunması
                  kapsamındaki başvurularınız için AFS Yangın ile iletişime
                  geçebilirsiniz.
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