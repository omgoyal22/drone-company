import React from 'react';
import { Package, ArrowUpDown, PhoneCall, Clock } from 'lucide-react';

export default function BrandStatementSection() {
  const capabilities = [
    {
      icon: <Package size={22} />,
      title: "Carries up to 10 kg",
      desc: "A tray, a parcel, extra towels or late-night room requests. The cabin locks until arrival."
    },
    {
      icon: <ArrowUpDown size={22} />,
      title: "Uses the lift on its own",
      desc: "A module fitted to your lift lets it change floors without anyone pressing buttons."
    },
    {
      icon: <PhoneCall size={22} />,
      title: "Calls the room on arrival",
      desc: "It rings the room or flat phone directly. The person receiving needs no app."
    },
    {
      icon: <Clock size={22} />,
      title: "Works round the clock",
      desc: "Runs all 168 hours of the week. Made and supported in Mumbai by PDR Videotronics."
    }
  ];

  return (
    <section className="brand-statement-section" id="capabilities-overview">
      <div className="container">
        <div className="capabilities-strip">
          {capabilities.map((item, index) => (
            <div className="capability-item" key={index}>
              <div className="capability-icon">
                {item.icon}
              </div>
              <div className="capability-content">
                <h3 className="capability-title">{item.title}</h3>
                <p className="capability-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
