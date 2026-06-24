// components/home/JoinSection.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { joinCards } from "@/data/home";

export default function JoinSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1500px] px-6">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d71920]">
              AFS ile Büyüyün
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black uppercase text-[#101827] md:text-5xl">
              Bize Katılın, Tedarikçimiz Olun, İş Ortağımız Olun
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-gray-600">
            Franchise, tedarikçi ve kurumsal iş birliği başvurularınız için
            uygun formu seçerek süreci başlatabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {joinCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group border border-gray-200 bg-[#f8fafc] p-8 transition hover:-translate-y-2 hover:border-[#d71920] hover:bg-white hover:shadow-2xl"
            >
              <h3 className="text-2xl font-black uppercase text-[#101827]">
                {card.title}
              </h3>

              <p className="mt-4 min-h-[76px] text-sm leading-7 text-gray-600">
                {card.description}
              </p>

              <span className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase text-[#d71920]">
                Başvur
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}