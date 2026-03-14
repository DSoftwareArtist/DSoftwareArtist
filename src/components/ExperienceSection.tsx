import { motion } from "framer-motion";
import { experiences } from "@/lib/constants";
import SectionHeader from "./SectionHeader";

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
            <div className={`absolute left-4 right-auto ${i % 2 === 0 ? "md:-right-2 md:left-auto" : "md:-left-2 md:right-auto"} top-2 w-4 h-4 rounded-full bg-primary border-2 border-background z-10`} />
            
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
