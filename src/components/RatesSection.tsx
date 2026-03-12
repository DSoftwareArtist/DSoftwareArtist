import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { services } from "@/lib/constants";

const RatesSection = () => (
  <section id="rates" className="py-20 relative">
    <div className="container px-4">
      <SectionHeader title="Mission Contracts" subtitle="Service Rates" glowColor="gold" />
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            onClick={() => window.open(s.link, "_blank")}
            className={`card-game text-center cursor-pointer ${s.highlight ? "border-primary/40 glow-border" : ""}`}
          >
            {s.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-accent tracking-wider px-3 py-0.5 rounded-full bg-primary text-primary-foreground">
                POPULAR
              </div>
            )}
            <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center mx-auto mb-4">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-sm font-semibold text-foreground mb-1">{s.title}</h3>
            <p className="text-2xl font-heading font-bold text-neon-gold text-glow-gold mb-2">{s.rate}</p>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RatesSection;
