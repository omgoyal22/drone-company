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
            For hotels and residential buildings where small trips run all day.
          </p>
        </div>

        <div className="fits-showcase">
          {/* Row 1 — Hotels */}
          <div className="fit-feature-block">
            <div className="fit-feature-image-col">
              <div className="fit-image-card">
                <img 
                  src="/images/hotel-delivery.jpg" 
                  alt="RESCO robot delivering in a hotel corridor" 
                />
                <span className="fit-image-badge">Hotels</span>
              </div>
            </div>
            <div className="fit-feature-text-col">
              <span className="fit-kicker">Hotels</span>
              <h3 className="fit-feature-title">Room service and small requests, made without taking staff away.</h3>
              <p className="fit-feature-desc">
                Room service, late-night requests, laundry returns, forgotten items. The trips that pull an attendant away from a guest at exactly the wrong moment. The robot uses the lift, drives to the door, and telephones the room when it arrives.
              </p>
              <ul className="fit-feature-list">
                <li>
                  <CheckCircle2 size={18} className="fit-check-icon" />
                  <span><strong>Calls the room on arrival:</strong> Guests don't need to download an app.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="fit-check-icon" />
                  <span><strong>Carries up to 10 kg:</strong> Enough for a room service tray, a stack of towels, or amenities.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="fit-check-icon" />
                  <span><strong>Runs quietly:</strong> Moves through corridors without disturbing guests in their rooms.</span>
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
                  alt="RESCO robot handling parcel delivery in a residential lobby" 
                />
                <span className="fit-image-badge">Gated communities</span>
              </div>
            </div>
            <div className="fit-feature-text-col">
              <span className="fit-kicker">Gated communities</span>
              <h3 className="fit-feature-title">Parcels and food to the flat door, without delivery agents going up.</h3>
              <p className="fit-feature-desc">
                Parcels and food arriving at every hour. The robot runs between the lobby or security gate and the flat door, so the delivery agent never goes up and the resident is called instead of answering to a stranger.
              </p>
              <ul className="fit-feature-list">
                <li>
                  <CheckCircle2 size={18} className="fit-check-icon" />
                  <span><strong>Keeps corridors private:</strong> Outside delivery riders stay at the gate or lobby.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="fit-check-icon" />
                  <span><strong>Uses the lift on its own:</strong> Moves between floors without anyone pressing buttons.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="fit-check-icon" />
                  <span><strong>Safe handover:</strong> The cabin opens only when the resident answers the call.</span>
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
            See both in detail <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
