import { Nav } from "@/components/sections/Nav";
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
import { BookCallProvider } from "@/components/lead/BookCallContext";
import { BookCallModal } from "@/components/lead/BookCallModal";
import { ExitIntentPopup } from "@/components/lead/ExitIntentPopup";
import { AIChat } from "@/components/lead/AIChat";

export default function Home() {
  return (
    <BookCallProvider>
      <main className="relative w-full">
        <Nav />
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

      <BookCallModal />
      <ExitIntentPopup />
      <AIChat />
    </BookCallProvider>
  );
}
