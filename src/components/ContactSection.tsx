import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Calendar, Github, Linkedin, Mail } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", details: "", method: "email" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.details.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", details: "", method: "email" });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container px-4">
        <SectionHeader title="Join My Next Mission" subtitle="Let's Build Something Extraordinary" glowColor="blue" />
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="card-game space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-accent tracking-wider text-muted-foreground mb-1 block">NAME</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-muted border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your name"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="text-xs font-accent tracking-wider text-muted-foreground mb-1 block">EMAIL</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-muted border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="your@email.com"
                  maxLength={255}
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-accent tracking-wider text-muted-foreground mb-1 block">PROJECT DETAILS</label>
              <textarea
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                rows={4}
                className="w-full bg-muted border border-border rounded-md px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Tell me about your project..."
                maxLength={1000}
              />
            </div>
            <div>
              <label className="text-xs font-accent tracking-wider text-muted-foreground mb-1 block">PREFERRED CONTACT</label>
              <div className="flex gap-3">
                {["email", "call", "chat"].map((m) => (
                  <button
                    type="button"
                    key={m}
                    onClick={() => setForm({ ...form, method: m })}
                    className={`px-4 py-1.5 rounded-md text-xs font-accent tracking-wider transition-all ${form.method === m ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
                  >
                    {m.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button type="submit" variant="hero" size="lg" className="flex-1">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
              <Button type="button" variant="heroOutline" size="lg" className="flex-1">
                <Calendar className="w-4 h-4" />
                Schedule a Call
              </Button>
            </div>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center gap-4 mt-8"
          >
            {[
              { icon: Mail, label: "Email" },
              { icon: Github, label: "GitHub" },
              { icon: Linkedin, label: "LinkedIn" },
            ].map((link) => (
              <button
                key={link.label}
                className="w-10 h-10 rounded-lg bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover:shadow-[0_0_15px_hsl(195_100%_50%/0.15)]"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
