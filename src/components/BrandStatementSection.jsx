import React from 'react';
import { Package, ArrowUpDown, PhoneCall, Clock } from 'lucide-react';

export default function BrandStatementSection() {
  const capabilities = [
    {
      icon: <Package size={22} />,
      title: "10 kg Secure Cabin",
      desc: "Trays, parcels, linen, and late-night requests in an auto-locking compartment."
    },
    {
      icon: <ArrowUpDown size={22} />,
      title: "Lift Call Interface",
      desc: "Changes floors unaccompanied using building lift interfaces and IoT relays."
    },
    {
      icon: <PhoneCall size={22} />,
      title: "Direct Room Telephone",
      desc: "Automatically rings the guest room or flat phone on arrival. No app required."
    },
    {
      icon: <Clock size={22} />,
      title: "168 Hours / Week",
      desc: "Continuous round-the-clock operation engineered in Mumbai by PDR Videotronics."
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
