import React from 'react';
import { ShieldCheck, MapPin, Wrench } from 'lucide-react';

export default function WhyRescoSection() {
  const points = [
    {
      num: "01",
      icon: <MapPin size={22} />,
      title: "One Indian counterparty",
      desc: "RESCO is the robotics brand of PDR Videotronics, an established Mumbai manufacturer. You deal directly with an engineering company down the road, not an unverified reseller or an overseas factory."
    },
    {
      num: "02",
      icon: <Wrench size={22} />,
      title: "Deployment, not just delivery",
      desc: "Site survey, elevator interface, corridor mapping, and system commissioning form a single unified scope. The exact obstacles that derail robotics rollouts are eliminated before quotation."
    },
    {
      num: "03",
      icon: <ShieldCheck size={22} />,
      title: "Local support that answers",
      desc: "Round-the-clock remote fleet monitoring combined with locally based field engineers who physically attend your property whenever hardware servicing is required."
    }
  ];

  return (
    <section className="why-resco-section" id="why-resco">
      <div className="container">
        <div className="why-header-block section-header text-left">
          <span className="section-label">Execution In India</span>
          <h2 className="section-title">The robot is the easy part.</h2>
          <p className="why-body-intro">
            Delivery robot projects in India rarely stall because of the machine itself. They stall on a lift contractor who refuses an interface, a Wi-Fi dead spot in an elevator shaft, or an overseas support desk in a foreign time zone. We solved the whole ecosystem.
          </p>
        </div>

        <div className="why-points-grid">
          {points.map((pt, idx) => (
            <div className="why-card" key={idx}>
              <div className="why-card-top">
                <span className="why-card-num">{pt.num}</span>
                <span className="why-card-icon">{pt.icon}</span>
              </div>
              <h3 className="why-card-title">{pt.title}</h3>
              <p className="why-card-desc">{pt.desc}</p>
            </div>
          ))}
        </div>

        <div className="why-trust-footer">
          <div className="why-trust-badge">
            <span className="stat-pulse-dot"></span>
            <span>Manufactured &amp; supported by <strong>PDR Videotronics (India) Private Limited</strong>, Mumbai</span>
          </div>
          <div className="why-trust-badge">
            <span>24/7 Operations Centre · Local Spares Depot · Dedicated Property Contact</span>
          </div>
        </div>
      </div>
    </section>
  );
}
