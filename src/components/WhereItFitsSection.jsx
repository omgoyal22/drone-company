import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function WhereItFitsSection({ onNavigateSolutions }) {
  return (
    <section className="fits-section" id="property-deployment">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">Property Deployment</span>
          <h2 className="section-title">Built for two kinds of building.</h2>
          <p className="section-subtitle">
            For hotels and residential buildings where small trips run all day.
          </p>
        </div>

        {/* Short Teaser: Two cards side by side */}
        <div className="fits-teaser-grid">
          {/* Card 1 — Hotels */}
          <div className="fits-teaser-card">
            <div className="fits-teaser-image-wrap">
              <img 
                src="/images/resco-hotel-corridor.jpg" 
                alt="RESCO M6 delivery robot in a hotel corridor" 
                className="fits-teaser-img"
              />
            </div>
            <div className="fits-teaser-body">
              <h3 className="fits-teaser-title">Hotels</h3>
              <p className="fits-teaser-desc">
                Room service and small requests, made without taking staff away.
              </p>
              <button 
                type="button" 
                className="arrow-link fits-teaser-link" 
                onClick={() => onNavigateSolutions('hotels')}
              >
                See how it works in hotels <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Card 2 — Gated Communities */}
          <div className="fits-teaser-card">
            <div className="fits-teaser-image-wrap">
              <img 
                src="/images/resco-residential-lobby.jpg" 
                alt="RESCO M5 delivery robot in a residential tower corridor" 
                className="fits-teaser-img"
              />
            </div>
            <div className="fits-teaser-body">
              <h3 className="fits-teaser-title">Gated communities</h3>
              <p className="fits-teaser-desc">
                Parcels and food to the flat door, without delivery agents going up.
              </p>
              <button 
                type="button" 
                className="arrow-link fits-teaser-link" 
                onClick={() => onNavigateSolutions('gated-communities')}
              >
                See how it works in gated communities <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
