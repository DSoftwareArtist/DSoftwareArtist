import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Map } from "lucide-react";
import FloatingParticles from "./FloatingParticles";

import { scrollTo, tagline} from "@/lib/constants";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= tagline.length) {
        setDisplayedText(tagline.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <FloatingParticles />
      
      {/* Grid animation overlay */}
      <div className="absolute inset-0 animate-grid-move opacity-30" style={{
        backgroundImage: "linear-gradient(hsl(195 100% 50% / 0.04) 1px, transparent 1px), linear-gradient(90deg, hsl(195 100% 50% / 0.04) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary font-accent text-sm tracking-wider mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            AVAILABLE FOR HIRE
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold mb-6 text-glow-blue text-foreground"
          >
            Reamon <span className="text-primary">Sumapig</span>
          </motion.h1>

          {/* Tagline with typing effect */}
          <div className="h-8 sm:h-10 mb-6">
            <p className="text-lg sm:text-xl md:text-2xl font-accent tracking-wide text-neon-green text-glow-green">
              {displayedText}
              {showCursor && <span className="animate-pulse">|</span>}
            </p>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            AI Engineer & Full Stack Developer dedicated to building intelligent, production-ready applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="heroOutline" size="lg" onClick={() => scrollTo("projects")}>
              <Map className="w-4 h-4" />
              Explore My Portfolio
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-16"
          >
            <button onClick={() => scrollTo("skills")} className="text-muted-foreground hover:text-primary transition-colors">
              <ChevronDown className="w-6 h-6 mx-auto animate-bounce" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
