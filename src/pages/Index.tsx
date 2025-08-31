import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-4 bg-muted/30 border-t border-accent/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Jesus Hernandez.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
