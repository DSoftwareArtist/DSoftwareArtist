import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "hero", label: "Home" },
  // { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "toolset", label: "Toolset" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "rates", label: "Rates" },
  // { id: "contact", label: "Contact" },
];

const NavigationBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.getBoundingClientRect().top <= 200) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-0.5">
        <div className="h-full bg-gradient-to-r from-primary via-neon-green to-neon-gold transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Nav */}
      <motion.nav
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        className={`fixed top-0.5 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : ""}`}
      >
        <div className="container px-4 flex items-center justify-between h-14">
          <button onClick={() => scrollTo("hero")} className="font-heading text-sm font-bold text-primary text-glow-blue">
            RS<span className="text-neon-green">.</span>DEV
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-accent tracking-wider transition-all ${activeSection === item.id ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground p-2">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <div className="container px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-accent tracking-wider text-left transition-all ${activeSection === item.id ? "text-primary bg-primary/10" : "text-muted-foreground"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default NavigationBar;
