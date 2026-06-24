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
      { title: "Hakkımızda", href: "/hakkimizda" },
      { title: "İş Birlikleri", href: "/is-birlikleri" },
      { title: "Kariyer", href: "/kariyer" },
      { title: "Tedarikçi Ol", href: "/tedarikci-ol" },
      { title: "Franchise", href: "/franchise" },
    ],
  },
  {
    title: "Kurumsal",
    href: "/kurumsal",
    children: [
      { title: "Bize Ulaş", href: "/bize-ulas" },
      {
        title: "Politikalar",
        href: "/politikalar",
        children: [
          {
            title: "Bilgilendirme ve Aydınlatma",
            href: "/politikalar/bilgilendirme-aydinlatma",
          },
          { title: "Gizlilik", href: "/politikalar/gizlilik" },
          { title: "Kalite", href: "/politikalar/kalite" },
          { title: "Tarafsızlık", href: "/politikalar/tarafsizlik" },
        ],
      },
      { title: "Yönetmelik ve Standart", href: "/yonetmelik-ve-standart" },
      { title: "Blog ve Faydalı Bilgiler", href: "/blog" },
      {
        title: "Müşteri Memnuniyet Anketi",
        href: "/musteri-memnuniyet-anketi",
      },
      {
        title: "Teknik İhtiyaç ve Öneri",
        href: "/teknik-ihtiyac-ve-oneri",
      },
    ],
  },
  {
    title: "Kaynaklar",
    href: "/kaynaklar",
    children: [
      { title: "Kataloglar", href: "/kaynaklar/kataloglar" },
      { title: "Belgeler", href: "/kaynaklar/belgeler" },
      { title: "Sertifikalar", href: "/kaynaklar/sertifikalar" },
    ],
  },
];