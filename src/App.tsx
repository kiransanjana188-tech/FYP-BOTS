import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollExperience from './components/ScrollExperience';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features';
import Performance from './components/Performance';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FuturisticBackground from './components/FuturisticBackground';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href && href !== '#') {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      {/* Futuristic Background Layer */}
      <FuturisticBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        
        <div className="relative z-10">
          <ScrollExperience />
          <Performance />
          <Features />
          <ProductGrid />
          <Testimonials />
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Glow Effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-5 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-blue/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-purple/5 rounded-full blur-[150px]" />
      </div>
    </div>
  );
}
