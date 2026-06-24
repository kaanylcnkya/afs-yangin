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
        title: "YSC",
        subtitle: "Yangın Söndürme Cihazları",
        description:
            "İşletmenize uygun yangın söndürme cihazları, dolum, bakım ve kontrol çözümleri.",
        icon: Flame,
        href: "/ysc",
        ribbon: "YSC",
        image:
            "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=900&auto=format&fit=crop",
    },
    {
        title: "Hizmet",
        subtitle: "Yangın Güvenlik Hizmetleri",
        description:
            "Bakım, kontrol, danışmanlık ve kurumsal yangın güvenliği süreçlerinde profesyonel hizmet.",
        icon: Bell,
        href: "/hizmetler",
        ribbon: "Hizmet",
        image:
            "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=900&auto=format&fit=crop",
    },
    {
        title: "Sistem",
        subtitle: "Yangın Söndürme Sistemleri",
        description:
            "Endüstriyel ve ticari alanlar için yangın algılama, alarm ve söndürme sistemleri.",
        icon: ShieldCheck,
        href: "/sistemler",
        ribbon: "Sistem",
        image:
            "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=900&auto=format&fit=crop",
    },
    {
        title: "Ürün",
        subtitle: "Yangın Güvenliği Ürünleri",
        description:
            "Yangın güvenliği ekipmanları, yardımcı ürünler ve işletmelere özel ürün çözümleri.",
        icon: GraduationCap,
        href: "/urunler",
        ribbon: "Ürün",
        image:
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=900&auto=format&fit=crop",
    },
];

export const advantages = [
    {
        title: "Kalite",
        description: "Standartlara uygun, güvenilir ve sürdürülebilir hizmet anlayışı.",
        icon: BadgeCheck,
    },
    {
        title: "Üretim",
        description: "Yangın güvenliği ihtiyaçlarına yönelik güçlü ürün ve çözüm altyapısı.",
        icon: Factory,
    },
    {
        title: "Finansal Güç",
        description: "Kurumsal projelerde sürdürülebilir, güçlü ve güven veren iş modeli.",
        icon: Landmark,
    },
    {
        title: "Güven",
        description: "İşletmeler için uzun vadeli, çözüm odaklı ve profesyonel destek.",
        icon: ShieldCheck,
    },
];

export const joinCards = [
    {
        title: "Teklif Al",
        description: "İhtiyacınıza uygun yangın güvenliği çözümü için hızlı teklif talebi oluşturun.",
        href: "/teklif-al",
        ribbon: "Teklif Al",
        image:
            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900&auto=format&fit=crop",
    },
    {
        title: "Franchise Ol",
        description: "AFS markasıyla bölgenizde güçlü ve sürdürülebilir bir iş modeli kurun.",
        href: "/franchise-ol",
        ribbon: "Franchise Ol",
        image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop",
    },
    {
        title: "Tedarikçi Ol",
        description: "AFS tedarik ağına katılarak kurumsal iş birliği sürecinizi başlatın.",
        href: "/tedarikci-ol",
        ribbon: "Tedarikçi Ol",
        image:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop",
    },
    {
        title: "Kariyer",
        description: "AFS ekibine katılmak ve kariyer fırsatlarını değerlendirmek için başvurun.",
        href: "/kariyer",
        ribbon: "Kariyer",
        image:
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=900&auto=format&fit=crop",
    },
];