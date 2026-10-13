import React from 'react';
import { Package, ArrowUpDown, PhoneCall } from 'lucide-react';

export default function ThreeFactsSection() {
  const facts = [
    {
      icon: <Package size={24} />,
      title: "Carries up to 10 kg",
      desc: "A tray, a parcel, a stack of towels."
    },
    {
      icon: <ArrowUpDown size={24} />,
      title: "Uses the lift on its own",
      desc: "A module fitted to your lift lets it change floors unaccompanied."
    },
    {
      icon: <PhoneCall size={24} />,
      title: "Announces itself by phone",
      desc: "It dials the room on arrival. The person receiving needs no app."
    }
  ];

  return (
    <section className="facts-strip">
      <div className="container facts-grid">
        {facts.map((fact, index) => (
          <div className="fact-card" key={index}>
            <div className="fact-icon-wrapper">
              {fact.icon}
            </div>
            <h2 className="fact-title">{fact.title}</h2>
            <p className="fact-desc">{fact.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
