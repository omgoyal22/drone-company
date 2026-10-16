import React from 'react';

export default function CommercialSection({ onOpenDemo }) {
  return (
    <section className="commercial-section" id="commercial-plans">
      <div className="container">
        <div className="commercial-header section-header text-center">
          <span className="section-label">Commercial Structure</span>
          <h2 className="section-title">Two ways to have it.</h2>
          <p className="section-subtitle">
            Flexible procurement models tailored for direct asset ownership or predictable operational expense budgeting.
          </p>
        </div>

        <div className="commercial-grid">
          {/* Card 1 — Purchase */}
          <div className="commercial-card">
            <span className="commercial-tag">CAPEX · Direct Ownership</span>
            <h3 className="commercial-title">Outright Purchase</h3>
            <p className="commercial-desc">
              The robot is yours, capitalized on your balance sheet. Property site survey, elevator interface hardware, on-site commissioning, and comprehensive operator staff training are all included, with annual maintenance contracts after Year One.
            </p>
          </div>

          {/* Card 2 — Subscription */}
          <div className="commercial-card">
            <span className="commercial-tag">OPEX · Turnkey Service</span>
            <h3 className="commercial-title">Managed Subscription</h3>
            <p className="commercial-desc">
              A single predictable monthly fee over a fixed term. Complete preventative maintenance, replacement spares, priority remote monitoring, and continuous software upgrades are fully bundled throughout the term. Zero capital approval needed.
            </p>
          </div>
        </div>

        <div className="commercial-footer">
          <p className="commercial-note">
            Final investment depends on building geometry, elevator bank configuration, and fleet size. We provide a transparent written quotation following your property survey.
          </p>
          <button 
            type="button" 
            className="btn btn-outline btn-lg" 
            onClick={onOpenDemo}
          >
            Ask for a quotation
          </button>
        </div>
      </div>
    </section>
  );
}
