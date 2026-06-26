// components/PageLoader.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const pathname = usePathname();

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const minVisibleRef = useRef<NodeJS.Timeout | null>(null);

  const startLoader = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (minVisibleRef.current) clearTimeout(minVisibleRef.current);

    setLoading(true);
    setProgress(12);

    intervalRef.current = setInterval(() => {
      setProgress((current) => {
        if (current >= 86) return current;
        return current + Math.floor(Math.random() * 7) + 3;
      });
    }, 180);
  };

  const finishLoader = () => {
    minVisibleRef.current = setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);

      setProgress(100);

      timeoutRef.current = setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 520);
    }, 260);
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      const targetAttr = anchor.getAttribute("target");

      if (!href) return;
      if (targetAttr === "_blank") return;
      if (href.startsWith("#")) return;
      if (href.startsWith("mailto:")) return;
      if (href.startsWith("tel:")) return;
      if (href.startsWith("https://")) return;
      if (href.startsWith("http://")) return;

      const currentPath = window.location.pathname;
      const nextPath = href.split("?")[0];

      if (currentPath === nextPath) return;

      startLoader();
    };

    const handleManualRouteStart = () => {
      startLoader();
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("afs-route-loading", handleManualRouteStart);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("afs-route-loading", handleManualRouteStart);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (minVisibleRef.current) clearTimeout(minVisibleRef.current);
    };
  }, []);

  useEffect(() => {
    finishLoader();
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <div className="fixed left-0 top-0 h-[3px] w-full bg-white/20">
        <div
          className="h-full bg-[linear-gradient(90deg,#d71920,#ff8a8a,#0b2c5f)] shadow-[0_0_18px_rgba(215,25,32,0.42)] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="absolute inset-0 bg-white/28 backdrop-blur-[3px]" />

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <div className="relative flex h-[126px] w-[126px] items-center justify-center">
          <div className="absolute inset-0 animate-[loaderFrameSpin_2.8s_linear_infinite] rounded-[34px] bg-[conic-gradient(from_0deg,rgba(215,25,32,0),rgba(215,25,32,0.95),rgba(255,255,255,0.85),rgba(11,44,95,0.95),rgba(215,25,32,0))] p-[2px] shadow-[0_22px_70px_rgba(6,19,45,0.18)]">
            <div className="h-full w-full rounded-[32px] bg-white/88 backdrop-blur-xl" />
          </div>

          <div className="relative flex h-[104px] w-[104px] items-center justify-center rounded-[28px] bg-white/95 shadow-[0_14px_35px_rgba(6,19,45,0.12)] ring-1 ring-black/5">
            <div className="absolute inset-3 animate-[loaderSoftPulse_1.8s_ease-in-out_infinite] rounded-[22px] bg-[linear-gradient(135deg,rgba(215,25,32,0.09),rgba(11,44,95,0.08))]" />

            <img
              src="/logos/afs.png"
              alt="AFS Yangın"
              className="relative h-[58px] w-[74px] object-contain"
            />
          </div>

          <span className="absolute -bottom-2 left-1/2 h-2 w-16 -translate-x-1/2 rounded-full bg-[#d71920]/45 blur-[3px]" />
        </div>

        <div className="mt-7 flex items-center gap-2">
          <span className="h-2 w-2 animate-[loaderDot_1.2s_ease-in-out_infinite] rounded-full bg-[#d71920]" />
          <span className="h-2 w-2 animate-[loaderDot_1.2s_ease-in-out_0.15s_infinite] rounded-full bg-[#d71920]/70" />
          <span className="h-2 w-2 animate-[loaderDot_1.2s_ease-in-out_0.3s_infinite] rounded-full bg-[#0b2c5f]/80" />
        </div>

        <p className="mt-4 text-center text-[11px] font-black uppercase tracking-[0.32em] text-[#06132d]/70">
          Sayfa hazırlanıyor
        </p>
      </div>
    </div>
  );
}