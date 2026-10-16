import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WhereItFitsSection({ onNavigateSolutions }) {
  return (
    <section className="fits-section" id="property-deployment">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">Property Deployment</span>
          <h2 className="section-title">Built for two kinds of building.</h2>
          <p className="section-subtitle">
            Tailored vertical logistics for high-occupancy environments where privacy, security, and staff efficiency are non-negotiable.
          </p>
        </div>

        <div className="fits-showcase">
          {/* Row 1 — Hotels */}
          <div className="fit-feature-block">
            <div className="fit-feature-image-col">
              <div className="fit-image-card">
                <img 
                  src="/images/hotel-delivery.jpg" 
                  alt="RESCO autonomous robot performing room service delivery in a luxury hotel corridor" 
                />
                <span className="fit-image-badge">Sector 01 · Luxury Hospitality</span>
              </div>
            </div>
            <div className="fit-feature-text-col">
              <span className="fit-kicker">Hotels &amp; Resorts</span>
              <h3 className="fit-feature-title">Discreet room service, zero attendant delays.</h3>
              <p className="fit-feature-desc">
                Room service trays, late-night amenity requests, laundry returns, and midnight toothbrushes. These are the repetitive trips that pull an attendant away from the front desk or guest check-in at the worst possible moments.
              </p>
              <ul className="fit-feature-list">
                <li>
                  <CheckCircle2 size={18} className="fit-check-icon" />
                  <span><strong>Zero app friction:</strong> Automatically calls in-room telephone intercom on arrival</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="fit-check-icon" />
                  <span><strong>10 kg payload:</strong> Accommodates dining trays, heavy linen stacks, and amenities</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="fit-check-icon" />
                  <span><strong>Silent floor transit:</strong> Whispers through carpeted corridors without guest disturbance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Row 2 — Gated Communities */}
          <div className="fit-feature-block reverse">
            <div className="fit-feature-image-col">
              <div className="fit-image-card">
                <img 
                  src="/images/residential-delivery.jpg" 
                  alt="RESCO robot handling parcel delivery in a luxury gated community elevator lobby" 
                />
                <span className="fit-image-badge">Sector 02 · Gated Residential</span>
              </div>
            </div>
            <div className="fit-feature-text-col">
              <span className="fit-kicker">Gated Communities &amp; Condos</span>
              <h3 className="fit-feature-title">Direct doorstep parcels without stranger access.</h3>
              <p className="fit-feature-desc">
                With online food and e-commerce parcels arriving around the clock, estate security gates face relentless friction. RESCO receives deliveries at the lobby concierge and transports them directly to apartment doors, keeping outside delivery personnel strictly out of residential towers.
              </p>
              <ul className="fit-feature-list">
                <li>
                  <CheckCircle2 size={18} className="fit-check-icon" />
                  <span><strong>Resident privacy:</strong> Unknown couriers never enter private residential elevator banks</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="fit-check-icon" />
                  <span><strong>Automated elevator calling:</strong> Traverses multi-storey apartment towers unaccompanied</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="fit-check-icon" />
                  <span><strong>Secure handover:</strong> Pin-protected compartment opened only by verified resident</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section-link-bottom">
          <button 
            type="button" 
            className="arrow-link" 
            onClick={onNavigateSolutions}
          >
            Explore all property deployment workflows <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
