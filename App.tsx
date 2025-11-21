import React from 'react';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { SocialProof } from './components/SocialProof';
import { Features } from './components/Features';
import { Community } from './components/Community';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Bio } from './components/Bio';
import { Objections } from './components/Objections';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-brand-beige selection:bg-brand-brown selection:text-brand-beige">
      <Hero />
      <Marquee />
      <SocialProof />
      <Features />
      <Community />
      <Testimonials />
      <Pricing />
      <Bio />
      <Objections />
      <FAQ />
      <Footer />
    </main>
  );
};

export default App;