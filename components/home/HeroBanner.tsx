// components/home/HeroBanner.tsx

"use client";

import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const heroSlides = [
  {
    eyebrow: "Partner For Safety",
    title: "Yangın Güvenliğinde Bütün İhtiyaçlarınız İçin Tek Çözüm",
    description:
      "Yangın söndürme cihazları, sistem çözümleri, güvenlik hizmetleri ve eğitim süreçlerinde işletmenize özel profesyonel destek.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1800&auto=format&fit=crop",
    buttons: [
      { title: "Yangın Cihazları", href: "/ysc" },
      { title: "Sistemler", href: "/sistemler" },
      { title: "Teklif Al", href: "/teklif-al", primary: true },
    ],
  },
  {
    eyebrow: "AFS Yangın",
    title: "Kurumsal Alanlar İçin Profesyonel Güvenlik Altyapısı",
    description:
      "İşletmeler, fabrikalar, depolar ve ticari alanlar için bakım, kontrol ve yangın güvenliği süreçlerini tek çatı altında planlıyoruz.",
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1800&auto=format&fit=crop",
    buttons: [
      { title: "Hizmetler", href: "/hizmetler" },
      { title: "Kurumsal Bilgi", href: "/kurumsal" },
      { title: "Bize Ulaşın", href: "/bize-ulasin", primary: true },
    ],
  },
  {
    eyebrow: "Güvenli Alanlar",
    title: "Cihaz, Sistem, Bakım ve Eğitimde Uçtan Uca Çözüm",
    description:
      "Yangın söndürme cihazları, algılama sistemleri, periyodik bakım ve eğitim hizmetleriyle işletmenizin güvenlik ihtiyaçlarını karşılıyoruz.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1800&auto=format&fit=crop",
    buttons: [
      { title: "Ürünler", href: "/urunler" },
      { title: "Eğitimler", href: "/hizmetler" },
      { title: "Teklif Al", href: "/teklif-al", primary: true },
    ],
  },
];

export default function HeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const lockRef = useRef(false);

  const activeSlide = heroSlides[activeIndex];

  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      changeSlide("next");
    }, 7500);
  };

  const changeSlide = (direction: "next" | "prev" | number) => {
    if (lockRef.current) return;

    lockRef.current = true;
    setIsChanging(true);

    setActiveIndex((current) => {
      if (typeof direction === "number") {
        return direction;
      }

      if (direction === "next") {
        return current === heroSlides.length - 1 ? 0 : current + 1;
      }

      return current === 0 ? heroSlides.length - 1 : current - 1;
    });

    setTimeout(() => {
      setIsChanging(false);
      lockRef.current = false;
    }, 900);
  };

  const handleNext = () => {
    changeSlide("next");
    startAutoSlide();
  };

  const handlePrev = () => {
    changeSlide("prev");
    startAutoSlide();
  };

  const handleDotClick = (index: number) => {
    if (index === activeIndex) return;

    changeSlide(index);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#eef1f5] pt-[82px] lg:pt-32">
      <div className="bg-[#0b2c5f] text-white">
        <div className="mx-auto flex max-w-[1500px] items-center justify-center px-5 py-3 text-center text-[11px] font-black uppercase leading-5 tracking-wide sm:text-xs lg:px-6 lg:py-4 lg:text-sm">
          AFS Yangın ile işletmeniz için profesyonel yangın güvenliği çözümleri
          <ArrowRight size={16} className="ml-2 shrink-0 lg:size-[18px]" />
        </div>
      </div>

      <div className="relative min-h-[610px] overflow-hidden lg:min-h-[700px]">
        {heroSlides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={slide.title}
              className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
                isActive ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
            </div>
          );
        })}

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,48,0.98)_0%,rgba(8,25,60,0.94)_34%,rgba(8,25,60,0.66)_60%,rgba(215,25,32,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.12),transparent_28%)]" />

        <div className="relative mx-auto flex min-h-[610px] max-w-[1500px] items-center px-5 pb-16 pt-10 lg:min-h-[700px] lg:px-6 lg:pb-20 lg:pt-14">
          <div
            key={activeSlide.title}
            className={`max-w-4xl transition-all duration-700 ease-out ${
              isChanging
                ? "translate-y-2 opacity-90"
                : "translate-y-0 opacity-100"
            }`}
          >
            <div className="mb-6 flex items-center gap-3 lg:mb-8 lg:gap-4">
              <span className="h-24 w-1.5 bg-[#d71920] lg:h-32 lg:w-2" />
              <span className="h-16 w-1.5 bg-[#1d75bc] lg:h-24 lg:w-2" />
              <span className="h-10 w-1.5 bg-white/80 lg:h-14 lg:w-2" />
            </div>

            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-white/75 sm:text-sm lg:mb-5 lg:tracking-[0.35em]">
              {activeSlide.eyebrow}
            </p>

            <h1 className="max-w-4xl text-[34px] font-black uppercase leading-[1.08] tracking-[-0.035em] text-white sm:text-[42px] md:text-[56px] md:leading-[1.1] xl:text-[72px] xl:leading-[1.1]">
              {activeSlide.title}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/82 sm:text-base lg:mt-7 lg:text-lg lg:leading-8">
              {activeSlide.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-10">
              {activeSlide.buttons.map((button) => (
                <Link
                  key={button.title}
                  href={button.href}
                  className={
                    button.primary
                      ? "group inline-flex items-center justify-center gap-2 bg-[#d71920] px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#b9151b] sm:justify-start"
                      : "group inline-flex items-center justify-center gap-2 bg-white px-6 py-4 text-sm font-black uppercase tracking-wide text-[#0b2c5f] transition hover:bg-[#0b2c5f] hover:text-white sm:justify-start"
                  }
                >
                  {button.title}
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handlePrev}
          aria-label="Önceki banner"
          className="absolute left-8 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-[#0b2c5f] lg:flex"
        >
          <ChevronLeft size={26} />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Sonraki banner"
          className="absolute right-8 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-[#0b2c5f] lg:flex"
        >
          <ChevronRight size={26} />
        </button>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3 lg:bottom-10">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => handleDotClick(index)}
              aria-label={`${index + 1}. banner`}
              className={`h-2.5 transition-all duration-500 ${
                index === activeIndex
                  ? "w-12 bg-[#d71920]"
                  : "w-8 bg-white/55 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}