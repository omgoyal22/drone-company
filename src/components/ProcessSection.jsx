import React from 'react';

export default function ProcessSection() {
  const processSteps = [
    {
      num: 1,
      title: "Survey",
      desc: "We walk the route floor by floor with your team and your lift contractor, and tell you in writing which floors can be served."
    },
    {
      num: 2,
      title: "Install",
      desc: "Charging dock fitted, every floor mapped, lift module commissioned, live route tested."
    },
    {
      num: 3,
      title: "Handover",
      desc: "Acceptance testing, training for your staff, and a named support contact for the property."
    }
  ];

  return (
    <section className="process-section">
      <div className="container">
        <div className="process-header">
          <div className="section-label">Deployment Pathway</div>
          <h2 className="section-title">Survey, install, handover.</h2>
          <p className="section-subtitle">What happens to a facility manager between signing and running.</p>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <div className="process-card" key={step.num}>
              <div className="process-badge">{step.num}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
