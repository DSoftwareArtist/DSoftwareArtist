import { motion } from "framer-motion";
import { Briefcase, MapPin, Bot } from "lucide-react";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    icon: Briefcase,
    title: "Freelance Python Full-Stack Developer",
    period: "2015–Present",
    desc: "Delivered scalable web apps, geolocation solutions, and automation tools for clients worldwide.",
  },
  {
    icon: MapPin,
    title: "Geo-Location Game App Project",
    period: "Featured Project",
    desc: "Designed an interactive mobile game using Leaflet maps, geospatial logic, and real-time updates.",
  },
  {
    icon: Bot,
    title: "Web & Data Automation Projects",
    period: "Ongoing",
    desc: "Built tools to streamline workflows, analyze datasets, and visualize insights with interactive dashboards.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-20 relative">
    <div className="container px-4">
      <SectionHeader title="Career Milestones" subtitle="Professional Journey" glowColor="green" />
      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-neon-green to-neon-gold" />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className={`relative mb-12 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"} pl-14 md:pl-0`}
          >
            {/* Dot */}
            <div className={`absolute left-4 md:${i % 2 === 0 ? "right-[-8px]" : "left-[-8px]"} top-2 w-4 h-4 rounded-full bg-primary border-2 border-background z-10`} />
            
            <div className="card-game">
              <div className="flex items-center gap-3 mb-2">
                <exp.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-xs font-accent text-neon-gold tracking-wider">{exp.period}</span>
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{exp.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
