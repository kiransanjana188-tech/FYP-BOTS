import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { Brain, LayoutDashboard, Server, Zap, Shield, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

interface ScrollSectionProps {
  title: string;
  description: string;
  announcementLine?: string;
  accountOptions?: { label: string; price: string }[];
  icon: React.ReactNode;
  image: string;
  reverse?: boolean;
  showTradingOverlay?: boolean;
}

const StorySection = ({ title, description, announcementLine, accountOptions, icon, image, reverse, showTradingOverlay }: ScrollSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <div ref={ref} className={cn(
      "min-h-screen flex flex-col md:flex-row items-center justify-center gap-20 px-6 py-32",
      reverse ? "md:flex-row-reverse" : ""
    )}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 max-w-xl"
      >
        <div className="w-20 h-20 rounded-[2rem] glass border-white/5 flex items-center justify-center mb-10 text-neon-blue shadow-2xl">
          {icon}
        </div>
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-[1.1] tracking-tight">
          {title}
        </h2>
        <p className="text-xl md:text-2xl text-white/40 leading-relaxed font-light mb-8">
          {description}
        </p>
        
        {announcementLine && (
          <div className="mb-8 px-4 py-2 glass rounded-xl border-neon-blue/20 inline-block bg-neon-blue/5">
             <span className="text-[11px] font-mono text-neon-blue tracking-[0.15em] uppercase font-bold">
               {announcementLine}
             </span>
          </div>
        )}

        {accountOptions && (
          <div className="grid grid-cols-1 gap-3 mb-10">
            {accountOptions.map((opt, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex justify-between items-center px-6 py-4 glass rounded-2xl border-white/5 group/opt hover:border-neon-blue/30 transition-all duration-500"
              >
                <span className="text-sm font-display text-white/60 group-hover/opt:text-white transition-colors">{opt.label}</span>
                <span className="text-sm font-mono text-neon-blue font-bold tracking-wider">{opt.price}</span>
              </motion.div>
            ))}
          </div>
        )}

      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateY: reverse ? -10 : 10 }}
        animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 w-full max-w-3xl aspect-[4/3] glass rounded-[3rem] border-white/5 relative overflow-hidden group shadow-2xl perspective-1000"
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-transparent to-neon-purple/20" />
        
        {/* Animated UI Elements Overlay */}
        <div className="absolute inset-0 p-12 flex flex-col justify-between">
          {showTradingOverlay ? (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="flex items-end justify-around h-full px-8 pb-20 gap-1 opacity-40">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: [`${20 + Math.random() * 40}%`, `${40 + Math.random() * 40}%`, `${20 + Math.random() * 40}%`] }}
                    transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
                    className={cn(
                      "w-2 rounded-full",
                      Math.random() > 0.5 ? "bg-neon-blue/50" : "bg-neon-purple/50"
                    )}
                  />
                ))}
              </div>
              {/* Moving Market Data Lines */}
              <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent animate-pulse" />
              <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent animate-pulse delay-700" />
            </div>
          ) : (
            <>
              <div className="flex justify-between items-start">
                <motion.div 
                  animate={{ width: [80, 120, 80] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="h-10 glass rounded-full border-white/5" 
                />
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-neon-blue/10 animate-pulse" />
                  <div className="w-10 h-10 rounded-full bg-neon-purple/10 animate-pulse delay-150" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="w-full h-3 glass rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "85%" } : {}}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                  />
                </div>
                <div className="w-3/4 h-3 glass rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "60%" } : {}}
                    transition={{ duration: 2, delay: 0.7 }}
                    className="h-full bg-gradient-to-r from-neon-purple to-neon-gold"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const StickyReveal = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale, opacity }}
          className="relative w-full max-w-5xl aspect-video glass rounded-[4rem] border-white/5 flex items-center justify-center shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/5 via-transparent to-neon-purple/5" />
          <div className="text-center z-10 px-12 max-w-4xl">
            <motion.div
              style={{ 
                y: useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]),
                opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
              }}
            >
              <h3 className="text-5xl md:text-8xl font-display font-bold mb-10 tracking-tighter">
                UNMATCHED <br />
                <span className="text-neon-blue">PERFORMANCE</span>
              </h3>
              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">
                  FYP Bots are built to transform the way people trade. Our advanced algorithms analyze market data in real time, executing high-precision trades with speed and discipline.
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-12 left-12 w-24 h-24 border-l-2 border-t-2 border-neon-blue/20 rounded-tl-[2rem]" />
          <div className="absolute bottom-12 right-12 w-24 h-24 border-r-2 border-b-2 border-neon-purple/20 rounded-br-[2rem]" />
        </motion.div>
      </div>
    </div>
  );
};

export default function ScrollExperience() {
  return (
    <section className="relative" id="intelligence">
      <StorySection 
        title="FYP Neural Trading Intelligence"
        description="Our proprietary FYP trading algorithms analyze global market movements in real time, identifying high-probability opportunities with precision and speed. Built for traders who demand performance, stability, and intelligent automation."
        icon={<Brain size={40} />}
        image="https://images.unsplash.com/photo-1590766940554-634a7ed41450?q=80&w=1600&auto=format&fit=crop"
        showTradingOverlay
      />
      
      <StickyReveal />

      <StorySection 
        title="Precision Order Flow Intelligence"
        description="FYP Bots are designed using advanced order flow analysis and footprint chart technology, allowing our systems to understand real market pressure from buyers and sellers. By analyzing liquidity, volume clusters, and institutional order flow, our algorithms execute trades with exceptional precision."
        announcementLine="Advanced Order Flow Software & Footprint Analytics — Coming Soon."
        icon={<Zap size={40} />}
        image="https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1600&auto=format&fit=crop"
        reverse
        showTradingOverlay
      />
      
      <StorySection 
        title="FYP Global Prop Firm"
        description="FYP is expanding beyond trading bots to build a powerful proprietary trading ecosystem. Our upcoming FYP Prop Firm will give traders access to funded trading accounts and advanced trading technology."
        announcementLine="FYP Prop Firm — Coming Soon"
        accountOptions={[
          { label: "$5,000 Funded Account", price: "FREE" },
          { label: "$10,000 Funded Account", price: "$50" },
          { label: "$50,000 Funded Account", price: "$100" },
          { label: "$100,000 Funded Account", price: "$100" },
          { label: "$1,000,000 Business Trading Account", price: "$1000" }
        ]}
        icon={<Globe size={40} />}
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop"
      />
    </section>
  );
}
