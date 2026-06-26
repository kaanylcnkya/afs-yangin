// app/hakkimizda/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Factory,
  Flame,
  Handshake,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const values = [
  {
    title: "Güven",
    description:
      "Yangın güvenliği süreçlerinde işletmelere güven veren, sürdürülebilir ve profesyonel çözümler sunarız.",
    icon: ShieldCheck,
  },
  {
    title: "Kalite",
    description:
      "Ürün, hizmet, bakım ve kontrol süreçlerinde kalite standartlarını merkeze alan bir yaklaşım benimseriz.",
    icon: BadgeCheck,
  },
  {
    title: "Süreklilik",
    description:
      "Yangın güvenliğini tek seferlik işlem değil, düzenli takip edilmesi gereken kurumsal bir süreç olarak ele alırız.",
    icon: ClipboardCheck,
  },
  {
    title: "İş Birliği",
    description:
      "Müşterilerimiz, tedarikçilerimiz ve iş ortaklarımızla uzun vadeli güven ilişkisi kurmayı hedefleriz.",
    icon: Handshake,
  },
];

const stats = [
  {
    value: "4",
    label: "Ana Çözüm Alanı",
  },
  {
    value: "360°",
    label: "Yangın Güvenliği Yaklaşımı",
  },
  {
    value: "7/24",
    label: "Destek Anlayışı",
  },
  {
    value: "AFS",
    label: "Partner For Safety",
  },
];

const approach = [
  {
    number: "01",
    title: "İhtiyaç Analizi",
    description:
      "İşletmenin faaliyet alanı, risk yapısı, mevcut ekipmanları ve ihtiyaç duyduğu güvenlik süreçleri analiz edilir.",
  },
  {
    number: "02",
    title: "Doğru Çözüm Planı",
    description:
      "Cihaz, sistem, bakım, kontrol ve hizmet ihtiyaçları işletmeye özel olarak planlanır.",
  },
  {
    number: "03",
    title: "Uygulama ve Takip",
    description:
      "Belirlenen süreçler uygulanır, bakım ve kontrol periyotları takip edilerek sürdürülebilir güvenlik sağlanır.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06132d] pt-36 text-white">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1800&auto=format&fit=crop"
          alt="AFS Hakkımızda"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98)_0%,rgba(5,18,48,0.86)_48%,rgba(215,25,32,0.32)_100%)]" />

        <div className="relative mx-auto max-w-[1500px] px-6 py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#d71920]">
              AFS Yangın
            </p>

            <h1 className="mt-5 text-4xl font-black uppercase leading-[1.08] md:text-6xl">
              Yangın güvenliğinde güvenilir, kurumsal ve sürdürülebilir çözüm
              ortağınız.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              AFS Yangın; yangın söndürme cihazları, sistem çözümleri, bakım,
              kontrol ve kurumsal yangın güvenliği hizmetlerinde işletmeler için
              profesyonel çözümler sunar.
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
                href="/is-birlikleri"
                className="inline-flex items-center border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                İş Birlikleri
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative z-10 -mt-16">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="bg-white p-7 shadow-2xl">
                <p className="text-4xl font-black uppercase text-[#d71920]">
                  {item.value}
                </p>
                <p className="mt-3 text-sm font-black uppercase tracking-wide text-[#101827]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Biz Kimiz?
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
              İşletmelerin yangın güvenliği ihtiyaçlarını tek çatı altında
              planlıyoruz.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              AFS Yangın, işletmelerin yangın güvenliği süreçlerini daha
              düzenli, takip edilebilir ve profesyonel bir yapıya kavuşturmayı
              hedefleyen bir çözüm markasıdır. Cihaz, sistem, bakım, kontrol ve
              hizmet süreçlerini bütüncül bir yaklaşımla ele alır.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Amacımız; işletmelerin sadece yasal zorunluluklarını yerine
              getirmesine destek olmak değil, aynı zamanda çalışan güvenliği,
              iş sürekliliği ve kurumsal güvenlik kültürünün gelişmesine katkı
              sağlamaktır.
            </p>
          </div>

          <div className="relative">
            <div className="relative h-[560px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1600&auto=format&fit=crop"
                alt="AFS Yangın kurumsal yapı"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,18,48,0.20),rgba(215,25,32,0.22))]" />

              <div className="absolute bottom-6 left-6 right-6 bg-white p-7 shadow-2xl">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d71920]">
                  Partner For Safety
                </p>
                <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-[#101827]">
                  Güvenli alanlar için profesyonel yangın güvenliği yaklaşımı.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION VISION */}
      <section className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            <div className="relative overflow-hidden bg-[#06132d] p-9 text-white shadow-xl">
              <div className="absolute right-[-30px] top-[-20px] text-[110px] font-black uppercase leading-none text-white/[0.04]">
                AFS
              </div>

              <Target size={42} className="text-[#d71920]" />

              <p className="mt-7 text-sm font-black uppercase tracking-[0.28em] text-white/55">
                Misyonumuz
              </p>

              <h3 className="mt-4 text-3xl font-black uppercase leading-tight">
                İşletmelere güvenli, sürdürülebilir ve uygulanabilir yangın
                güvenliği çözümleri sunmak.
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/68">
                Yangın güvenliği süreçlerini profesyonel standartlarla
                planlayarak işletmelerin risklerini azaltmak, hizmet
                sürekliliğini desteklemek ve güvenli çalışma alanları
                oluşturmak için çalışıyoruz.
              </p>
            </div>

            <div className="relative overflow-hidden bg-white p-9 shadow-xl">
              <div className="absolute right-[-30px] top-[-20px] text-[110px] font-black uppercase leading-none text-[#0b2c5f]/5">
                AFS
              </div>

              <Building2 size={42} className="text-[#d71920]" />

              <p className="mt-7 text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Vizyonumuz
              </p>

              <h3 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827]">
                Yangın güvenliği alanında güçlü, güvenilir ve yaygın bir çözüm
                ağı oluşturmak.
              </h3>

              <p className="mt-5 text-sm leading-7 text-gray-600">
                AFS markasını; kurumsal hizmet yaklaşımı, iş ortaklığı modeli,
                tedarik yapısı ve profesyonel operasyon kabiliyetiyle yangın
                güvenliği alanında bilinen bir değer haline getirmeyi
                hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Değerlerimiz
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              AFS yaklaşımını oluşturan temel değerler
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Hizmet anlayışımız; güven, kalite, süreklilik ve iş birliği
              ilkeleri üzerine kuruludur.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-[#d71920] hover:shadow-2xl"
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

      {/* APPROACH */}
      <section className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Çalışma Yaklaşımımız
              </p>

              <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase text-[#101827] md:text-5xl">
                Yangın güvenliği süreçlerini adım adım planlarız.
              </h2>
            </div>

            <p className="max-w-lg text-base leading-8 text-gray-600">
              Her işletmenin ihtiyacı farklıdır. Bu nedenle çözüm sürecini
              analiz, planlama ve takip adımlarıyla yürütürüz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {approach.map((step) => (
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

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="relative overflow-hidden bg-[#06132d] p-8 text-white md:p-14">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1600&auto=format&fit=crop"
              alt="AFS Yangın teklif"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98),rgba(5,18,48,0.78),rgba(215,25,32,0.28))]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                  AFS ile Güvenli Alanlar
                </p>

                <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight md:text-5xl">
                  Yangın güvenliği ihtiyaçlarınız için profesyonel destek alın.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                  İşletmeniz için uygun cihaz, sistem, bakım ve hizmet
                  çözümlerini birlikte planlayabiliriz.
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