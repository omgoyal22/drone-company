import React, { useEffect } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  FileText, 
  Wrench, 
  Users, 
  Radio, 
  ArrowRight,
  CheckCircle2,
  Cpu
} from 'lucide-react';

export default function AboutView({ onNavigateContact, onOpenDemo }) {
  useEffect(() => {
    // Set page title and meta description per specification
    document.title = "About RESCO — Service Robotics by PDR Videotronics, Mumbai";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "RESCO is the service robotics brand of PDR Videotronics (India) Private Limited, Mumbai. Survey, installation, commissioning and support for indoor delivery robots.";
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const steps = [
    {
      num: "01",
      title: "Survey",
      subtitle: "Pre-installation assessment",
      icon: FileText,
      body: "We walk the route floor by floor, agree the charging position, test the network along the way, and complete a lift pre-inspection with your contractor. You get a written statement of which floors the robot can serve and what the building must provide."
    },
    {
      num: "02",
      title: "Install and commission",
      subtitle: "Mapping and integration",
      icon: Wrench,
      body: "The charging dock is fitted, the robot is driven through every operating floor to build its map, the lift module is commissioned, and the live route is tested."
    },
    {
      num: "03",
      title: "Handover",
      subtitle: "Operational readiness",
      icon: Users,
      body: "Acceptance testing, training for the people who will use it, and a named support contact for the property."
    }
  ];

  return (
    <div className="about-page-view">
      {/* ===================================================================
          Section 1 — Hero
          =================================================================== */}
      <section className="about-hero" id="about-hero">
        <div className="container">
          <div className="about-hero-content section-header text-center">
            <span className="section-label">Service robotics · Mumbai</span>
            <h1 className="hero-headline">Robots that have to work on a Tuesday afternoon.</h1>
            <p className="hero-subheadline">
              RESCO is the service robotics brand of PDR Videotronics (India) Private Limited, a Mumbai company that has been supplying Indian industry since [year — PDR to confirm].
            </p>
          </div>

          <div className="about-hero-card">
            <div className="about-hero-grid">
              <div className="about-identity-block">
                <span className="identity-tag">Operating entity</span>
                <h3 className="identity-company">PDR Videotronics (India) Private Limited</h3>
                <p className="identity-desc">
                  Engineering, deployment, lift interface coordination, and 24/7 technical lifecycle support for autonomous commercial delivery robotics across India.
                </p>
              </div>
              <div className="about-metrics-strip">
                <div className="metric-box">
                  <span className="metric-num">Mumbai</span>
                  <span className="metric-label">HQ and engineering centre</span>
                </div>
                <div className="metric-box">
                  <span className="metric-num">End-to-End</span>
                  <span className="metric-label">Survey to live handover</span>
                </div>
                <div className="metric-box">
                  <span className="metric-num">24 / 7</span>
                  <span className="metric-label">Remote diagnostic support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 2 — Why we are doing this
          =================================================================== */}
      <section className="about-purpose-section alt-bg" id="why-we-are-doing-this">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why we are doing this</h2>
          </div>

          <div className="purpose-card">
            <div className="purpose-quote-mark">&ldquo;</div>
            <p className="purpose-body">
              Every day, dozens of delivery riders walk into buildings, through lifts and corridors, to people&apos;s front doors. Each one is a stranger inside. And the parcel still waits while a rider searches for the right flat or rushes to his next order. Our robot stops riders at the gate and takes the delivery to the door itself, so strangers stay out and deliveries arrive on time.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 3 — How we work
          =================================================================== */}
      <section className="about-process-section" id="how-we-work">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">How we work</span>
            <h2 className="section-title">From survey to live handover</h2>
          </div>

          <div className="process-cards-grid">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div className="process-card" key={idx}>
                  <div className="process-card-header">
                    <span className="process-card-num">{step.num}</span>
                    <div className="process-icon-box">
                      <IconComp size={22} />
                    </div>
                  </div>
                  <h3 className="process-card-title">{step.title}</h3>
                  <span className="process-card-subtitle">{step.subtitle}</span>
                  <p className="process-card-body">{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 4 — Support
          =================================================================== */}
      <section className="about-support-section alt-bg" id="support">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Support</h2>
          </div>

          <div className="support-card-clean">
            <p className="support-primary-body">
              Remote monitoring runs around the clock, and faults that a robot can see itself — a wrong floor, an unexpected stop, a blocked route — raise themselves rather than waiting for somebody to notice. When a site visit is needed, we send people.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 5 — Where we are
          =================================================================== */}
      <section className="about-location-section" id="where-we-are">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Headquarters</span>
            <h2 className="section-title">Where we are</h2>
          </div>

          <div className="location-card">
            <div className="location-info">
              <div className="location-icon-wrapper">
                <MapPin size={28} />
              </div>
              <div className="location-text-group">
                <h3 className="location-company-name">PDR Videotronics (India) Private Limited</h3>
                <p className="location-address">
                  99 Old Prabhadevi Road, Mumbai 400 025.
                </p>
                <p className="location-note">
                  Operating nationally with survey, commissioning, and on-site field engineering teams.
                </p>
              </div>
            </div>

            <div className="location-actions">
              <button 
                type="button" 
                className="btn btn-primary btn-lg" 
                onClick={onNavigateContact}
                id="aboutTalkToUsBtn"
              >
                Talk to us
              </button>
              <button 
                type="button" 
                className="btn btn-outline btn-lg" 
                onClick={onOpenDemo}
                id="aboutBookSurveyBtn"
              >
                Book a survey
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
