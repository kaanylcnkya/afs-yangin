// components/home/JoinSection.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { joinCards } from "@/data/home";

export default function JoinSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-[1500px] px-6">
        <div className="mb-14 text-center">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d71920]">
            AFS ile Büyüyün
          </p>

          <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
            Bize Katılın, Tedarikçimiz Olun, İş Ortağımız Olun
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            Teklif, franchise, tedarikçi ve kariyer başvurularınız için ilgili
            alanı seçerek süreci kolayca başlatabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
          {joinCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative min-h-[360px] overflow-hidden bg-[#0b1220] shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Görsel */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,18,48,0.10)_0%,rgba(5,18,48,0.72)_55%,rgba(5,18,48,0.96)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(215,25,32,0.22),transparent_48%)]" />

              {/* Çapraz kurdele */}
              <div className="absolute -left-20 top-9 z-10 w-[270px] -rotate-45 bg-[#d71920] py-2.5 text-center shadow-xl">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-white">
                  {card.ribbon}
                </span>
              </div>

              {/* İçerik */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-7">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-white/65">
                  AFS Yangın
                </p>

                <h3 className="text-3xl font-black uppercase leading-tight text-white">
                  {card.title}
                </h3>

                <p className="mt-4 min-h-[76px] text-sm leading-7 text-white/76">
                  {card.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase text-white">
                  Başvur
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </div>

              {/* Alt çizgi */}
              <div className="absolute bottom-0 left-0 z-20 h-1 w-0 bg-[#d71920] transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}