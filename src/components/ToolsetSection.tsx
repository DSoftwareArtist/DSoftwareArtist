import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const tools = [
  // --- AI & DATA CORE ---
  { name: "OpenCode", desc: "Leveraging agentic TUI for autonomous coding & refactoring",  level: "Master"},
  { name: "OpenAI API", desc: "Assistant API, GPT-4o, & Function Calling", level: "Master" },
  { name: "RAG Systems", desc: "Vector embeddings & semantic search logic", level: "Master" },
  { name: "Python", desc: "Core AI/Backend development — 10+ years", level: "Master" },
  { name: "LangChain", desc: "Orchestrating LLM workflows and chains", level: "Expert" },
  { name: "BeautifulSoup", desc: "Web scraping for AI training & data mining", level: "Expert" },

  // --- FULL STACK ARCHITECTURE ---
  { name: "Django", desc: "Scalable backend for AI-driven platforms", level: "Master" },
  { name: "PostgreSQL", desc: "Relational data & Vector storage (pgvector)", level: "Expert" },
  { name: "Vue | React", desc: "Building intelligent, reactive AI interfaces", level: "Expert" },
  { name: "TypeScript", desc: "Type-safe frontend for complex AI states", level: "Expert" },
  { name: "Tailwind CSS", desc: "Modern, rapid UI styling for AI dashboards", level: "Expert" },

  // --- GEOSPATIAL & SPECIALIZED ---
  { name: "Leaflet", desc: "Interactive maps & geospatial AI visualization", level: "Expert" },
  { name: "APIs", desc: "Designing REST & GraphQL for AI integration", level: "Expert" },
  { name: "Docker", desc: "Containerizing AI models & full-stack apps", level: "Advanced" },
  { name: "Git", desc: "Collaborative version control & CI/CD", level: "Expert" },
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
