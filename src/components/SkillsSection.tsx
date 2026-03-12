import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { skillCategories } from "@/lib/constants";
import { scrollTo } from "@/lib/utils";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container px-4">
        <SectionHeader title="Power-Ups & Abilities" subtitle="Skills & Expertise Levels" glowColor="blue" />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, x: ci % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
              className="card-game"
            >
              <h3 className="font-heading text-xs font-semibold text-neon-gold mb-4 tracking-wider uppercase">{cat.name}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    onClick={() => scrollTo('toolset')}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="cursor-pointer"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-foreground font-medium">{skill.name}</span>
                      <span className={`text-xs font-accent tracking-wider transition-colors ${hoveredSkill === skill.name ? "text-primary" : "text-muted-foreground"}`}>
                        LVL {Math.floor(skill.level / 10)}
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-neon-green"
                        style={{ boxShadow: hoveredSkill === skill.name ? "0 0 10px hsl(195 100% 50% / 0.5)" : "none" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
