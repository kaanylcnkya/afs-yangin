// components/Header.tsx

"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  FileText,
} from "lucide-react";
import { menuItems } from "@/data/menu";

type SearchItem = {
  title: string;
  href: string;
  category: string;
  keywords: string;
};

const extraSearchItems: SearchItem[] = [
  {
    title: "Teklif Al",
    href: "/teklif-al",
    category: "Başvuru",
    keywords: "teklif fiyat yangın güvenliği teklif al fiyatlandırma",
  },
  {
    title: "Bize Ulaşın",
    href: "/bize-ulasin",
    category: "İletişim",
    keywords: "iletişim telefon mail adres whatsapp bize ulaşın",
  },
  {
    title: "Blog ve Faydalı Bilgiler",
    href: "/blog-ve-faydali-bilgiler",
    category: "Kaynaklar",
    keywords: "blog faydalı bilgiler yangın güvenliği rehber yazılar",
  },
  {
    title: "Kariyer",
    href: "/kariyer",
    category: "Kurumsal",
    keywords: "kariyer iş başvurusu personel çalışma iş ilanı",
  },
  {
    title: "Franchise Ol",
    href: "/franchise-ol",
    category: "Başvuru",
    keywords: "franchise bayilik iş ortaklığı başvuru",
  },
  {
    title: "Tedarikçi Ol",
    href: "/tedarikci-ol",
    category: "Başvuru",
    keywords: "tedarikçi ürün ekipman iş birliği başvuru",
  },
  {
    title: "İş Birlikleri",
    href: "/is-birlikleri",
    category: "Kurumsal",
    keywords: "iş birliği partnerlik franchise tedarikçi ortaklık",
  },
  {
    title: "Hakkımızda",
    href: "/hakkimizda",
    category: "Kurumsal",
    keywords: "hakkımızda firma kurumsal afs yangın",
  },
];

function flattenMenuItems() {
  const result: SearchItem[] = [];

  menuItems.forEach((item) => {
    result.push({
      title: item.title,
      href: item.href,
      category: "Menü",
      keywords: `${item.title} ${item.href}`,
    });

    item.children?.forEach((child) => {
      result.push({
        title: child.title,
        href: child.href,
        category: item.title,
        keywords: `${item.title} ${child.title} ${child.href}`,
      });

      child.children?.forEach((subChild) => {
        result.push({
          title: subChild.title,
          href: subChild.href,
          category: child.title,
          keywords: `${item.title} ${child.title} ${subChild.title} ${subChild.href}`,
        });
      });
    });
  });

  return result;
}

export default function Header() {
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const searchItems = useMemo(() => {
    const merged = [...flattenMenuItems(), ...extraSearchItems];

    return merged.filter(
      (item, index, self) =>
        index === self.findIndex((current) => current.href === item.href)
    );
  }, []);

  const filteredResults = useMemo(() => {
    const query = searchText.trim().toLocaleLowerCase("tr-TR");

    if (!query) {
      return searchItems.slice(0, 8);
    }

    return searchItems
      .filter((item) => {
        const searchableText = `${item.title} ${item.category} ${item.keywords}`
          .toLocaleLowerCase("tr-TR")
          .replaceAll("ı", "i");

        const cleanQuery = query.replaceAll("ı", "i");

        return searchableText.includes(cleanQuery);
      })
      .slice(0, 10);
  }, [searchText, searchItems]);

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchText("");
  };

  const goToResult = (href: string) => {
    window.dispatchEvent(new Event("afs-route-loading"));

    closeSearch();
    setMobileOpen(false);

    setTimeout(() => {
      router.push(href);
    }, 120);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 40);

      if (currentScrollY > 220 && currentScrollY > lastScrollY) {
        setHidden(true);
        setMobileOpen(false);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSearch();
      }

      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = "hidden";
    } else if (!mobileOpen) {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen, mobileOpen]);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div
          className={`mx-auto w-full transition-all duration-500 ${
            scrolled
              ? "mt-0 max-w-full px-0"
              : "mt-0 max-w-[1500px] px-0 lg:mt-5 lg:px-6"
          }`}
        >
          <div
            className={`grid w-full grid-cols-[1fr_auto] items-center bg-white shadow-[0_12px_30px_rgba(0,0,0,0.14)] transition-all duration-500 lg:grid-cols-[220px_1fr_240px] ${
              scrolled
                ? "h-[72px] px-5 lg:h-[78px] lg:grid-cols-[190px_1fr_220px] lg:px-7"
                : "h-[82px] px-5 lg:h-[92px] lg:px-8"
            }`}
          >
            <Link href="/" className="flex items-center">
              <img
                src="/logos/afs.png"
                alt="AFS Yangın"
                className={`object-contain object-left transition-all duration-500 ${
                  scrolled
                    ? "h-[48px] w-[145px] lg:h-[54px] lg:w-[170px]"
                    : "h-[52px] w-[150px] lg:h-[64px] lg:w-[190px]"
                }`}
              />
            </Link>

            <nav className="hidden items-center justify-center gap-12 lg:flex">
              {menuItems.map((item) => (
                <div key={item.title} className="group relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 text-[15px] font-extrabold uppercase tracking-wide text-[#111827] transition hover:text-[#d71920]"
                  >
                    {item.title}
                    {item.children && (
                      <ChevronDown size={15} strokeWidth={3} />
                    )}
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

            <div className="hidden items-center justify-end gap-5 lg:flex">
              <button
                type="button"
                aria-label="Arama"
                onClick={() => setSearchOpen(true)}
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

            <button
              type="button"
              aria-label="Menüyü Aç"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-[#111827] lg:hidden"
            >
              {mobileOpen ? (
                <X size={24} strokeWidth={2.5} />
              ) : (
                <Menu size={24} strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobil arka plan */}
      <div
        className={`fixed inset-0 z-40 bg-[#06132d]/70 backdrop-blur-sm transition lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobil Menü */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[86%] max-w-[390px] bg-white shadow-2xl transition-transform duration-500 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-[88px] items-center justify-between border-b border-gray-100 px-6">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <img
              src="/logos/afs.png"
              alt="AFS Yangın"
              className="h-[58px] w-[175px] object-contain object-left"
            />
          </Link>

          <button
            type="button"
            aria-label="Menüyü Kapat"
            onClick={() => setMobileOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-[#111827]"
          >
            <X size={24} strokeWidth={2.5} />
          </button>
        </div>

        <div className="h-[calc(100%-88px)] overflow-y-auto px-6 py-6">
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              setSearchOpen(true);
            }}
            className="mb-5 flex w-full items-center justify-between bg-[#f4f6f8] px-5 py-4 text-left text-sm font-black uppercase tracking-wide text-[#0b2c5f]"
          >
            <span className="flex items-center gap-3">
              <Search size={18} />
              Site İçinde Ara
            </span>
            <ArrowRight size={16} />
          </button>

          <div className="space-y-3">
            {menuItems.map((item) => {
              const isOpen = openMobileMenu === item.title;

              return (
                <div key={item.title} className="border-b border-gray-100 pb-3">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileMenu(isOpen ? null : item.title)
                    }
                    className="flex w-full items-center justify-between py-3 text-left text-base font-black uppercase text-[#101827]"
                  >
                    {item.title}
                    {item.children && (
                      <ChevronDown
                        size={18}
                        className={`transition ${isOpen ? "rotate-180" : ""}`}
                      />
                    )}
                  </button>

                  {item.children && (
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-1 pb-3">
                          {item.children.map((child) => (
                            <div key={child.title}>
                              <Link
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 text-sm font-bold text-gray-600 transition hover:text-[#d71920]"
                              >
                                {child.title}
                              </Link>

                              {child.children && (
                                <div className="ml-4 border-l border-gray-100 pl-4">
                                  {child.children.map((subChild) => (
                                    <Link
                                      key={subChild.title}
                                      href={subChild.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block py-2 text-sm font-semibold text-gray-500 transition hover:text-[#d71920]"
                                    >
                                      {subChild.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-3">
            <Link
              href="/teklif-al"
              onClick={() => setMobileOpen(false)}
              className="bg-[#d71920] px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-white"
            >
              Teklif Al
            </Link>

            <Link
              href="/bize-ulasin"
              onClick={() => setMobileOpen(false)}
              className="border border-[#0b2c5f] px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-[#0b2c5f]"
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </aside>

      {/* Search Modal */}
      <div
        className={`fixed inset-0 z-[9998] transition ${
          searchOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#06132d]/75 backdrop-blur-md"
          onClick={closeSearch}
        />

        <div className="absolute left-1/2 top-24 w-[calc(100%-32px)] max-w-3xl -translate-x-1/2 overflow-hidden bg-white shadow-[0_28px_90px_rgba(0,0,0,0.28)] lg:top-36">
          <div className="flex items-center gap-4 border-b border-gray-100 px-5 py-4">
            <Search size={24} className="shrink-0 text-[#d71920]" />

            <input
              autoFocus
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && filteredResults[0]) {
                  goToResult(filteredResults[0].href);
                }
              }}
              placeholder="Ne aramak istiyorsunuz?"
              className="h-12 flex-1 bg-transparent text-base font-bold text-[#101827] outline-none placeholder:text-gray-400"
            />

            <button
              type="button"
              aria-label="Aramayı Kapat"
              onClick={closeSearch}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-[#101827] transition hover:border-[#d71920] hover:text-[#d71920]"
            >
              <X size={21} />
            </button>
          </div>

          <div className="max-h-[520px] overflow-y-auto p-5">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d71920]">
                Arama Sonuçları
              </p>

              <p className="hidden text-xs font-bold text-gray-400 sm:block">
                Kısayol: Ctrl + K
              </p>
            </div>

            {filteredResults.length > 0 ? (
              <div className="space-y-3">
                {filteredResults.map((item) => (
                  <button
                    key={`${item.href}-${item.title}`}
                    type="button"
                    onClick={() => goToResult(item.href)}
                    className="group flex w-full items-center justify-between gap-4 border border-gray-100 bg-[#f8fafc] p-4 text-left transition hover:border-[#d71920] hover:bg-white hover:shadow-lg"
                  >
                    <span className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-[#d71920] shadow-sm group-hover:bg-[#d71920] group-hover:text-white">
                        <FileText size={20} />
                      </span>

                      <span>
                        <span className="block text-sm font-black uppercase text-[#101827]">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-xs font-bold uppercase tracking-wide text-gray-400">
                          {item.category}
                        </span>
                      </span>
                    </span>

                    <ArrowRight
                      size={18}
                      className="shrink-0 text-[#0b2c5f] transition group-hover:translate-x-1 group-hover:text-[#d71920]"
                    />
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex min-h-[220px] flex-col items-center justify-center bg-[#f8fafc] p-8 text-center">
                <Search size={38} className="text-[#d71920]" />

                <h3 className="mt-5 text-xl font-black uppercase text-[#101827]">
                  Sonuç bulunamadı.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-gray-600">
                  Aradığınız içerik bulunamadı. Farklı bir kelime deneyebilir
                  veya iletişim sayfasından bize ulaşabilirsiniz.
                </p>

                <button
                  type="button"
                  onClick={() => goToResult("/bize-ulasin")}
                  className="mt-6 bg-[#d71920] px-6 py-3 text-sm font-black uppercase tracking-wide text-white"
                >
                  Bize Ulaşın
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}