import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import RescoLogo from './RescoLogo';

export default function Navbar({ activePage, setActivePage, onOpenDemo }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'robots', label: 'The Robots' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* RESCO Official Brand Logo */}
        <div 
          className="site-logo" 
          onClick={() => handleNavClick('home')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleNavClick('home')}
          aria-label="RESCO Homepage"
        >
          <RescoLogo theme="light" height={34} />
        </div>

        {/* Navigation Menu */}
        <nav aria-label="Main Navigation">
          <ul className={`nav-menu ${mobileOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Global Action Button */}
        <div className="header-actions">
          <button 
            type="button" 
            className="btn btn-primary" 
            onClick={onOpenDemo}
            id="navBookDemoBtn"
          >
            Book a demo
          </button>
          <button 
            type="button" 
            className="mobile-menu-toggle" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
