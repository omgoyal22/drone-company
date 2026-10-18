import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HowItWorksSection({ onNavigateRobots }) {
  const steps = [
    {
      num: "1 · Load",
      desc: "Staff call the robot over, place the item inside and enter the destination. The cabin locks."
    },
    {
      num: "2 · Route",
      desc: "It plans its own path across a map of your building, including which lift it needs."
    },
    {
      num: "3 · Travel",
      desc: "It drives the corridor, going around people and trolleys rather than stopping at them, and calls the lift itself."
    },
    {
      num: "4 · Arrive",
      desc: "At the door it telephones the room and waits."
    },
    {
      num: "5 · Return",
      desc: "Once the cabin is opened and the item taken, it records the handover and returns to its charging dock."
    }
  ];

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <div className="how-it-works-header section-header text-center">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">One delivery, start to finish.</h2>
          <p className="section-subtitle">From loading the item to reaching the room.</p>
        </div>

        <div className="steps-timeline">
          {steps.map((step, idx) => {
            const [number, title] = step.num.split(' · ');
            return (
              <div className="step-card" key={idx}>
                <span className="step-number">Step 0{number}</span>
                <h3 className="step-title">{title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="section-link-bottom">
          <button 
            type="button" 
            className="arrow-link" 
            onClick={onNavigateRobots}
          >
            See the machine in detail <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
