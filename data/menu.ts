// data/menu.ts

export type MenuItem = {
  title: string;
  href: string;
  children?: MenuItem[];
};

export const menuItems: MenuItem[] = [
  {
    title: "Çözümler",
    href: "/cozumler",
    children: [
      { title: "YSC", href: "/ysc" },
      { title: "Hizmetler", href: "/hizmetler" },
      { title: "Sistemler", href: "/sistemler" },
      { title: "Ürünler", href: "/urunler" },
    ],
  },
  {
    title: "Kurumsal",
    href: "/kurumsal",
    children: [
      { title: "Hakkımızda", href: "/hakkimizda" },
      { title: "İş Birlikleri", href: "/is-birlikleri" },
      { title: "Kariyer", href: "/kariyer" },
      { title: "Tedarikçi Ol", href: "/tedarikci-ol" },
      { title: "Franchise Ol", href: "/franchise-ol" },
    ],
  },
  {
    title: "Kaynaklar",
    href: "/kaynaklar",
    children: [
      { title: "Bize Ulaşın", href: "/bize-ulasin" },
      {
        title: "Politikalar",
        href: "/politikalar",
        children: [
          {
            title: "Bilgilendirme ve Aydınlatma",
            href: "/politikalar/bilgilendirme-ve-aydinlatma",
          },
          { title: "Gizlilik", href: "/politikalar/gizlilik" },
          { title: "Kalite", href: "/politikalar/kalite" },
          { title: "Tarafsızlık", href: "/politikalar/tarafsizlik" },
        ],
      },
      {
        title: "Yönetmelik ve Standart",
        href: "/yonetmelik-ve-standart",
      },
      {
        title: "Blog ve Faydalı Bilgiler",
        href: "/blog-ve-faydali-bilgiler",
      },
      { title: "Anketler", href: "/anketler" },
    ],
  },
];