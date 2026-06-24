// components/home/AdvantagesSection.tsx

import { advantages } from "@/data/home";

export default function AdvantagesSection() {
  return (
    <section className="bg-[#0b1220] py-20 text-white">
      <div className="mx-auto max-w-[1500px] px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center border border-white/10 p-8 text-center transition hover:border-[#d71920]"
              >
                <Icon size={42} className="text-[#d71920]" />
                <h3 className="mt-5 text-lg font-black uppercase">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}