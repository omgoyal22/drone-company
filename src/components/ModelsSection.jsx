import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ModelsSection({ onNavigateRobots }) {
  return (
    <section className="models-section" id="fleet-models">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">Fleet Hardware</span>
          <h2 className="section-title">Two machines, the same job.</h2>
          <p className="section-subtitle">Engineered for precise vertical transit across hotels and residential developments.</p>
        </div>

        <div className="models-grid">
          {/* Card 1 — RESCO M6 */}
          <div className="model-card">
            <div className="model-image-holder">
              <img 
                src="/images/resco-m6.jpg" 
                alt="RESCO M6 compact single cabin delivery robot" 
              />
              <span className="model-badge">Single Cabin</span>
            </div>
            <div className="model-details">
              <h3 className="model-name">RESCO M6</h3>
              <p className="model-summary">
                One cabin, 500 mm wide, 10 kg payload. The compact machine for tight service corridors, and the one to deploy where thresholds, door clearances, and service ramps are marginal.
              </p>
              <div className="model-specs-strip">
                <span className="spec-pill">Width: 500 mm</span>
                <span className="spec-pill">Payload: 10 kg</span>
                <span className="spec-pill">1 Auto-Locking Cabin</span>
                <span className="spec-pill">Tight Turning Radius</span>
              </div>
            </div>
          </div>

          {/* Card 2 — RESCO M5 */}
          <div className="model-card">
            <div className="model-image-holder">
              <img 
                src="/images/resco-m5.jpg" 
                alt="RESCO M5 dual cabin delivery robot with 21.5 inch interactive display" 
              />
              <span className="model-badge">Dual Cabin + Screen</span>
            </div>
            <div className="model-details">
              <h3 className="model-name">RESCO M5</h3>
              <p className="model-summary">
                Two separate cabins to carry two room deliveries on a single elevator trip, equipped with a 21.5-inch vertical display on the front that carries your building or hotel brand media.
              </p>
              <div className="model-specs-strip">
                <span className="spec-pill">Screen: 21.5&quot; HD Interactive</span>
                <span className="spec-pill">2 Independent Cabins</span>
                <span className="spec-pill">Multi-Delivery Routing</span>
                <span className="spec-pill">Custom Property Media</span>
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
            Compare detailed hardware specifications <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
