import React from 'react';
import { ShieldCheck, MapPin, Wrench } from 'lucide-react';

export default function WhyRescoSection() {
  const points = [
    {
      num: "01",
      icon: <MapPin size={22} />,
      title: "Backed by PDR Videotronics.",
      desc: "RESCO is the robotics brand of PDR Videotronics, Mumbai. You deal with a company here, with a contact you can call."
    },
    {
      num: "02",
      icon: <Wrench size={22} />,
      title: "Deployment, not delivery",
      desc: "Survey, lift interface, mapping and commissioning are one scope of work. The things that break rollouts are checked before a unit is quoted."
    },
    {
      num: "03",
      icon: <ShieldCheck size={22} />,
      title: "Support that answers",
      desc: "Round-the-clock remote monitoring, and engineers who can visit your site when needed."
    }
  ];

  return (
    <section className="why-resco-section" id="why-resco">
      <div className="container">
        <div className="why-header-block section-header text-left">
          <span className="section-label">Execution In India</span>
          <h2 className="section-title">The robot is the easy part.</h2>
          <p className="why-body-intro">
            Delivery robot projects in India rarely stall because of the machine. They stall on a lift contractor who will not fit an interface, a Wi-Fi dead spot in a lift lobby, or a support line in another time zone.
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
      </div>
    </section>
  );
}
