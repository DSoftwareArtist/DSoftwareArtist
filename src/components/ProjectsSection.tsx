import { motion } from "framer-motion";
import { ExternalLink, Smartphone, Play } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { projects } from "@/lib/constants";


const ProjectsSection = () => (
  <section id="projects" className="py-20 relative">
    <div className="container px-4">
      <SectionHeader title="Missions Completed" subtitle="Project Portfolio" glowColor="blue" />
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="card-game group cursor-pointer"
          >

            {/* Status badge */}
            <div className={`absolute top-4 right-4 text-[10px] font-accent tracking-wider px-2 py-0.5 rounded ${project.status === "ACTIVE" ? "bg-neon-green/10 text-neon-green" : "bg-primary/10 text-primary"}`}>
              {project.status}
            </div>
            
            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <project.icon className="w-6 h-6 text-primary" />
            </div>
            
            <h3 className="font-heading text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
              {project.title}
              { project.web && (
                <a href={project.web} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              )}
              { project.ios && (
                <a href={project.ios} target="_blank" rel="noopener noreferrer">
                  <Smartphone className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              )}
              { project.android && (
                <a href={project.android} target="_blank" rel="noopener noreferrer">
                  <Smartphone className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              )}
              { project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Play className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              )}  
            </h3>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.desc}</p>
            { project.notes && (
              <p className="text-muted-foreground text-xs italic mb-4">{project.notes}</p>
            )}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-accent tracking-wider px-2 py-0.5 rounded bg-muted text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
