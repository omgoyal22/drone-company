import React from 'react';
import { ArrowRight, Hotel, ShieldCheck } from 'lucide-react';

export default function WhereItFitsSection({ onNavigateSolutions }) {
  return (
    <section className="fits-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <div className="section-label">Property Deployment</div>
          <h2 className="section-title">Built for two kinds of building.</h2>
        </div>

        <div className="fits-grid">
          {/* Card 1 — Hotels */}
          <div className="fit-card">
            <div className="fit-icon">
              <Hotel size={30} />
            </div>
            <h3 className="fit-title">Hotels</h3>
            <p className="fit-desc">
              Room service, late-night requests, laundry returns, forgotten items. The trips that pull an attendant away from a guest at exactly the wrong moment.
            </p>
          </div>

          {/* Card 2 — Gated communities */}
          <div className="fit-card">
            <div className="fit-icon">
              <ShieldCheck size={30} />
            </div>
            <h3 className="fit-title">Gated communities</h3>
            <p className="fit-desc">
              Parcels and food arriving at every hour. The robot runs between the lobby and the flat door, so the delivery agent never goes up and the resident is called instead of answering to a stranger.
            </p>
          </div>
        </div>

        <div className="section-link-bottom">
          <button 
            type="button" 
            className="arrow-link" 
            onClick={onNavigateSolutions}
          >
            See both in detail <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
