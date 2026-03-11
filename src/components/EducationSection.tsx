import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import SectionHeader from "./SectionHeader";

const education = [
  { icon: GraduationCap, title: "B.S. in Computer Science", desc: "Focus on Python, web development, and algorithmic problem-solving.", color: "primary" },
  { icon: Award, title: "Certifications", desc: "Full-Stack Web Development, Data Analysis with Python, GIS & Mapping with Leaflet.", color: "neon-green" },
  { icon: BookOpen, title: "Workshops & Courses", desc: "Advanced Django, React, PostgreSQL, Map-Based Data Visualization.", color: "neon-gold" },
];

const EducationSection = () => (
  <section id="education" className="py-20 relative">
    <div className="container px-4">
      <SectionHeader title="Knowledge is My Map" subtitle="Academic Background & Training" glowColor="green" />
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {education.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="card-game text-center group"
          >
            <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <item.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
