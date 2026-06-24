// components/Header.tsx

import Link from "next/link";
import { Search, ChevronDown, Menu } from "lucide-react";
import { menuItems } from "@/data/menu";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto mt-5 w-full max-w-[1500px] px-6">
        <div className="grid h-[92px] w-full grid-cols-[220px_1fr_240px] items-center bg-white px-8 shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logos/afs.png"
              alt="AFS Yangın"
              className="h-[64px] w-[190px] object-contain object-left"
            />
          </Link>

          {/* Menü */}
          <nav className="hidden items-center justify-center gap-12 lg:flex">
            {" "}
            {menuItems.map((item) => (
              <div key={item.title} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 text-[15px] font-extrabold uppercase tracking-wide text-[#111827] transition hover:text-[#d71920]"
                >
                  {item.title}
                  {item.children && <ChevronDown size={15} strokeWidth={3} />}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-0 top-full min-w-[300px] translate-y-4 bg-white opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-6 group-hover:opacity-100">
                    <div className="border-t-4 border-[#d71920] py-3">
                      {item.children.map((child) => (
                        <div key={child.title} className="group/sub relative">
                          <Link
                            href={child.href}
                            className="flex items-center justify-between px-5 py-3 text-sm font-semibold text-[#1f2937] transition hover:bg-[#f8f8f8] hover:text-[#d71920]"
                          >
                            {child.title}
                            {child.children && (
                              <ChevronDown
                                size={14}
                                strokeWidth={3}
                                className="-rotate-90"
                              />
                            )}
                          </Link>

                          {child.children && (
                            <div className="invisible absolute left-full top-0 min-w-[300px] bg-white opacity-0 shadow-2xl transition-all duration-200 group-hover/sub:visible group-hover/sub:opacity-100">
                              <div className="border-l-4 border-[#0b2c5f] py-3">
                                {child.children.map((subChild) => (
                                  <Link
                                    key={subChild.title}
                                    href={subChild.href}
                                    className="block px-5 py-3 text-sm font-semibold text-[#1f2937] transition hover:bg-[#f8f8f8] hover:text-[#d71920]"
                                  >
                                    {subChild.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Sağ Alan */}
          <div className="hidden items-center justify-end gap-5 lg:flex">
            {" "}
            <button
              type="button"
              aria-label="Arama"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-[#111827] transition hover:border-[#d71920] hover:text-[#d71920]"
            >
              <Search size={21} strokeWidth={2.5} />
            </button>
            <Link
              href="/teklif-al"
              className="bg-[#d71920] px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#b9151b]"
            >
              Teklif Al
            </Link>
          </div>

          {/* Mobil Menü */}
          <button
            type="button"
            aria-label="Menüyü Aç"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-[#111827] lg:hidden"
          >
            <Menu size={24} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </header>
  );
}
