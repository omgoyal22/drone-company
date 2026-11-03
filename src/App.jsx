import React, { useState, useEffect, useCallback } from 'react';
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
import CommercialSection from './components/CommercialSection';
import ClosingBandSection from './components/ClosingBandSection';

import ContactView from './components/ContactView';
import RobotsView from './components/RobotsView';
import SolutionsView from './components/SolutionsView';
import AboutView from './components/AboutView';
import PrivacyPolicyView from './components/PrivacyPolicyView';
import TermsView from './components/TermsView';
import { RunningAtLogoStrip, CustomerQuoteBlock, CaseStudyBlock } from './components/FutureModules';

// Helper to determine page id from pathname
const getPageFromPath = (path) => {
  const cleanPath = path.toLowerCase().replace(/\/$/, '') || '/';
  if (cleanPath === '/' || cleanPath === '/home') return 'home';
  if (cleanPath === '/robots') return 'robots';
  if (cleanPath === '/solutions') return 'solutions';
  if (cleanPath === '/about') return 'about';
  if (cleanPath === '/contact') return 'contact';
  if (cleanPath === '/privacy') return 'privacy';
  if (cleanPath === '/terms') return 'terms';
  return 'home';
};

const getPathFromPage = (page) => {
  if (page === 'home') return '/';
  return `/${page}`;
};

export default function App() {
  const [activePage, setActivePage] = useState(() => getPageFromPath(window.location.pathname));
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Navigate function that pushes history state and updates page
  const navigate = useCallback((target, hash = '') => {
    let targetPage = 'home';
    let targetPath = '/';
    let targetHash = hash;

    if (target.startsWith('/')) {
      const parts = target.split('#');
      targetPath = parts[0] || '/';
      targetHash = parts[1] || hash;
      targetPage = getPageFromPath(targetPath);
    } else {
      targetPage = target;
      targetPath = getPathFromPage(target);
    }

    const fullUrl = targetHash ? `${targetPath}#${targetHash}` : targetPath;

    if (window.location.pathname !== targetPath || (targetHash && window.location.hash !== `#${targetHash}`)) {
      window.history.pushState(null, '', fullUrl);
    }

    setActivePage(targetPage);

    if (targetHash) {
      setTimeout(() => {
        const el = document.getElementById(targetHash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // Listen to browser Back/Forward (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const page = getPageFromPath(window.location.pathname);
      setActivePage(page);
      if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle hash on initial load if any
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  }, []);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  const handleScrollHowItWorks = () => {
    if (activePage !== 'home') {
      navigate('/#how-it-works', 'how-it-works');
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
        setActivePage={(page) => navigate(page)} 
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

            {/* Switch on later: "Running at" client logos strip */}
            <RunningAtLogoStrip isActive={false} />

            {/* Brand Statement / Capabilities Strip */}
            <BrandStatementSection />

            {/* Section 3 — The problem */}
            <ProblemSection />

            {/* Section 4 — How it works */}
            <HowItWorksSection 
              onNavigateRobots={() => navigate('/robots')} 
            />

            {/* Section 4b — Two models */}
            <ModelsSection 
              onNavigateRobots={(hash) => navigate('/robots#comparison', 'comparison')} 
            />

            {/* Section 5 — Built for two kinds of building (Teaser) */}
            <WhereItFitsSection 
              onNavigateSolutions={(hash) => hash ? navigate(`/solutions#${hash}`, hash) : navigate('/solutions')} 
            />

            {/* Switch on later: Case study block */}
            <CaseStudyBlock isActive={false} />

            {/* Section 6 — Why RESCO */}
            <WhyRescoSection />

            {/* Switch on later: Customer quote block */}
            <CustomerQuoteBlock isActive={false} />

            {/* Section 6b — Why one robot is not one shift */}
            <CoverageSection />

            {/* Section 7 — Own or subscribe */}
            <CommercialSection onOpenDemo={handleOpenDemo} />

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
            onNavigateContact={() => navigate('/contact')}
            onOpenDemo={handleOpenDemo}
          />
        )}

        {activePage === 'privacy' && (
          <PrivacyPolicyView />
        )}

        {activePage === 'terms' && (
          <TermsView />
        )}
      </main>

      {/* Global Footer */}
      <Footer setActivePage={(page) => navigate(page)} />

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
