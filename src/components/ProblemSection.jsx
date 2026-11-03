import React from 'react';

export default function ProblemSection() {
  return (
    <section className="problem-section" id="problem">
      <div className="container problem-grid">
        <div className="problem-text section-header text-left">
          <span className="section-label">The Problem</span>
          <h2 className="section-title">Small trips that take people off their posts.</h2>
          <p className="problem-body">
            A tray to room 704. A parcel from the gate to the eleventh floor. Towels at midnight. Each trip takes someone away from the front desk, the kitchen or the security gate for ten or fifteen minutes. In residential towers, it also means a delivery rider nobody knows walking the corridors. RESCO takes over these trips, so staff stay where they&apos;re needed and riders stay at the gate.
          </p>
        </div>

        <div className="problem-image-wrapper">
          <img 
            src="/images/staff-corridor.jpg" 
            alt="Hotel staff member carrying a room service tray down a corridor" 
            width="600" 
            height="450" 
          />
        </div>
      </div>
    </section>
  );
}
