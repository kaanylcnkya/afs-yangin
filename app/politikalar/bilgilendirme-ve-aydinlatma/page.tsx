// app/politikalar/bilgilendirme-ve-aydinlatma/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const purposes = [
  "Size yönelik tekliflerin hazırlanması ve sunulan hizmet / ürün süreçlerinin yürütülmesi.",
  "Kariyer, tedarikçi ve franchise başvurularınızın değerlendirilmesi ve sizinle iletişime geçilmesi.",
  "Müşteri memnuniyetine yönelik geri bildirimlerin, anketlerin, şikayetlerin ve önerilerin değerlendirilmesi.",
  "Yasal yükümlülüklerimizin yerine getirilmesi.",
];

const rights = [
  "Kişisel verilerinizin işlenip işlenmediğini öğrenme.",
  "Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme.",
  "Kişisel verilerinizin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme.",
  "Eksik veya yanlış işlenmiş kişisel verilerinizin düzeltilmesini isteme.",
  "Kişisel verilerinizin silinmesini veya yok edilmesini talep etme.",
];

function List({ items, dark = false }: { items: string[]; dark?: boolean }) {
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

export default function KvkkInformationPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#06132d] pt-[82px] text-white lg:pt-32">
        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1800&auto=format&fit=crop"
          alt="AFS Bilgilendirme ve Aydınlatma"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98),rgba(5,18,48,0.85),rgba(215,25,32,0.28))]" />

        <div className="relative mx-auto max-w-[1500px] px-5 py-20 lg:px-6 lg:py-28">
          <div className="max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#d71920]">
              Politikalarımız
            </p>

            <h1 className="mt-5 text-[34px] font-black uppercase leading-[1.08] tracking-[-0.035em] sm:text-[42px] md:text-[58px]">
              KVKK ve aydınlatma metni
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca, web
              sitemizi ziyaretleriniz, doldurduğunuz iletişim formları,
              franchise ve kariyer başvurularınız kapsamında elde edilen
              kişisel verileriniz yasal çerçevede işlenmektedir.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-6">
          <div className="mb-10 border-l-4 border-[#d71920] bg-[#f4f6f8] p-7">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-gray-400">
              Veri Sorumlusu
            </p>

            <h2 className="mt-3 text-2xl font-black uppercase leading-tight text-[#101827]">
              AFS Yangın Mühendislik Hizmetleri Tic. San. A.Ş.
            </h2>

            <p className="mt-5 max-w-4xl text-base leading-8 text-gray-600">
              Kişisel verileriniz; ad-soyad, telefon, e-posta adresi, CV
              bilgileri ve başvuru formlarında tarafınızca paylaşılan bilgiler
              kapsamında, veri sorumlusu sıfatıyla şirketimiz tarafından yasal
              çerçevede işlenmektedir.
            </p>
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
                <List items={purposes} />
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
                hizmet alınan bilişim / altyapı tedarikçileri gibi istisnalar
                kapsamındaki işlemler yasal çerçevede yürütülür.
              </p>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-8 bg-[#f4f6f8] p-7 md:p-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="flex h-16 w-16 items-center justify-center bg-[#d71920] text-white">
                <UserCheck size={32} />
              </div>

              <p className="mt-6 text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
                KVKK Madde 11 Haklarınız
              </p>

              <h3 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827]">
                Kişisel veri sahibi olarak haklarınız.
              </h3>

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

            <List items={rights} />
          </div>
        </div>
      </section>

      <section className="bg-[#06132d] py-20 text-white">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-6">
          <div>
            <h2 className="text-3xl font-black uppercase">
              KVKK başvurularınız için bizimle iletişime geçin.
            </h2>
            <p className="mt-4 max-w-2xl text-white/65">
              Kişisel verilerinizle ilgili taleplerinizi veri sorumlusuna
              iletebilirsiniz.
            </p>
          </div>

          <Link
            href="/bize-ulasin"
            className="inline-flex w-fit items-center gap-3 bg-[#d71920] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-[#0b2c5f]"
          >
            Bize Ulaşın
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}