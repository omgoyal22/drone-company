import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';

export default function ModelsSection({ onNavigateRobots }) {
  return (
    <section className="models-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <span className="section-label">Fleet Hardware</span>
          <h2 className="section-title">Two machines, the same job.</h2>
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
                One cabin, 500 mm wide, 10 kg. The compact machine for tight service corridors, and the one to take where thresholds and ramps are marginal.
              </p>
              <div className="model-specs-strip">
                <span className="spec-pill">Width: 500 mm</span>
                <span className="spec-pill">Payload: 10 kg</span>
                <span className="spec-pill">1 Locked Compartment</span>
              </div>
            </div>
          </div>

          {/* Card 2 — RESCO M5 */}
          <div className="model-card">
            <div 
              className="model-image-holder"
              style={{ background: '#ECEAE6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {/* Clean engineering diagram placeholder */}
              <div className="m5-diagram">
                <div className="m5-screen-label">21.5&quot; Display</div>
                <div className="m5-body">
                  <div className="m5-cabin">
                    <Layers size={14} style={{ marginRight: 6, color: '#7A7A7A' }} />
                    Cabin 1
                  </div>
                  <div className="m5-cabin">
                    <Layers size={14} style={{ marginRight: 6, color: '#7A7A7A' }} />
                    Cabin 2
                  </div>
                </div>
                <div className="m5-model-tag">RESCO M5</div>
              </div>
              <span className="model-badge">Dual Cabin + Screen</span>
            </div>
            <div className="model-details">
              <h3 className="model-name">RESCO M5</h3>
              <p className="model-summary">
                Two cabins, so it can carry two deliveries on one trip, with a 21.5 inch screen on the front that can carry your own branding.
              </p>
              <div className="model-specs-strip">
                <span className="spec-pill">Screen: 21.5&quot; Interactive</span>
                <span className="spec-pill">Dual Compartments</span>
                <span className="spec-pill">Brand Media Display</span>
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
