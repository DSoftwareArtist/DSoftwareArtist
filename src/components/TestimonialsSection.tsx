import { motion } from "framer-motion";
import { MessageSquareQuote } from "lucide-react";
import SectionHeader from "./SectionHeader";

const testimonials = [
  { text: "Reamon transformed our project into something interactive and intuitive. His attention to detail is amazing!", author: "Client A" },
  { text: "From maps to dashboards, every feature was executed flawlessly and creatively.", author: "Client B" },
  { text: "A full-stack developer who thinks like an architect—highly recommended!", author: "Client C" },
];

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
            className="card-game relative"
          >
            <MessageSquareQuote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
            <p className="text-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
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
