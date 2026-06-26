// components/Footer.tsx

import Link from "next/link";
import { ArrowRight, Globe, Mail, MapPin, Phone } from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

const footerLinks = [
  {
    title: "Çözümler",
    links: [
      { title: "YSC", href: "/ysc" },
      { title: "Hizmetler", href: "/hizmetler" },
      { title: "Sistemler", href: "/sistemler" },
      { title: "Ürünler", href: "/urunler" },
    ],
  },
  {
    title: "Kurumsal",
    links: [
      { title: "Hakkımızda", href: "/hakkimizda" },
      { title: "İş Birlikleri", href: "/is-birlikleri" },
      { title: "Kariyer", href: "/kariyer" },
      { title: "Tedarikçi Ol", href: "/tedarikci-ol" },
      { title: "Franchise Ol", href: "/franchise-ol" },
    ],
  },
  {
    title: "Kaynaklar",
    links: [
      { title: "Bize Ulaşın", href: "/bize-ulasin" },
      { title: "Politikalar", href: "/politikalar" },
      { title: "Yönetmelik ve Standart", href: "/yonetmelik-ve-standart" },
      { title: "Blog ve Faydalı Bilgiler", href: "/blog-ve-faydali-bilgiler" },
      { title: "Anketler", href: "/anketler" },
    ],
  },
  {
    title: "Başvuru",
    links: [
      { title: "Teklif Al", href: "/teklif-al" },
      { title: "Franchise Ol", href: "/franchise-ol" },
      { title: "Tedarikçi Ol", href: "/tedarikci-ol" },
      { title: "Kariyer Başvurusu", href: "/kariyer" },
      { title: "İş Birliği", href: "/is-birlikleri" },
    ],
  },
];

const socialLinks = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedinIn,
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/",
    icon: FaYoutube,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/",
    icon: FaFacebookF,
  },
];

const quickActions = [
  {
    title: "Teklif Al",
    href: "/teklif-al",
  },
  {
    title: "Franchise Ol",
    href: "/franchise-ol",
  },
  {
    title: "Tedarikçi Ol",
    href: "/tedarikci-ol",
  },
  {
    title: "Kariyer",
    href: "/kariyer",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#06132d] text-white">
      {/* Arka plan efektleri */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,25,32,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(29,117,188,0.14),transparent_32%)]" />

      <div className="relative mx-auto max-w-[1500px] px-6">
        {/* Ana Footer */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.05fr_2fr_0.9fr]">
          {/* Logo + açıklama + iletişim */}
          <div>
            <Link href="/" className="inline-flex bg-white px-5 py-4 shadow-xl">
              <img
                src="/logos/afs.png"
                alt="AFS Yangın"
                className="h-[64px] w-[190px] object-contain object-left"
              />
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/68">
              AFS Yangın; yangın söndürme cihazları, sistem çözümleri, bakım,
              kontrol ve kurumsal yangın güvenliği hizmetlerinde profesyonel
              çözümler sunar.
            </p>

            <div className="mt-7 space-y-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 text-[#d71920]" />
                <span>Telefon bilgisi eklenecek</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 text-[#d71920]" />
                <span>info@afs.com.tr</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-[#d71920]" />
                <span>Adres bilgisi eklenecek</span>
              </div>

              <div className="flex items-start gap-3">
                <Globe size={18} className="mt-0.5 text-[#d71920]" />
                <span>www.afs.com.tr</span>
              </div>
            </div>

            {/* Sosyal medya */}
            <div className="mt-8">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-white/45">
                Sosyal Medya
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.title}
                      className="flex h-11 w-11 items-center justify-center border border-white/15 bg-white/5 text-white/75 transition hover:border-[#d71920] hover:bg-[#d71920] hover:text-white"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Link grupları */}
          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="relative text-sm font-black uppercase tracking-[0.22em] text-white">
                  {group.title}
                  <span className="mt-4 block h-1 w-10 bg-[#d71920]" />
                </h3>

                <div className="mt-6 space-y-3">
                  {group.links.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="group flex items-center gap-2 text-sm font-semibold text-white/62 transition hover:text-white"
                    >
                      <span className="h-px w-0 bg-[#d71920] transition-all group-hover:w-4" />
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sağ başvuru kartı */}
          <div className="bg-white p-7 text-[#101827] shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d71920]">
              Başvuru Merkezi
            </p>

            <h3 className="mt-3 text-2xl font-black uppercase leading-tight">
              Size uygun alanı seçin.
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Teklif, franchise, tedarikçi ve kariyer başvurularınız için
              ilgili sayfaya hızlıca ulaşabilirsiniz.
            </p>

            <div className="mt-6 space-y-3">
              {quickActions.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-center justify-between border border-gray-200 px-4 py-3 text-sm font-black uppercase tracking-wide text-[#0b2c5f] transition hover:border-[#d71920] hover:bg-[#d71920] hover:text-white"
                >
                  {item.title}
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Alt bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-white/52 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} AFS Yangın. Tüm hakları saklıdır.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/politikalar/gizlilik"
              className="transition hover:text-white"
            >
              Gizlilik Politikası
            </Link>

            <Link
              href="/politikalar/kalite"
              className="transition hover:text-white"
            >
              Kalite Politikası
            </Link>

            <Link
              href="/politikalar/tarafsizlik"
              className="transition hover:text-white"
            >
              Tarafsızlık Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}