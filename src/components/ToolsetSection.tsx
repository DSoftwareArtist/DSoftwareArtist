import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const tools = [
  { name: "Python", desc: "Primary language — 10+ years", level: "Master" },
  { name: "Django", desc: "Backend framework of choice", level: "Master" },
  { name: "React", desc: "Frontend UI library", level: "Expert" },
  { name: "TypeScript", desc: "Type-safe JavaScript", level: "Expert" },
  { name: "Tailwind CSS", desc: "Utility-first styling", level: "Expert" },
  { name: "PostgreSQL", desc: "Relational database", level: "Expert" },
  { name: "Leaflet", desc: "Interactive maps", level: "Expert" },
  { name: "Git", desc: "Version control", level: "Expert" },
  { name: "Docker", desc: "Containerization", level: "Advanced" },
  { name: "APIs", desc: "REST & GraphQL", level: "Expert" },
];

const levelColors: Record<string, string> = {
  Master: "text-neon-gold",
  Expert: "text-primary",
  Advanced: "text-neon-green",
};

const ToolsetSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="toolset" className="py-20 relative">
      <div className="container px-4">
        <SectionHeader title="My Tech Arsenal" subtitle="Tools & Technologies" glowColor="gold" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="card-game text-center cursor-pointer py-5"
            >
              <div className="font-heading text-xs font-semibold text-foreground mb-1">{tool.name}</div>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={hovered === i ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="text-[10px] text-muted-foreground mt-1">{tool.desc}</p>
                <span className={`text-[10px] font-accent tracking-wider ${levelColors[tool.level]}`}>{tool.level}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsetSection;
