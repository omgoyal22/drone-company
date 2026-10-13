import React from 'react';

export default function WhyRescoSection() {
  const points = [
    {
      num: "01",
      title: "One Indian counterparty",
      desc: "RESCO is the robotics brand of PDR Videotronics, a Mumbai manufacturer. You deal with a company down the road, not a factory abroad."
    },
    {
      num: "02",
      title: "Deployment, not delivery",
      desc: "Survey, lift interface, mapping and commissioning are one scope of work. The things that break rollouts are checked before a unit is quoted."
    },
    {
      num: "03",
      title: "Support that answers",
      desc: "Round-the-clock remote monitoring, and people who can attend site."
    }
  ];

  return (
    <section className="why-resco-section">
      <div className="container">
        <div className="why-header-block">
          <div className="section-label">Execution In India</div>
          <h2 className="section-title">The robot is the easy part.</h2>
          <p className="why-body-intro">
            Delivery robot projects in India rarely stall because of the machine. They stall on a lift contractor who will not fit an interface, a Wi-Fi dead spot in a lift lobby, or a support line in another time zone.
          </p>
        </div>

        <div className="why-points-grid">
          {points.map((pt, idx) => (
            <div className="why-card" key={idx}>
              <div className="why-card-num">{pt.num}</div>
              <h3 className="why-card-title">{pt.title}</h3>
              <p className="why-card-desc">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
