// app/page.tsx

import HeroBanner from "@/components/home/HeroBanner";
import FeaturedShowcase from "@/components/home/FeaturedShowcase";
import ServicesSection from "@/components/home/ServicesSection";
import AdvantagesSection from "@/components/home/AdvantagesSection";
import JoinSection from "@/components/home/JoinSection";
export default function Home() {
  return (
    <main className="bg-white">
      <HeroBanner />
      <ServicesSection />
      <FeaturedShowcase />
      <AdvantagesSection />
      <JoinSection />
    </main>
  );
}