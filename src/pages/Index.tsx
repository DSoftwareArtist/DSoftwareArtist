import NavigationBar from "@/components/NavigationBar";
import HeroSection from "@/components/HeroSection";
// import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ToolsetSection from "@/components/ToolsetSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import RatesSection from "@/components/RatesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <HeroSection />
      {/* <EducationSection /> */}
      <SkillsSection />
      <ToolsetSection />
      <ExperienceSection />
      <ProjectsSection />
      <TestimonialsSection />
      <RatesSection />
      {/* <ContactSection /> */}
      <footer className="py-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground font-accent tracking-wider">
          © 2026 Reamon Sumapig. All missions reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
