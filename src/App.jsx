import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import MobileActionBar from './components/MobileActionBar';

import HeroSection from './components/HeroSection';
import BrandStatementSection from './components/BrandStatementSection';
import ProblemSection from './components/ProblemSection';
import HowItWorksSection from './components/HowItWorksSection';
import ModelsSection from './components/ModelsSection';
import WhereItFitsSection from './components/WhereItFitsSection';
import WhyRescoSection from './components/WhyRescoSection';
import CoverageSection from './components/CoverageSection';
import ProcessSection from './components/ProcessSection';
import CommercialSection from './components/CommercialSection';
import ClosingBandSection from './components/ClosingBandSection';

import ContactView from './components/ContactView';
import RobotsView from './components/RobotsView';
import SolutionsView from './components/SolutionsView';
import AboutView from './components/AboutView';
import PlaceholderView from './components/PlaceholderView';
import { RunningAtLogoStrip, CustomerQuoteBlock, CaseStudyBlock } from './components/FutureModules';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  const handleScrollHowItWorks = () => {
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const el = document.getElementById('how-it-works');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('how-it-works');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-layout">
      {/* Global Header */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onOpenDemo={handleOpenDemo} 
      />

      {/* Main Page Rendering */}
      <main>
        {activePage === 'home' && (
          <>
            {/* Section 1 — Hero */}
            <HeroSection 
              onOpenDemo={handleOpenDemo} 
              onScrollHowItWorks={handleScrollHowItWorks} 
            />

            {/* Switch on later: "Running at" client logos strip (activate when real client logos exist) */}
            <RunningAtLogoStrip isActive={false} />

            {/* Brand Statement from Identity Guide */}
            <BrandStatementSection />

            {/* Section 3 — The problem */}
            <ProblemSection />

            {/* Section 4 — How it works */}
            <HowItWorksSection 
              onNavigateRobots={() => {
                setActivePage('robots');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
            />

            {/* Section 4b — Two models */}
            <ModelsSection 
              onNavigateRobots={() => {
                setActivePage('robots');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
            />

            {/* Section 5 — Where it fits */}
            <WhereItFitsSection 
              onNavigateSolutions={() => {
                setActivePage('solutions');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
            />

            {/* Switch on later: Case study block (activate when first installation case study is written) */}
            <CaseStudyBlock isActive={false} />

            {/* Section 6 — Why RESCO */}
            <WhyRescoSection />

            {/* Switch on later: Customer quote block (activate when named customer quote is verified) */}
            <CustomerQuoteBlock isActive={false} />

            {/* Section 6b — Why one robot is not one shift */}
            <CoverageSection />

            {/* Section 6c — Three steps to running */}
            <ProcessSection />

            {/* Section 7 — Own or subscribe */}
            <CommercialSection onOpenDemo={handleOpenDemo} />

            {/* Section 8 — Video: kept out of live view per brief until PDR supplies film */}

            {/* Section 9 — Closing band */}
            <ClosingBandSection onOpenDemo={handleOpenDemo} />
          </>
        )}

        {activePage === 'contact' && (
          <ContactView />
        )}

        {activePage === 'robots' && (
          <RobotsView onOpenDemo={handleOpenDemo} />
        )}

        {activePage === 'solutions' && (
          <SolutionsView onOpenDemo={handleOpenDemo} />
        )}

        {activePage === 'about' && (
          <AboutView 
            onNavigateContact={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenDemo={handleOpenDemo}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer setActivePage={setActivePage} />

      {/* Fixed bottom bar on phones with WhatsApp + Book Demo */}
      <MobileActionBar onOpenDemo={handleOpenDemo} />

      {/* Interactive Demo & Site Survey Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={handleCloseDemo} 
      />
    </div>
  );
}
