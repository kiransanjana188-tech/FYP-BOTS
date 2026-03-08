import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowUpRight, Shield, Zap, TrendingUp, Cpu, Globe, BarChart, Activity, Lock, Layers, Target } from 'lucide-react';
import { cn } from '../lib/utils';

const bots = [
  { id: 'FYP 1', name: 'FYP 1', price: '$200', profit: '+12.4%', risk: 'Low', icon: Cpu, color: 'neon-blue' },
  { id: 'FYP 2', name: 'FYP 2', price: '$300', profit: '+18.2%', risk: 'Medium', icon: Brain, color: 'neon-purple' },
  { id: 'FYP 3', name: 'FYP 3', price: '$400', profit: '+24.5%', risk: 'High', icon: Zap, color: 'neon-gold' },
  { id: 'FYP 3 Pro', name: 'FYP 3 Pro', price: '$899', profit: '+38.2%', risk: 'High', icon: Target, color: 'neon-gold' },
  { id: 'FYP 4', name: 'FYP 4', price: '$500', profit: '+8.9%', risk: 'Very Low', icon: Shield, color: 'neon-blue' },
  { id: 'FYP 4 Pro', name: 'FYP 4 Pro', price: '$1299', profit: '+15.4%', risk: 'Low', icon: Shield, color: 'neon-blue' },
  { id: 'FYP 5', name: 'FYP 5', price: '$999', profit: '+15.6%', risk: 'Medium', icon: Globe, color: 'neon-purple' },
  { id: 'FYP 5 Pro', name: 'FYP 5 Pro', price: '$1349', profit: '+28.9%', risk: 'Medium', icon: Globe, color: 'neon-purple' },
  { id: 'FYP 6', name: 'FYP 6', price: '$799', profit: '+32.1%', risk: 'Very High', icon: TrendingUp, color: 'neon-gold' },
  { id: 'FYP 7', name: 'FYP 7', price: '$799', profit: '+11.2%', risk: 'Low', icon: Layers, color: 'neon-blue' },
  { id: 'FYP 8', name: 'FYP 8', price: '$1599', profit: '+14.8%', risk: 'Medium', icon: Activity, color: 'neon-purple' },
];

import { Brain } from 'lucide-react';

const BotCard = ({ bot, index }: { bot: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.a
      href="https://ig.me/m/kiranfyp"
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card p-12 flex flex-col justify-between h-full group cursor-pointer block"
    >
      <div className="flex justify-between items-start mb-16">
        <div className={cn(
          "w-16 h-16 rounded-[1.5rem] glass border-white/5 flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-12",
          bot.color === 'neon-blue' ? "text-neon-blue" : bot.color === 'neon-purple' ? "text-neon-purple" : "text-neon-gold"
        )}>
          <bot.icon size={32} />
        </div>
        <div className="text-right">
          <div className="text-[10px] font-mono text-white/20 tracking-widest uppercase mb-1">
            {bot.id}
          </div>
          <div className="text-xl font-display font-black text-white">
            {bot.price}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-display font-bold mb-4 tracking-tight group-hover:text-neon-blue transition-colors duration-500">
          {bot.name}
        </h3>
        <div className="flex items-center gap-4 mb-10">
          <div className="px-4 py-1.5 glass rounded-full border-white/5 text-[10px] font-mono uppercase tracking-widest text-white/40">
            Risk: {bot.risk}
          </div>
          <div className="text-xl font-display font-bold text-neon-blue">
            {bot.profit}
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-white/5">
          <span className="text-xs font-mono text-white/20 uppercase tracking-widest">Buy Now</span>
          <ArrowUpRight className="text-white/20 group-hover:text-neon-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" size={20} />
        </div>
      </div>
    </motion.a>
  );
};

export default function ProductGrid() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="section-container relative" id="ecosystem">
      <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            className="heading-lg"
          >
            Select Your <br />
            <span className="text-white/40">Trading Engine</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-md text-xl text-white/40 font-light leading-relaxed mb-4"
        >
          From low-risk arbitrage to high-frequency volatility models. Every bot is engineered for a specific market regime.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bots.map((bot, i) => (
          <BotCard key={bot.id} bot={bot} index={i} />
        ))}
      </div>
    </section>
  );
}
