import React from 'react';
import { motion } from 'motion/react';
import { Bot, LineChart, Zap, Shield, Clock, Monitor } from 'lucide-react';

const features = [
  {
    title: "Fully Automated Trading",
    description: "Set it and forget it. Our bots handle everything from market analysis to order execution 24/7.",
    icon: <Bot className="text-neon-blue" />,
    color: "blue"
  },
  {
    title: "AI Market Analysis",
    description: "Deep learning models analyze historical data and real-time sentiment to predict market moves.",
    icon: <LineChart className="text-neon-purple" />,
    color: "purple"
  },
  {
    title: "High Frequency Logic",
    description: "Execute trades at lightning speed to capture micro-opportunities that others miss.",
    icon: <Zap className="text-neon-gold" />,
    color: "gold"
  },
  {
    title: "Risk Management Engine",
    description: "Built-in stop losses, trailing takes, and equity protection to keep your capital safe.",
    icon: <Shield className="text-neon-blue" />,
    color: "blue"
  },
  {
    title: "24/7 Market Monitoring",
    description: "Markets never sleep, and neither do our bots. Constant surveillance for perfect entries.",
    icon: <Clock className="text-neon-purple" />,
    color: "purple"
  },
  {
    title: "MT5 Compatible",
    description: "Seamless integration with MetaTrader 5 and top-tier brokers worldwide.",
    icon: <Monitor className="text-neon-gold" />,
    color: "gold"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass-card hover:bg-white/[0.05] group"
            >
              <div className="w-14 h-14 rounded-2xl glass border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
