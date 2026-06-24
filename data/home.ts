// data/home.ts

import {
  Bell,
  BadgeCheck,
  Flame,
  GraduationCap,
  ShieldCheck,
  Factory,
  Landmark,
} from "lucide-react";

export const heroButtons = [
  {
    title: "Yangın Cihazları",
    href: "/ysc",
  },
  {
    title: "Hizmetler",
    href: "/hizmetler",
  },
  {
    title: "Sistemler",
    href: "/sistemler",
  },
  {
    title: "Ürünler",
    href: "/urunler",
  },
];

export const services = [
  {
    title: "Yangın Söndürme Cihazları",
    description: "İşletmeniz için uygun yangın söndürme cihazı çözümleri.",
    icon: Flame,
    href: "/ysc",
  },
  {
    title: "Alarm Sistemleri",
    description: "Yangın algılama ve alarm sistemleriyle erken uyarı güvenliği.",
    icon: Bell,
    href: "/sistemler",
  },
  {
    title: "Yangın Söndürme Sistemleri",
    description: "Endüstriyel ve kurumsal alanlar için sistem çözümleri.",
    icon: ShieldCheck,
    href: "/sistemler",
  },
  {
    title: "Eğitim Hizmetleri",
    description: "Personeliniz için yangın güvenliği ve acil durum eğitimleri.",
    icon: GraduationCap,
    href: "/hizmetler",
  },
];

export const advantages = [
  {
    title: "Kalite",
    icon: BadgeCheck,
  },
  {
    title: "Üretim",
    icon: Factory,
  },
  {
    title: "Finansal Güç",
    icon: Landmark,
  },
  {
    title: "Güven",
    icon: ShieldCheck,
  },
];

export const joinCards = [
  {
    title: "Teklif Al",
    description: "İhtiyacınıza uygun çözüm için hızlı teklif talebi oluşturun.",
    href: "/teklif-al",
  },
  {
    title: "Franchise Ol",
    description: "AFS markasıyla bölgenizde güçlü bir iş modeli kurun.",
    href: "/franchise-ol",
  },
  {
    title: "Tedarikçi Ol",
    description: "AFS tedarik ağına katılarak iş birliği sürecinizi başlatın.",
    href: "/tedarikci-ol",
  },
  {
    title: "Partner Ol",
    description: "Kurumsal iş birlikleri için bizimle iletişime geçin.",
    href: "/is-birlikleri",
  },
];