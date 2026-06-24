// components/home/ServicesSection.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/home";

export default function ServicesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1500px] px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d71920]">
            Hizmet Alanlarımız
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase text-[#101827] md:text-5xl">
            Yangın Güvenliği İçin Bütün İhtiyaçlarınız Karşılanır
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group min-h-[310px] border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-[#d71920] hover:shadow-2xl"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center bg-[#f2f4f7] text-[#d71920] transition group-hover:bg-[#d71920] group-hover:text-white">
                  <Icon size={32} strokeWidth={2.2} />
                </div>

                <h3 className="text-xl font-black uppercase leading-tight text-[#101827]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {service.description}
                </p>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase text-[#0b2c5f]">
                  İncele
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}