import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Professional Trader",
    content: "FYP Bots changed my entire approach to the markets. The execution speed is unmatched, and the risk management is the best I've seen in the industry.",
    avatar: "https://picsum.photos/seed/alex/100/100"
  },
  {
    name: "Sarah Chen",
    role: "Portfolio Manager",
    content: "Institutional grade logic in a retail package. We've integrated FYP 5 Pro into our diversified strategy with incredible results.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Marcus Thorne",
    role: "Crypto Enthusiast",
    content: "The 24/7 monitoring is a lifesaver. I can finally sleep while the bots handle the volatility. Truly set and forget.",
    avatar: "https://picsum.photos/seed/marcus/100/100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-8"
          >
            Trusted By <span className="text-neon-blue">FYP Production</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/60 font-light leading-relaxed mb-8"
          >
            FYP Production is a technology-driven team focused on building advanced trading algorithms, automated trading systems, and next-generation fintech tools for modern traders. Alongside financial technology, FYP Production is also involved in creative media and movie production.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm font-mono text-white/40 tracking-[0.2em] uppercase font-bold border-t border-white/5 pt-8"
          >
            Engineering the future of automated trading and digital creation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass-card relative group"
            >
              <Quote className="absolute top-6 right-8 text-white/5 w-12 h-12 group-hover:text-neon-gold/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-neon-gold text-neon-gold" />
                ))}
              </div>

              <p className="text-lg text-white/70 mb-8 italic leading-relaxed">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-white/40 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
