import React from 'react';

export default function CoverageSection() {
  return (
    <section className="coverage-section">
      <div className="container coverage-grid">
        <div className="coverage-text section-header text-left">
          <span className="section-label">Coverage</span>
          <h2 className="section-title">A round-the-clock post is not one job.</h2>
          <p className="problem-body">
            Covering a position every hour of the week takes 168 hours. One person may work around 48 of them. Before a single day of leave, illness or a weekly off, that post needs four people. A robot works the whole week, including the festival days when a building is at its busiest and its staffing at its thinnest.
          </p>
        </div>

        <div className="coverage-math-box">
          <div className="math-row">
            <span className="math-label">Hours in a full 7-day week</span>
            <span className="math-value">168 hrs</span>
          </div>
          <div className="math-row">
            <span className="math-label">Standard single staff work week</span>
            <span className="math-value">~48 hrs</span>
          </div>
          <div className="math-row">
            <span className="math-label">People needed per post before leave or off-days</span>
            <span className="math-value math-highlight">4 People</span>
          </div>
          <div className="math-row">
            <span className="math-label">RESCO weekly coverage</span>
            <span className="math-value math-highlight">168 / 168 hrs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
