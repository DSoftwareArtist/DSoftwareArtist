import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "Django", level: 95 },
      { name: "React", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Leaflet", level: 85 },
    ],
  },
  {
    name: "Database & Data Tools",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "SQLite", level: 85 },
      { name: "Pandas", level: 80 },
      { name: "GeoDjango", level: 82 },
    ],
  },
  {
    name: "Specialties",
    skills: [
      { name: "Full-Stack Dev", level: 95 },
      { name: "Geospatial Analysis", level: 88 },
      { name: "Interactive Maps", level: 85 },
      { name: "Math Problem Solving", level: 90 },
    ],
  },
];

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
