import React from 'react';
import { Cpu, Send, Mail, Shield, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                <Cpu className="text-black w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold tracking-tighter">
                FYP <span className="text-neon-blue">BOTS</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              The future of automated trading. Empowering retail traders with institutional-grade AI algorithms and high-frequency execution logic.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 flex items-center gap-2">
              <BookOpen size={18} className="text-neon-blue" />
              Resources
            </h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#" className="hover:text-neon-blue transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Trading Guides</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Performance Logs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 flex items-center gap-2">
              <Shield size={18} className="text-neon-purple" />
              Legal
            </h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#" className="hover:text-neon-purple transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-neon-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-neon-purple transition-colors">Risk Disclosure</a></li>
              <li><a href="#" className="hover:text-neon-purple transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 flex items-center gap-2">
              <Send size={18} className="text-neon-gold" />
              Connect
            </h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#" className="hover:text-neon-gold transition-colors flex items-center gap-2">Telegram Channel</a></li>
              <li><a href="#" className="hover:text-neon-gold transition-colors flex items-center gap-2">Support Chat</a></li>
              <li><a href="#" className="hover:text-neon-gold transition-colors flex items-center gap-2">Twitter / X</a></li>
              <li><a href="#" className="hover:text-neon-gold transition-colors flex items-center gap-2">Discord Community</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-white/20 text-xs font-mono">
            © 2026 FYP BOTS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-white/20 text-xs">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              SYSTEMS OPERATIONAL
            </div>
            <p className="text-white/20 text-xs font-mono">
              LATENCY: 0.42MS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
