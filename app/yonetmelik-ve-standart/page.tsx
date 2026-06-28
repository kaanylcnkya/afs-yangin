// app/yonetmelik-ve-standart/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ExternalLink,
  FileText,
  Flame,
  Gavel,
  HardHat,
  ShieldCheck,
  Zap,
} from "lucide-react";

const regulationGroups = [
  {
    title: "Yangın ve Acil Durum Mevzuatları",
    icon: Flame,
    items: [
      {
        title: "Binaların Yangından Korunması Hakkında Yönetmelik",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=200712937&MevzuatTur=21&MevzuatTertip=5",
      },
      {
        title: "İşyerlerinde Acil Durumlar Hakkında Yönetmelik",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=18493&MevzuatTur=7&MevzuatTertip=5",
      },
      {
        title:
          "Büyük Endüstriyel Kazaların Önlenmesi ve Etkilerinin Azaltılması Hakkında Yönetmelik",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=19743&MevzuatTur=7&MevzuatTertip=5",
      },
    ],
  },
  {
    title: "İş Sağlığı ve Güvenliği (İSG) Mevzuatları",
    icon: HardHat,
    items: [
      {
        title: "6331 Sayılı İş Sağlığı ve Güvenliği Kanunu",
        href: "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6331.pdf",
      },
      {
        title: "İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16925&MevzuatTur=7&MevzuatTertip=5",
      },
      {
        title:
          "İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve Güvenlik Önlemlerine İlişkin Yönetmelik",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=18592&MevzuatTur=7&MevzuatTertip=5",
      },
      {
        title: "İş Sağlığı ve Güvenliği Hizmetleri Yönetmeliği",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=16924&MevzuatTur=7&MevzuatTertip=5",
      },
      {
        title: "İş Sağlığı ve Güvenliği Kurulları Hakkında Yönetmelik",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=17031&MevzuatTur=7&MevzuatTertip=5",
      },
      {
        title:
          "Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul ve Esasları Hakkında Yönetmelik",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=18371&MevzuatTur=7&MevzuatTertip=5",
      },
      {
        title: "Sağlık ve Güvenlik İşaretleri Yönetmeliği",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=18829&MevzuatTur=7&MevzuatTertip=5",
      },
      {
        title:
          "Kişisel Koruyucu Donanımların İşyerlerinde Kullanılması Hakkında Yönetmelik",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=18540&MevzuatTur=7&MevzuatTertip=5",
      },
    ],
  },
  {
    title: "Ekipman, Tesisat ve Kimyasal Mevzuatları",
    icon: Zap,
    items: [
      {
        title:
          "İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=18318&MevzuatTur=7&MevzuatTertip=5",
      },
      {
        title:
          "Patlayıcı Ortamların Tehlikelerinden Çalışanların Korunması Hakkında Yönetmelik",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=18335&MevzuatTur=7&MevzuatTertip=5",
      },
      {
        title:
          "Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=18709&MevzuatTur=7&MevzuatTertip=5",
      },
      {
        title: "Elektrik İç Tesisleri Yönetmeliği",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6655&MevzuatTur=7&MevzuatTertip=5",
      },
      {
        title: "Elektrik Kuvvetli Akım Tesisleri Yönetmeliği",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=9949&MevzuatTur=7&MevzuatTertip=5",
      },
      {
        title: "Elektrik Tesislerinde Topraklamalar Yönetmeliği",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=10392&MevzuatTur=7&MevzuatTertip=5",
      },
      {
        title: "Basınçlı Ekipmanlar Yönetmeliği",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=24436&MevzuatTur=7&MevzuatTertip=5",
      },
      {
        title: "Taşınabilir Basınçlı Ekipmanlar Yönetmeliği",
        href: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=41274&MevzuatTur=7&MevzuatTertip=5",
      },
      {
        title: "Makina Emniyeti Yönetmeliği",
        href: "https://mevzuat.gov.tr/mevzuat?MevzuatNo=12907&MevzuatTur=7&MevzuatTertip=5",
      },
    ],
  },
];

const standardExamples = [
  "TS ISO 11602-2",
  "TS EN 671-3",
  "TS 11827",
];

export default function RegulationsAndStandardsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1800&auto=format&fit=crop"
          alt="AFS Yönetmelik ve Standartlar"
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
              Yönetmelik ve Standartlar
            </p>

            <h1 className="mt-5 max-w-5xl text-[34px] font-black uppercase leading-[1.08] tracking-[-0.035em] text-white sm:text-[42px] md:text-[58px] xl:text-[70px]">
              Güvenliğinizin yasal teminatı: güncel mevzuatlar ve mühendislik
              standartları
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              Yangın güvenliği ve iş sağlığı alanında kulaktan dolma bilgilere
              veya eski uygulamalara yer yoktur. Bir sistemin sadece çalışması
              yetmez; aynı zamanda yasal denetimlerden geçmesi ve ulusal /
              uluslararası mevzuatlara %100 uyumlu olması zorunludur.
            </p>

            <div className="mt-8 max-w-3xl border-l-4 border-[#d71920] bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-bold leading-7 text-white/88 md:text-base">
                AFS Yangın Mühendislik Hizmetleri A.Ş. olarak; projelerimizi,
                danışmanlık hizmetlerimizi ve periyodik bakımlarımızı T.C.
                yasalarının zorunlu kıldığı yönetmeliklere ve dünya
                standartlarına göre gerçekleştiriyoruz.
              </p>
            </div>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75">
              İşletmenizin yasal yükümlülüklerini yakından takip edebilmeniz
              için ihtiyacınız olan tüm güncel yönetmelik bağlantılarını aşağıda
              sizin için derledik.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#mevzuatlar"
                className="group inline-flex items-center justify-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Kanun ve Yönetmelikler
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="#standartlar"
                className="inline-flex items-center justify-center border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Mühendislik Standartları
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* KANUN VE YÖNETMELİKLER */}
      <section id="mevzuatlar" className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Kanun ve Yönetmelikler
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Pratik bağlantılar
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              İşletmenizi ilgilendiren yasal mevzuatların T.C.
              Cumhurbaşkanlığı Mevzuat Bilgi Sistemi üzerindeki en güncel ve
              resmi hallerine aşağıdaki bağlantılara tıklayarak doğrudan
              ulaşabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7">
            {regulationGroups.map((group) => {
              const Icon = group.icon;

              return (
                <div
                  key={group.title}
                  className="overflow-hidden border border-gray-200 bg-white shadow-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[0.35fr_1fr]">
                    <div className="bg-[#06132d] p-7 text-white md:p-8">
                      <div className="flex h-16 w-16 items-center justify-center bg-white/10 text-[#d71920]">
                        <Icon size={32} />
                      </div>

                      <h3 className="mt-7 text-2xl font-black uppercase leading-tight">
                        {group.title}
                      </h3>
                    </div>

                    <div className="grid gap-4 p-6 md:p-8">
                      {group.items.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start justify-between gap-5 border border-gray-200 bg-[#f8fafc] p-5 transition hover:border-[#d71920] hover:bg-white hover:shadow-lg"
                        >
                          <span className="flex items-start gap-4">
                            <FileText
                              size={22}
                              className="mt-0.5 shrink-0 text-[#d71920]"
                            />

                            <span>
                              <span className="block text-sm font-black uppercase leading-6 text-[#101827]">
                                {item.title}
                              </span>

                              <span className="mt-2 block text-xs font-bold uppercase tracking-wide text-gray-400">
                                İlgili sayfaya git
                              </span>
                            </span>
                          </span>

                          <ExternalLink
                            size={18}
                            className="mt-1 shrink-0 text-gray-400 transition group-hover:text-[#d71920]"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MÜHENDİSLİK STANDARTLARI */}
      <section id="standartlar" className="bg-[#06132d] py-24 text-white">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Mühendislik Standartları
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
                Standartları sizin için yorumluyor ve uyguluyoruz
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-white/65">
              Yangın söndürme sistemlerinin tasarımı, cihazların üretimi ve
              periyodik bakım süreçleri; TSE, EN ve NFPA standartlarına göre
              yapılmak zorundadır.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
            <div className="border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="flex h-16 w-16 items-center justify-center bg-white/10 text-[#d71920]">
                <Gavel size={32} />
              </div>

              <h3 className="mt-7 text-2xl font-black uppercase leading-tight">
                TSE
              </h3>
            </div>

            <div className="border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="flex h-16 w-16 items-center justify-center bg-white/10 text-[#d71920]">
                <BookOpenCheck size={32} />
              </div>

              <h3 className="mt-7 text-2xl font-black uppercase leading-tight">
                EN
              </h3>
            </div>

            <div className="border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="flex h-16 w-16 items-center justify-center bg-white/10 text-[#d71920]">
                <ShieldCheck size={32} />
              </div>

              <h3 className="mt-7 text-2xl font-black uppercase leading-tight">
                NFPA
              </h3>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="border-l-4 border-[#d71920] bg-white/10 p-6">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d71920]">
                Önemli Bilgilendirme
              </p>

              <p className="mt-4 text-sm font-bold leading-7 text-white/78">
                İlgili standart dokümanları uluslararası telif hakları yasaları
                gereğince korunduğu ve ücretli olarak yayımlandığı için bu sayfa
                üzerinden doğrudan paylaşılamamaktadır.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/65">
                Ancak endişelenmenize gerek yok! İşletmenizin hangi
                standartlara tabi olduğu, projelerinizin standartlara uygunluğu
                veya mevcut sistemlerinizin yorumlanmasıyla ilgili tüm teknik
                ihtiyaçlarınız için uzman mühendislerimize danışabilirsiniz.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {standardExamples.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 border border-white/10 bg-white/5 p-5"
                >
                  <CheckCircle2
                    size={22}
                    className="mt-0.5 shrink-0 text-[#d71920]"
                  />

                  <p className="text-sm font-bold leading-7 text-white/78">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="relative overflow-hidden bg-[#06132d] p-8 text-white md:p-14">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop"
              alt="AFS Yönetmelik ve Standartlar"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98),rgba(5,18,48,0.78),rgba(215,25,32,0.28))]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                  Yasal Süreçlerde Başınız Ağrımasın!
                </p>

                <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight md:text-5xl">
                  İşletmenizin mevcut durumunun yangın yönetmeliklerine ve
                  standartlara uygun olup olmadığını bilmiyor musunuz?
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                  Risk analizi, itfaiye uygunluk raporu ve projelendirme
                  süreçleri için mühendislerimizle hemen iletişime geçin.
                </p>
              </div>

              <Link
                href="/bize-ulasin"
                className="group inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Uzman Mühendislerimize Danışın
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