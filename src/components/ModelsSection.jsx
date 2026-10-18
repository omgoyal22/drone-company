import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ModelsSection({ onNavigateRobots }) {
  return (
    <section className="models-section" id="fleet-models">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">Fleet Hardware</span>
          <h2 className="section-title">Two machines, the same job.</h2>
          <p className="section-subtitle">Different sizes for different corridors and loads.</p>
        </div>

        <div className="models-grid">
          {/* Card 1 — RESCO M6 */}
          <div className="model-card">
            <div className="model-image-holder">
              <img 
                src="/images/resco-m6.jpg" 
                alt="RESCO M6 compact delivery robot" 
              />
              <span className="model-badge">Single Cabin</span>
            </div>
            <div className="model-details">
              <h3 className="model-name">RESCO M6</h3>
              <p className="model-summary">
                One cabin, 500 mm wide, 10 kg. The compact machine for tight service corridors, and the one to take where thresholds and ramps are marginal.
              </p>
              <div className="model-specs-strip">
                <span className="spec-pill">Width: 500 mm</span>
                <span className="spec-pill">Payload: 10 kg</span>
                <span className="spec-pill">1 Locked cabin</span>
              </div>
            </div>
          </div>

          {/* Card 2 — RESCO M5 */}
          <div className="model-card">
            <div className="model-image-holder">
              <img 
                src="/images/resco-m5.jpg" 
                alt="RESCO M5 dual cabin delivery robot with screen" 
              />
              <span className="model-badge">Dual Cabin + Screen</span>
            </div>
            <div className="model-details">
              <h3 className="model-name">RESCO M5</h3>
              <p className="model-summary">
                Two cabins, so it can carry two deliveries on one trip, with a 21.5 inch screen on the front that can carry your own branding or notices.
              </p>
              <div className="model-specs-strip">
                <span className="spec-pill">Screen: 21.5 inch</span>
                <span className="spec-pill">2 Locked cabins</span>
                <span className="spec-pill">Carries 2 deliveries</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section-link-bottom">
          <button 
            type="button" 
            className="arrow-link" 
            onClick={onNavigateRobots}
          >
            Compare both <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
