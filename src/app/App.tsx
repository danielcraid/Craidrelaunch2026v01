import { LanguageProvider } from "./components/LanguageContext";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { PhilosophySection } from "./components/PhilosophySection";
import { ServicesSection } from "./components/ServicesSection";
import { TeamSection } from "./components/TeamSection";
import { DoroSection } from "./components/DoroSection";
import { ReportSection } from "./components/ReportSection";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  return (
    <LanguageProvider>
      <div
        className="min-h-screen bg-background text-foreground"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <Navigation />
        <HeroSection />
        <PhilosophySection />
        <ServicesSection />
        <TeamSection />
        <DoroSection />
        <ReportSection />
        <FooterSection />
      </div>
    </LanguageProvider>
  );
}
