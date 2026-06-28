// app/hizmetler/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Flame,
  Gauge,
  HardHat,
  QrCode,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Timer,
  Wrench,
} from "lucide-react";

const differences = [
  {
    title: "Tek Çatı, Sıfır Stres",
    description:
      "Projeden plana, periyodik kontrolden resmi danışmanlığa kadar başka hiçbir firmayla uğraşmazsınız.",
    icon: Building2,
  },
  {
    title: "Hukuki Tam Koruma",
    description:
      "Bakanlık ve itfaiye yönetmeliklerine uyumlu, resmi makamlarda kabul görebilecek eksiksiz dosyalar hazırlarız.",
    icon: ShieldCheck,
  },
  {
    title: "Zaman ve Maliyet Tasarrufu",
    description:
      "Göz kararı değil, mühendislik temelli doğru ihtiyaç tespiti yaparak gereksiz yatırım masraflarının önüne geçeriz.",
    icon: Timer,
  },
];

const serviceCategories = [
  {
    number: "01",
    title: "Yangın Güvenlik Uzmanlığı ve Danışmanlık",
    subtitle: "Değişen yönetmeliklere ve denetimlere her an hazır olun.",
    description:
      "Yeni işletme açılışlarında ve mevcut tesislerinizin rutin denetimlerinde, uzman mühendis kadromuzla yanınızdayız. Olası kapatma, ceza ve uygunsuzluk risklerini en aza indirmek için süreci baştan doğru yönetiyoruz.",
    scope:
      "Yangın Danışmanlığı, İtfaiye Uygunluk Raporu Alımı, Yangın Risk Değerlendirmesi, Patlamadan Korunma Dokümanı, Fire Master Plan, Yangın Eğitimi ve Tatbikatı.",
    button: "Yasal Sürecinizi Başlatmak İçin Uzmana Danışın",
    href: "/bize-ulasin",
    icon: ShieldAlert,
  },
  {
    number: "02",
    title: "Projelendirme",
    subtitle: "Kağıt üzerinde kusursuzluk, sahada tam güvenlik.",
    description:
      "Bir sistemin hayat kurtarması ve resmi onaylardan geçmesi, doğru çizilmiş bir projeyle başlar. Fazla veya eksik malzeme kullanımını engelleyerek tam ihtiyacınıza uygun optimum çözümleri projelendiriyoruz.",
    scope:
      "Mimari Yangın Projesi, Yangın Mekanik Tesisat Projelendirme, Temiz Gazlı ve Davlumbaz Söndürme Sistemleri, Yangın Güvenlik Merdiveni Basınçlandırma, Algılama ve İkaz Sistemleri, Acil Aydınlatma ve Yönlendirme Sistemleri, Yangın Tahliye Projelendirmesi.",
    button: "Projeniz İçin Hemen Teklif Alın",
    href: "/teklif-al",
    icon: FileText,
  },
  {
    number: "03",
    title: "Plan Hazırlama",
    subtitle: "Panik anını yönetmek tesadüflere bırakılamaz.",
    description:
      "Tehlike anında kimin ne yapacağı, nereye kaçacağı ve sistemlerin nasıl işleyeceği önceden planlanmalıdır. Resmi denetimlerde ilk sorulan ve insan hayatını doğrudan etkileyen planlarınızı standartlara uygun şekilde hazırlıyoruz.",
    scope:
      "Vaziyet Planı, Röleve Planı, Detaylı Tahliye Planı, Yangından Korunma Planı.",
    button: "İşletmenize Özel Planlar İçin Bizimle İletişime Geçin",
    href: "/bize-ulasin",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Bakım ve Servis Hizmetleri",
    subtitle: "Geniş kapsamlı TS HYB belgeleriyle sürdürülebilir koruma.",
    description:
      "Kurulan sistemlerin yıllar sonra bile ilk günkü gibi çalışması için TSE Hizmet Yeterlilik Belgelerimizle periyodik bakımlarınızı gerçekleştiriyoruz. İtfaiye onaylı tatbikat ve eğitimlerle personelinizi de güvenliğin bir parçası yapıyoruz.",
    scope:
      "Sulu ve Otomatik Söndürme Sistemleri Bakımı, Algılama ve Yönlendirme Sistemleri Bakımı, Yangın Tüpü Bakımları, İtfaiye Yetkili Davlumbaz Baca Temizliği, Pasif Yangın Önleme Hizmetleri.",
    button: "Bakım ve Servis Anlaşması İçin Fiyat İsteyin",
    href: "/teklif-al",
    icon: Wrench,
  },
  {
    number: "05",
    title: "Akredite Periyodik Kontrol",
    subtitle: "TÜRKAK onaylı, karekodlu ve 7/24 erişilebilir raporlama.",
    description:
      "Güçbirliği Mühendislik iş birliği ile sistemlerinizin periyodik kontrollerini bağımsız ve TÜRKAK akreditasyonlu olarak gerçekleştiriyoruz. Akredite kuruluş onayı; raporunuzun Bakanlık, SGK ve İtfaiye dahil Türkiye genelinde kabul görmesini destekler.",
    scope:
      "Yangın Sistemleri ve Ekipmanları, Kaldırma ve İletme Ekipmanları, Basınçlı Kaplar ve Tesisatlar, Depo Raf Kontrolleri, Elektriksel Kontroller, Havalandırma Tesisatı Kontrolü, Ex-proof Ekipman Kontrolü, NDT Tahribatsız Muayene, Makina ve Tezgah Kontrolü, İş Makinaları Kontrolü.",
    button: "Akredite Periyodik Kontrol Randevusu Oluşturun",
    href: "/bize-ulasin",
    icon: QrCode,
  },
];

const serviceHighlights = [
  "Yangın danışmanlığı",
  "İtfaiye uygunluk raporu",
  "Yangın risk değerlendirmesi",
  "Patlamadan korunma dokümanı",
  "Fire Master Plan",
  "Yangın eğitimi ve tatbikatı",
  "Mekanik yangın projelendirme",
  "Tahliye ve korunma planları",
  "TSE belgeli bakım ve servis",
  "TÜRKAK akredite periyodik kontrol",
];

const digitalItems = [
  "Karekodlu raporlama altyapısı",
  "Dijital ortamda kayıt takibi",
  "Denetim anında hızlı belge erişimi",
  "Geçmiş kontrol ve rapor arşivi",
  "Yasal belgelerin tek noktadan görüntülenmesi",
  "Kurumsal tesisler için sürdürülebilir kontrol sistemi",
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1800&auto=format&fit=crop"
          alt="AFS Yangın Hizmetler"
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
              Hizmetler / Yangın Danışmanlığı ve Risk Yönetimi
            </p>

            <h1 className="mt-5 max-w-5xl text-[34px] font-black uppercase leading-[1.08] tracking-[-0.035em] text-white sm:text-[42px] md:text-[58px] xl:text-[70px]">
              Denetim korkusuna son.
            </h1>

            <h2 className="mt-5 max-w-4xl text-2xl font-black uppercase leading-tight text-white/90 md:text-4xl">
              A’dan Z’ye tek çatı altında kusursuz yangın güvenliği.
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              İtfaiye ruhsat süreçleri, çalışma bakanlığı denetimleri veya yeni
              yönetmelikler gözünüzü mü korkutuyor? Yanlış tespitler, uzayan
              süreçler ve farklı taşeronlarla uğraşmak size sadece zaman ve para
              kaybettirir.
            </p>

            <div className="mt-8 max-w-3xl border-l-4 border-[#d71920] bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-bold leading-7 text-white/88 md:text-base">
                AFS Yangın olarak; işletmenizin ihtiyacı olan tüm resmi ve
                teknik süreci tek muhatap olma anlayışıyla üstleniyoruz. Doğru
                tespit ve tam yetkilendirme ile sürdürülebilir, denetimlerden
                sorunsuz geçmeye odaklanan sistemler kuruyoruz.
              </p>
            </div>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75">
              Siz işinizi büyütmeye odaklanın, yasal prosedürleri ve güvenliği
              AFS yönetsin.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#hizmet-kategorileri"
                className="group inline-flex items-center justify-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Hizmetleri İncele
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/teklif-al"
                className="inline-flex items-center justify-center border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TOP CARDS */}
      <section className="relative z-10 -mt-14">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="bg-white p-7 shadow-2xl">
              <Siren size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Denetimlere Hazırlık
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                İtfaiye, Bakanlık ve kurumsal denetimlerde ihtiyaç duyulan
                resmi ve teknik hazırlıkları tek merkezden yönetiriz.
              </p>
            </div>

            <div className="bg-white p-7 shadow-2xl">
              <HardHat size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Mühendislik Temelli Çözüm
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Göz kararı değil, doğru ihtiyaç tespiti ve mühendislik
                yaklaşımıyla işletmenize uygun çözüm üretiriz.
              </p>
            </div>

            <div className="bg-white p-7 shadow-2xl">
              <FileCheck2 size={38} className="text-[#d71920]" />
              <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                Eksiksiz Dosya Yönetimi
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Ruhsat, uygunluk, plan, proje ve raporlama süreçlerinde
                denetlenebilir ve takip edilebilir dosyalar hazırlarız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Neden Biz?
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                Baş ağrısı yok, ekstra maliyet yok.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-gray-600">
              İşletmelerin yangın güvenliği sürecinde yaptığı en büyük hata;
              projeyi ayrı, bakımı ayrı, danışmanlığı ayrı firmalara vermektir.
              AFS ile süreci tek çatı altında yönetirsiniz.
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

      {/* SERVICE HIGHLIGHTS */}
      <section className="bg-[#06132d] py-24 text-white">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Hizmet Kapsamı
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              Resmi ve teknik süreçleri tek merkezden yönetiyoruz.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
              Yangın danışmanlığı, projelendirme, plan hazırlama, bakım, servis
              ve akredite periyodik kontrol süreçlerinde işletmenize uçtan uca
              destek sağlıyoruz.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {serviceHighlights.map((item) => (
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

      {/* SERVICE CATEGORIES */}
      <section id="hizmet-kategorileri" className="bg-[#f4f6f8] py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Hizmet Kategorilerimiz
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
              Yangın güvenliği için ihtiyacınız olan tüm hizmetler.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Danışmanlık, projelendirme, planlama, bakım ve akredite kontrol
              süreçlerinizi tek muhatap ile yönetebilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7">
            {serviceCategories.map((service, index) => {
              const Icon = service.icon;
              const isDark = index % 2 === 1;

              return (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 gap-8 overflow-hidden p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl lg:grid-cols-[0.35fr_1fr] lg:p-9 ${
                    isDark
                      ? "bg-[#06132d] text-white"
                      : "border border-gray-200 bg-white text-[#101827]"
                  }`}
                >
                  <div>
                    <div
                      className={`mb-6 flex h-16 w-16 items-center justify-center ${
                        isDark
                          ? "bg-white/10 text-[#d71920]"
                          : "bg-[#eef1f5] text-[#d71920]"
                      }`}
                    >
                      <Icon size={32} />
                    </div>

                    <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                      {service.number}
                    </p>

                    <h3 className="mt-4 text-3xl font-black uppercase leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <div>
                    <h4
                      className={`text-xl font-black uppercase leading-tight ${
                        isDark ? "text-white" : "text-[#101827]"
                      }`}
                    >
                      {service.subtitle}
                    </h4>

                    <p
                      className={`mt-5 text-sm leading-7 ${
                        isDark ? "text-white/68" : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </p>

                    <div
                      className={`mt-6 border-l-4 border-[#d71920] p-5 ${
                        isDark ? "bg-white/10" : "bg-[#f4f6f8]"
                      }`}
                    >
                      <p
                        className={`text-xs font-black uppercase tracking-[0.22em] ${
                          isDark ? "text-white/50" : "text-gray-400"
                        }`}
                      >
                        Hizmet Kapsamı
                      </p>

                      <p
                        className={`mt-3 text-sm font-bold leading-7 ${
                          isDark ? "text-white/82" : "text-gray-700"
                        }`}
                      >
                        {service.scope}
                      </p>
                    </div>

                    <Link
                      href={service.href}
                      className={`mt-7 inline-flex items-center gap-3 px-6 py-4 text-sm font-black uppercase tracking-wide transition ${
                        isDark
                          ? "bg-[#d71920] text-white hover:bg-white hover:text-[#0b2c5f]"
                          : "bg-[#d71920] text-white hover:bg-[#0b2c5f]"
                      }`}
                    >
                      {service.button}
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIGITAL REPORTING */}
      <section className="py-24">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
              Dijital Güvence
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
              Karekodlu ve 7/24 erişilebilir raporlama altyapısı.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Sistemlerinize entegre edilen özel karekod altyapısı sayesinde,
              raporlarınız dijital ortama aktarılır. Denetim anında tek bir
              okutmayla geçmiş kayıtlara ve yasal belgelere hızlıca
              ulaşabilirsiniz.
            </p>

            <div className="mt-7 border-l-4 border-[#d71920] bg-[#f4f6f8] p-5">
              <p className="text-sm font-bold leading-7 text-gray-700">
                Teknolojik raporlama yapısı, özellikle çok şubeli işletmeler,
                endüstriyel tesisler, oteller, AVM’ler ve kurumsal alanlar için
                güçlü bir takip kolaylığı sağlar.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {digitalItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 border border-gray-200 bg-white p-5 shadow-sm"
              >
                <QrCode size={22} className="mt-0.5 shrink-0 text-[#d71920]" />
                <p className="text-sm font-bold leading-7 text-gray-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CLOSING */}
      <section className="bg-[#06132d] py-24 text-white">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="relative overflow-hidden bg-white p-8 text-[#101827] md:p-12">
            <div className="absolute right-[-40px] top-[-30px] text-[140px] font-black uppercase leading-none text-[#0b2c5f]/5">
              AFS
            </div>

            <div className="relative max-w-5xl">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                Yangın Güvenlik Uzmanlığı ve İtfaiye Ruhsat Danışmanı
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
                İşletmenizi zaman kaybetmeden, ceza veya mühürleme riski
                yaşamadan yarına taşıyın.
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600">
                Endüstriyel tesisler, oteller, AVM’ler ve sosyal donatı alanları
                için yangın güvenliği şansa bırakılamaz. AFS Yangın olarak;
                İzmir başta olmak üzere tüm Ege Bölgesi’nde İtfaiye Uygunluk
                Raporu alımından mekanik projelendirmeye, TÜRKAK onaylı
                periyodik kontrolden kurumsal yangın eğitimlerine kadar tüm
                süreçlerinizi A’dan Z’ye tek çatı altında yönetiyoruz.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/teklif-al"
                  className="group inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0b2c5f]"
                >
                  Hemen Teklif Alın
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/bize-ulasin"
                  className="inline-flex w-fit items-center border-2 border-[#0b2c5f] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#0b2c5f] transition hover:bg-[#0b2c5f] hover:text-white"
                >
                  Uzmana Danışın
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="relative overflow-hidden bg-[#06132d] p-8 text-white md:p-14">
            <img
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1600&auto=format&fit=crop"
              alt="AFS Yangın Hizmetleri"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98),rgba(5,18,48,0.78),rgba(215,25,32,0.28))]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                  AFS Hizmetleri
                </p>

                <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase leading-tight md:text-5xl">
                  Yangın güvenliği sürecinizi tek muhatapla yönetin.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                  Danışmanlık, projelendirme, bakım, servis ve periyodik kontrol
                  ihtiyaçlarınız için AFS ekibiyle iletişime geçin.
                </p>
              </div>

              <Link
                href="/bize-ulasin"
                className="group inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
              >
                Hizmetler İçin Bize Ulaşın
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