import { motion } from "framer-motion";
import { glowClasses } from "@/lib/constants";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  glowColor?: "blue" | "green" | "gold";
}

const SectionHeader = ({ title, subtitle, glowColor = "blue" }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3 ${glowClasses[glowColor]}`}>
      {title}
    </h2>
    {subtitle && <p className="text-muted-foreground font-accent text-lg tracking-wide">{subtitle}</p>}
    <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
  </motion.div>
);

export default SectionHeader;
