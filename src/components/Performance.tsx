import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TrendingUp, Activity, Zap, Shield, BarChart3, PieChart } from 'lucide-react';
import { cn } from '../lib/utils';

const StatCard = ({ label, value, subValue, icon: Icon, delay }: { label: string, value: string, subValue: string, icon: any, delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card p-10 flex flex-col justify-between h-full group"
    >
      <div className="flex justify-between items-start mb-12">
        <div className="w-14 h-14 rounded-2xl glass border-white/5 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform duration-500">
          <Icon size={28} />
        </div>
        <div className="text-[10px] font-mono text-white/20 tracking-widest uppercase">
          METRIC_0{delay * 10 + 1}
        </div>
      </div>
      
      <div>
        <div className="text-sm font-mono text-white/40 uppercase tracking-widest mb-4">
          {label}
        </div>
        <div className="text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight">
          {value}
        </div>
        <div className="text-sm text-neon-blue font-mono">
          {subValue}
        </div>
      </div>
    </motion.div>
  );
};

export default function Performance() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="section-container relative overflow-hidden" id="performance">
      <div className="text-center mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-neon-blue font-mono text-xs tracking-[0.3em] uppercase mb-8"
        >
          Real-Time Performance Metrics
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          className="heading-lg mb-8"
        >
          Engineered for <br />
          <span className="text-white/40">Consistent Alpha</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        <StatCard 
          label="Annualized Return" 
          value="+142.8%" 
          subValue="↑ 12.4% vs Prev Year"
          icon={TrendingUp}
          delay={0.1}
        />
        <StatCard 
          label="Execution Speed" 
          value="0.12ms" 
          subValue="Institutional Grade"
          icon={Zap}
          delay={0.2}
        />
        <StatCard 
          label="Win Rate" 
          value="78.4%" 
          subValue="Based on 1.2M Trades"
          icon={Activity}
          delay={0.3}
        />
      </div>

      {/* Performance Chart Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="glass-card p-12 md:p-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/5 via-transparent to-neon-purple/5" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20 relative z-10">
          <div>
            <h3 className="text-3xl font-display font-bold mb-4">Cumulative Growth</h3>
            <p className="text-white/40 font-light max-w-md">
              Our aggregate performance across all active FYP Bots since inception. Verified by third-party audit.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 glass rounded-full border-white/5 text-sm font-mono">
              1Y
            </div>
            <div className="px-6 py-3 glass rounded-full border-white/5 text-sm font-mono bg-white/10">
              ALL TIME
            </div>
          </div>
        </div>

        <div className="h-96 w-full relative">
          {/* Simple SVG Chart for smooth animation */}
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 400" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-neon-blue)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--color-neon-blue)" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Grid Lines */}
            {[...Array(5)].map((_, i) => (
              <line 
                key={i}
                x1="0" y1={i * 100} x2="1000" y2={i * 100} 
                stroke="white" strokeOpacity="0.05" strokeWidth="1" 
              />
            ))}

            {/* Area */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
              d="M0,350 Q100,320 200,340 T400,280 T600,200 T800,120 T1000,50 L1000,400 L0,400 Z"
              fill="url(#chartGradient)"
            />

            {/* Line */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
              d="M0,350 Q100,320 200,340 T400,280 T600,200 T800,120 T1000,50"
              fill="none"
              stroke="var(--color-neon-blue)"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Data Points */}
            {[0, 200, 400, 600, 800, 1000].map((x, i) => {
              const yValues = [350, 340, 280, 200, 120, 50];
              return (
                <motion.circle
                  key={i}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 1.5 + i * 0.2 }}
                  cx={x} cy={yValues[i]} r="6"
                  fill="var(--color-neon-blue)"
                  className="shadow-[0_0_20px_rgba(0,242,255,0.8)]"
                />
              );
            })}
          </svg>
          
          {/* Chart Labels */}
          <div className="absolute bottom-[-40px] left-0 w-full flex justify-between text-[10px] font-mono text-white/20 uppercase tracking-widest">
            <span>JAN 2023</span>
            <span>JUN 2023</span>
            <span>JAN 2024</span>
            <span>JUN 2024</span>
            <span>PRESENT</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
