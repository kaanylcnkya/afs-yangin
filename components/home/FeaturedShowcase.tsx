// components/home/FeaturedShowcase.tsx

export default function FeaturedShowcase() {
  return (
    <section className="bg-[#eef1f5] py-24">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#d71920]">
            AFS Yangın
          </p>

          <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#101827] md:text-5xl">
            Profesyonel Yangın Güvenliği Çözümleri
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            İşletmeler, endüstriyel tesisler ve kurumsal yapılar için yangın
            söndürme cihazları, bakım süreçleri, sistem çözümleri ve güvenlik
            hizmetlerinde uçtan uca destek sağlıyoruz.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="bg-white p-5 shadow">
              <p className="text-xs font-black uppercase tracking-wide text-gray-500">
                Güvence
              </p>
              <p className="mt-1 text-lg font-black uppercase text-[#d71920]">
                7/24 Destek
              </p>
            </div>

            <div className="bg-white p-5 shadow">
              <p className="text-xs font-black uppercase tracking-wide text-gray-500">
                Hizmet
              </p>
              <p className="mt-1 text-lg font-black uppercase text-[#0b2c5f]">
                Bakım
              </p>
            </div>

            <div className="bg-white p-5 shadow">
              <p className="text-xs font-black uppercase tracking-wide text-gray-500">
                Sistem
              </p>
              <p className="mt-1 text-lg font-black uppercase text-[#101827]">
                Uçtan Uca
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-[520px] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1600&auto=format&fit=crop"
              alt="AFS Yangın çözümleri"
              className="h-full w-full scale-105 object-cover"
            />

            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,20,45,0.9),rgba(11,44,95,0.72),rgba(215,25,32,0.58))]" />

            <div className="absolute left-6 top-6 bg-white/95 px-5 py-4 shadow-xl backdrop-blur">
              <p className="text-[11px] font-black uppercase tracking-wide text-gray-500">
                Hizmet
              </p>
              <p className="mt-1 text-sm font-black uppercase text-[#0b2c5f]">
                Kurulum & Bakım
              </p>
            </div>

            <div className="absolute right-6 top-6 bg-[#d71920] px-5 py-4 text-white shadow-xl">
              <p className="text-[11px] font-black uppercase tracking-wide text-white/70">
                Destek
              </p>
              <p className="mt-1 text-sm font-black uppercase">
                Kurumsal Çözüm
              </p>
            </div>

            <div className="absolute inset-x-6 bottom-6 bg-black/40 p-8 text-white backdrop-blur-sm">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-white/75">
                Güvenli Alanlar
              </p>

              <h3 className="max-w-lg text-3xl font-black uppercase leading-tight md:text-4xl">
                Tek Noktadan Çözüm
              </h3>

              <p className="mt-4 max-w-lg text-[15px] leading-7 text-white/85">
                Yangın güvenliği süreçlerinde cihaz, sistem, bakım ve eğitim
                hizmetlerini tek çatı altında planlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}