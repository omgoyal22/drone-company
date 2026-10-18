import React from 'react';

export default function CommercialSection({ onOpenDemo }) {
  return (
    <section className="commercial-section" id="commercial-plans">
      <div className="container">
        <div className="commercial-header section-header text-center">
          <span className="section-label">Commercial Structure</span>
          <h2 className="section-title">Two ways to have it.</h2>
          <p className="section-subtitle">
            Buy outright or pay monthly with maintenance included.
          </p>
        </div>

        <div className="commercial-grid">
          {/* Card 1 — Purchase */}
          <div className="commercial-card">
            <span className="commercial-tag">CAPEX</span>
            <h3 className="commercial-title">Purchase</h3>
            <p className="commercial-desc">
              The robot is yours, on your books. Site survey, lift interface, commissioning and operator training are included, with annual maintenance after the first year.
            </p>
          </div>

          {/* Card 2 — Subscription */}
          <div className="commercial-card">
            <span className="commercial-tag">OPEX</span>
            <h3 className="commercial-title">Subscription</h3>
            <p className="commercial-desc">
              A monthly fee over a fixed term, with maintenance, spares, support and software updates included throughout. No capital approval needed.
            </p>
          </div>
        </div>

        <div className="commercial-footer">
          <p className="commercial-note">
            What it costs depends on the building, the number of floors and the number of robots. We quote after the survey.
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
