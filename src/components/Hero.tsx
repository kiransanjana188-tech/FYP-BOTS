import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative min-h-[120vh] flex items-center justify-center pt-32 overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-neon-blue/5 rounded-full blur-[150px] -z-10" 
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 300]), opacity }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[120px] -z-10" 
      />

      <motion.div 
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto px-6 text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-white/5 text-neon-blue text-[10px] font-bold uppercase tracking-[0.2em] mb-12"
        >
          <TrendingUp size={14} />
          Institutional Grade Intelligence
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-[10rem] font-display font-black tracking-[-0.04em] leading-[0.82] mb-12"
        >
          FYP <span className="text-neon-blue">BOTS</span> <br />
          <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">THE FUTURE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-xl md:text-2xl text-white/40 mb-16 leading-relaxed font-light"
        >
          Advanced algorithmic trading systems engineered for the next generation of digital assets. Precision. Speed. Consistency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <button className="btn-primary flex items-center gap-3 group">
            Get Started
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="btn-secondary">
            View Performance
          </button>
        </motion.div>

        {/* Enhanced Floating Candlestick Animation */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
          className="mt-32 relative max-w-5xl mx-auto h-96 glass rounded-[3rem] border-white/5 overflow-hidden group shadow-[0_0_50px_rgba(0,163,255,0.1)]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/10 via-transparent to-transparent" />
          
          {/* Grid Lines */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="absolute w-full h-[1px] bg-white" style={{ top: `${i * 20}%` }} />
            ))}
            {[...Array(10)].map((_, i) => (
              <div key={i} className="absolute h-full w-[1px] bg-white" style={{ left: `${i * 10}%` }} />
            ))}
          </div>

          <div className="flex items-center justify-between h-full px-12 pb-16 pt-20 gap-4 relative">
            {[...Array(24)].map((_, i) => {
              const isUp = Math.random() > 0.4;
              const bodyHeight = 15 + Math.random() * 40;
              const wickTop = 5 + Math.random() * 15;
              const wickBottom = 5 + Math.random() * 15;
              const yOffset = 10 + Math.random() * 30;

              return (
                <div key={i} className="flex-1 flex flex-col items-center relative h-full justify-center">
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ 
                      duration: 1.5, 
                      delay: 0.8 + i * 0.05,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="w-full flex flex-col items-center"
                    style={{ transform: `translateY(${yOffset}%)` }}
                  >
                    {/* Top Wick */}
                    <motion.div 
                      animate={{ height: [wickTop, wickTop + 5, wickTop] }}
                      transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
                      className={cn("w-[1.5px] rounded-full", isUp ? "bg-neon-blue/40" : "bg-neon-purple/40")} 
                      style={{ height: `${wickTop}px` }}
                    />
                    
                    {/* Body */}
                    <motion.div 
                      animate={{ 
                        height: [bodyHeight, bodyHeight + 10, bodyHeight],
                        boxShadow: isUp 
                          ? ["0 0 10px rgba(0,163,255,0.2)", "0 0 20px rgba(0,163,255,0.4)", "0 0 10px rgba(0,163,255,0.2)"]
                          : ["0 0 10px rgba(191,0,255,0.2)", "0 0 20px rgba(191,0,255,0.4)", "0 0 10px rgba(191,0,255,0.2)"]
                      }}
                      transition={{ duration: 4 + Math.random() * 2, repeat: Infinity }}
                      className={cn(
                        "w-full max-w-[12px] rounded-sm transition-all duration-700",
                        isUp ? "bg-neon-blue/60 group-hover:bg-neon-blue" : "bg-neon-purple/60 group-hover:bg-neon-purple"
                      )}
                      style={{ height: `${bodyHeight}px` }}
                    />

                    {/* Bottom Wick */}
                    <motion.div 
                      animate={{ height: [wickBottom, wickBottom + 5, wickBottom] }}
                      transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
                      className={cn("w-[1.5px] rounded-full", isUp ? "bg-neon-blue/40" : "bg-neon-purple/40")} 
                      style={{ height: `${wickBottom}px` }}
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Floating Data Tags */}
          <div className="absolute top-8 left-12 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
              <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase">BTC/USD +4.2%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
              <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase">ETH/USD -1.8%</span>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
             <div className="px-10 py-5 glass rounded-full border-neon-blue/30 text-neon-blue font-mono text-[10px] tracking-[0.3em] bg-black/60 backdrop-blur-xl shadow-[0_0_30px_rgba(0,163,255,0.2)]">
                NEURAL ENGINE SYNC: ACTIVE
             </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
