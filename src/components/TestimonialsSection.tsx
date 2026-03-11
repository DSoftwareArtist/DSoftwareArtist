import { motion } from "framer-motion";
import { MessageSquareQuote } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { testimonials } from "@/lib/constants";

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 relative">
    <div className="container px-4">
      <SectionHeader title="Client Commendations" subtitle="What Others Say" glowColor="gold" />
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="relative"
          >
            {t.href ? (
              <a href={t.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
                <span className="sr-only">View {t.author}'s testimonial</span>
              </a>
            ) : null}
            <MessageSquareQuote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
            <a href={t.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10"></a>
            {t.image ? (
              <img src={t.image} alt={`${t.author}'s testimonial`} className="w-full h-auto object-contain rounded-md mb-4" />
            ) : (
              <div className="w-full h-48 bg-muted rounded-md mb-4 flex items-center justify-center">
                <span className="text-sm text-muted-foreground">No image available</span>
              </div>
            )}  
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-neon-green flex items-center justify-center">
                <span className="text-xs font-heading font-bold text-primary-foreground">{t.author.slice(-1)}</span>
              </div>
              <span className="text-sm font-accent text-neon-gold tracking-wider">— {t.author}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
