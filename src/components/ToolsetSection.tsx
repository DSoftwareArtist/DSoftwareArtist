import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { tools } from "@/lib/constants";

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
            <div
              key={tool.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="card-game text-center cursor-pointer py-5"
            >
              <div className="font-heading text-xs font-semibold text-foreground mb-1">{tool.name}</div>
              <div
                className="overflow-hidden"
              >
                <p className="text-[10px] text-muted-foreground mt-1">{tool.desc}</p>
                <span className={`text-[10px] font-accent tracking-wider ${levelColors[tool.level]}`}>{tool.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsetSection;
