import React from 'react';

export default function ProblemSection() {
  return (
    <section className="problem-section">
      <div className="container problem-grid">
        <div className="problem-text section-header text-left">
          <span className="section-label">The Problem</span>
          <h2 className="section-title">The same short walk, fifty times a day.</h2>
          <p className="problem-body">
            Every building runs on small repeated journeys. A tray to 704. A parcel from the security desk to the eleventh floor. A forgotten toothbrush at midnight. Each one takes somebody away from the desk, the kitchen or the gate for ten or fifteen minutes, and none of them needs judgement — only legs. Those are the trips RESCO takes over.
          </p>
          <div className="problem-highlight-box">
            "None of them needs judgement — only legs. Those are the trips RESCO takes over."
          </div>
        </div>

        <div className="problem-image-wrapper">
          <img 
            src="/images/staff-corridor.jpg" 
            alt="A member of staff walking a corridor with a tray, shot from behind" 
            width="600" 
            height="450" 
          />
          <div className="problem-image-overlay">
            <span className="problem-caption">Staff pulled away from guests and gates for routine trips.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
