import { Hero } from "@/components/sections/Hero";
import { ScrollJourney } from "@/components/sections/ScrollJourney";
import { BooksSection } from "@/components/sections/BooksSection";
import { CompaniesSection } from "@/components/sections/CompaniesSection";
import { SitesSection } from "@/components/sections/SitesSection";
import { MusicSection } from "@/components/sections/MusicSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main id="main-content" className="relative w-full">
      <Hero />
      <ScrollJourney />
      <BooksSection />
      <CompaniesSection />
      <SitesSection />
      <MusicSection />
      <AboutSection />
      <VisionSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
