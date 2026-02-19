import { motion } from "framer-motion";
import { Shield, Eye, MessageSquare, Sparkles, ArrowRight, Target } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Stay Anonymous",
    description: "Your identity stays hidden until you accept a pitch. No spam, no cold calls.",
    color: "primary" as const,
  },
  {
    icon: Eye,
    title: "Visibility Control",
    description: "Choose which skills are public, private, or selectively shared with matched companies.",
    color: "primary" as const,
  },
  {
    icon: MessageSquare,
    title: "Company Pitches",
    description: "Companies craft personalized pitches explaining why you should join them. Not the other way around.",
    color: "accent" as const,
  },
  {
    icon: Target,
    title: "Smart Matching",
    description: "Our AI-powered engine scores relevance and suggests the best matches for both sides.",
    color: "primary" as const,
  },
  {
    icon: Sparkles,
    title: "AI-Assisted",
    description: "AI helps companies write better pitches and candidates discover skills they should learn.",
    color: "accent" as const,
  },
  {
    icon: ArrowRight,
    title: "Track Everything",
    description: "Both sides track pitch status: sent, viewed, accepted, or rejected in real-time.",
    color: "primary" as const,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How <span className="text-gradient-primary">ReverseBoard</span> Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A hiring platform built for candidates first. Here's what makes it different.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300 hover:glow-primary"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                feature.color === "accent" ? "bg-accent/10" : "bg-primary/10"
              }`}>
                <feature.icon className={`w-5 h-5 ${
                  feature.color === "accent" ? "text-accent" : "text-primary"
                }`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
