import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ onOpenDemo, onScrollHowItWorks }) {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="section-label">Autonomous Hospitality &amp; Residential Logistics</span>
          <h1 className="hero-headline">
            The trip to the door, <span className="hero-headline-accent">made without you.</span>
          </h1>
          <p className="hero-subheadline">
            RESCO is an autonomous indoor delivery robot. Staff load it and enter a room number. It calls the lift, drives to the door and telephones the room when it arrives.
          </p>
          <div className="hero-cta-group">
            <button 
              type="button" 
              className="btn btn-primary btn-lg" 
              onClick={onOpenDemo}
              id="heroBookDemoBtn"
            >
              Book a demo
            </button>
            <button 
              type="button" 
              className="btn btn-secondary btn-lg" 
              onClick={onScrollHowItWorks}
              id="heroSeeHowItWorksBtn"
            >
              See how it works
            </button>
          </div>
          <div className="hero-trust-badge">
            <span className="pdr-badge-tag">PDR Videotronics (India)</span>
            <span>— Engineered for Indian lifts, Wi-Fi &amp; corridors</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img 
              src="/images/hero-robot.jpg" 
              alt="RESCO robot in a corridor, shot slightly from the front and side, lift doors visible behind it" 
              width="800" 
              height="533" 
            />
            <div className="hero-floating-stat">
              <span className="stat-pulse-dot"></span>
              <div>
                <div className="floating-stat-text">Active Floor Transit</div>
                <div className="floating-stat-sub">Integrated lift recall module</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
