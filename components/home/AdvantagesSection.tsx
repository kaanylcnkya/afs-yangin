// components/home/AdvantagesSection.tsx

import { advantages } from "@/data/home";

export default function AdvantagesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f6f8] py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gray-200" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gray-200" />

      <div className="mx-auto max-w-[1500px] px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-[#d71920]">
            Güçlü Altyapı
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.03em] text-[#101827] md:text-6xl">
            Neden AFS?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            Yangın güvenliği alanında işletmelerin ihtiyaç duyduğu kalite,
            üretim gücü, finansal sağlamlık ve güvenilir hizmet anlayışını tek
            çatı altında sunuyoruz.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden border border-gray-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#d71920] hover:shadow-2xl"
              >
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#d71920] transition-all duration-500 group-hover:w-full" />

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#eef1f5] text-[#d71920] transition duration-300 group-hover:bg-[#d71920] group-hover:text-white">
                  <Icon size={38} strokeWidth={2.2} />
                </div>

                <span className="mt-7 block text-xs font-black uppercase tracking-[0.28em] text-gray-400">
                  0{index + 1}
                </span>

                <h3 className="mt-3 text-2xl font-black uppercase text-[#101827]">
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
  );
}