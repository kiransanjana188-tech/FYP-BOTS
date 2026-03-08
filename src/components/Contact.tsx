import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Instagram, Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const ContactItem = ({ icon: Icon, label, value, href, delay }: { icon: any, label: string, value: string, href: string, delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card p-8 flex items-center gap-6 group hover:border-neon-blue/30 transition-all duration-500"
    >
      <div className="w-16 h-16 rounded-2xl glass border-white/5 flex items-center justify-center text-neon-blue group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
        <Icon size={28} />
      </div>
      <div className="flex-1">
        <div className="text-[10px] font-mono text-white/20 tracking-widest uppercase mb-1">
          {label}
        </div>
        <div className="text-xl font-display font-bold text-white group-hover:text-neon-blue transition-colors duration-500">
          {value}
        </div>
      </div>
      <ArrowRight className="text-white/10 group-hover:text-neon-blue group-hover:translate-x-2 transition-all duration-500" size={20} />
    </motion.a>
  );
};

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="section-container relative" id="contact">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0.5, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-neon-blue font-mono text-xs tracking-[0.3em] uppercase mb-8"
        >
          Get In Touch
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          className="heading-lg mb-8"
        >
          Contact <span className="text-white/40">Information</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ContactItem 
          icon={Instagram} 
          label="Instagram" 
          value="@kiranfyp" 
          href="https://www.instagram.com/kiranfyp"
          delay={0.1}
        />
        <ContactItem 
          icon={Mail} 
          label="Email" 
          value="kiranfyp27@gmail.com" 
          href="mailto:kiranfyp27@gmail.com"
          delay={0.2}
        />
        <ContactItem 
          icon={MessageCircle} 
          label="WhatsApp" 
          value="+91 9108487678" 
          href="https://wa.me/919108487678"
          delay={0.3}
        />
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-96 bg-neon-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
}
