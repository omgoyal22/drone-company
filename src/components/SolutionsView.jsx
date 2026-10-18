import React, { useEffect } from 'react';
import { 
  Building, 
  Hotel, 
  Shield, 
  Activity, 
  Briefcase, 
  KeyRound, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  XCircle, 
  PhoneCall, 
  Layers, 
  Clock, 
  ChevronRight,
  ShieldCheck,
  DoorClosed,
  Navigation
} from 'lucide-react';

export default function SolutionsView({ onOpenDemo }) {
  useEffect(() => {
    // Set page title and meta description per specification
    document.title = "Delivery Robots for Hotels, Gated Communities and Offices — RESCO";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Where an autonomous indoor delivery robot earns its place: hotels, residential towers, hospitals, offices and serviced apartments.";
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const hotelTrips = [
    "Room service and late-night amenity requests",
    "Forgotten toiletries, chargers, irons, extra linen",
    "Laundry and pressed-clothing returns",
    "Welcome drops and VIP packages timed to arrival",
    "Documents and refreshments between conference floors"
  ];

  const communityTrips = [
    "Parcels and courier deliveries handed over at the security desk",
    "Food deliveries dropped at the gate",
    "Laundry, pharmacy and grocery drops",
    "Items sent between the clubhouse, office and flats"
  ];

  const additionalSectors = [
    {
      title: "Hospitals and clinics",
      subtitle: "Healthcare Facilities",
      icon: Activity,
      body: "Consumables, reports and non-clinical items between floors.",
      note: "Relieves nursing staff from routine specimen and supply transit."
    },
    {
      title: "Corporate offices",
      subtitle: "Multi-Floor Workplaces",
      icon: Briefcase,
      body: "Internal mail, packages and cafeteria orders across large floor plates.",
      note: "Continuous scheduled document and catering courier between floors."
    },
    {
      title: "Serviced apartments",
      subtitle: "Extended Stay Properties",
      icon: KeyRound,
      body: "Parcel handover from a secure lobby to the door.",
      note: "Private contactless delivery without unvetted delivery personnel in corridors."
    }
  ];

  const limits = [
    {
      title: "Indoors only",
      desc: "It works indoors only. A courtyard between two towers breaks the route.",
      detail: "Weather, curbs, and unmapped outdoor paving fall outside indoor SLAM guidance."
    },
    {
      title: "No stairs",
      desc: "It does not climb stairs, and no robot in this class does.",
      detail: "Vertical transit strictly requires an IoT lift interface module."
    },
    {
      title: "Threshold limits",
      desc: "Thresholds above 2.5 cm and ramps above 12° are out of range.",
      detail: "Floor transitions must meet gradeability limits (2.5 cm for M6, 2.0 cm for M5)."
    },
    {
      title: "Lift required for multi-floor",
      desc: "Low-rise buildings without a lift limit it to a single floor.",
      detail: "Without a passenger lift, the machine operates within its mapped single level."
    }
  ];

  return (
    <div className="solutions-page-view">
      {/* ===================================================================
          Section 1 — Hero
          =================================================================== */}
      <section className="solutions-hero" id="solutions-hero">
        <div className="container">
          <div className="solutions-hero-content section-header text-center">
            <span className="section-label">Sector Deployments</span>
            <h1 className="hero-headline">It does not automate a job. It automates a trip.</h1>
            <p className="hero-subheadline">
              A predictable journey between two fixed points, repeated all day, that currently interrupts somebody doing more valuable work.
            </p>
          </div>

          {/* Trip concept visual strip */}
          <div className="solutions-trip-diagram" aria-label="Trip Automation Diagram">
            <div className="trip-node">
              <span className="trip-node-tag">Point A</span>
              <h4 className="trip-node-title">Dispatch Desk / Dock</h4>
              <p className="trip-node-desc">Front desk, reception, security gate, or service pantry</p>
            </div>

            <div className="trip-transit-track">
              <div className="transit-line">
                <span className="transit-pulsing-node"></span>
              </div>
              <div className="transit-label-badge">
                <Navigation size={14} />
                <span>Autonomous Multi-Floor Transit</span>
              </div>
            </div>

            <div className="trip-node">
              <span className="trip-node-tag">Point B</span>
              <h4 className="trip-node-title">Destination Door</h4>
              <p className="trip-node-desc">Guest room, private flat entrance, or department office</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 2 — Hotels
          =================================================================== */}
      <section className="sector-detail-section" id="hotels">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Hospitality Deployment</span>
            <h2 className="section-title">Hotels</h2>
            <p className="section-subtitle">
              Room service and guest requests arrive unevenly and rarely when the floor is quiet. Each one costs a return walk, a lift wait and a staff member off the floor. RESCO takes the walk, not the judgement — the order is still made by your people.
            </p>
          </div>

          <div className="sector-split-grid">
            {/* Visual Column */}
            <div className="sector-photo-col">
              <div className="sector-photo-card">
                <img 
                  src="/images/hotel-delivery.jpg" 
                  alt="RESCO delivery robot standing outside a guest room door in a carpeted hotel corridor with warm wall lighting and no visible faces" 
                  width="1200"
                  height="675"
                />
                <div className="sector-photo-caption">
                  <span>Outside a guest room door — corridor lighting, silent arrival, telephone chime.</span>
                </div>
              </div>
            </div>

            {/* Structured Information Column */}
            <div className="sector-content-col">
              {/* The trips it takes over */}
              <div className="sector-block">
                <h3 className="sector-block-heading">The trips it takes over</h3>
                <ul className="trips-list">
                  {hotelTrips.map((item, idx) => (
                    <li className="trip-item" key={idx}>
                      <span className="trip-check-icon">
                        <CheckCircle2 size={18} />
                      </span>
                      <span className="trip-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What changes */}
              <div className="changes-card">
                <div className="changes-header">
                  <Clock size={20} className="changes-icon" />
                  <h4 className="changes-title">What changes</h4>
                </div>
                <p className="changes-body">
                  The desk stays staffed through a rush. The night shift stops being a walking shift. Every delivery carries a time and a record, so guest disputes are settled by the log.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 3 — Gated communities
          =================================================================== */}
      <section className="sector-detail-section alt-bg" id="gated-communities">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Residential Towers</span>
            <h2 className="section-title">Gated communities</h2>
            <p className="section-subtitle">
              Parcels, food and courier returns land at the gate at every hour, and each one ends with somebody walking a lift and a corridor, or a stranger sent to a resident’s door. RESCO runs the inside leg — from the lobby or security desk to the flat door, within the tower. The delivery agent stops at the gate. The resident gets a phone call and opens the cabin.
            </p>
          </div>

          <div className="sector-split-grid reversed">
            {/* Structured Information Column */}
            <div className="sector-content-col">
              {/* What it handles */}
              <div className="sector-block">
                <h3 className="sector-block-heading">What it handles</h3>
                <ul className="trips-list">
                  {communityTrips.map((item, idx) => (
                    <li className="trip-item" key={idx}>
                      <span className="trip-check-icon">
                        <CheckCircle2 size={18} />
                      </span>
                      <span className="trip-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What changes */}
              <div className="changes-card">
                <div className="changes-header">
                  <ShieldCheck size={20} className="changes-icon" />
                  <h4 className="changes-title">What changes</h4>
                </div>
                <p className="changes-body">
                  No outside delivery agent goes up. Security stops being a courier service. Residents stop coming down for parcels, and every handover is recorded.
                </p>
              </div>
            </div>

            {/* Visual Column */}
            <div className="sector-photo-col">
              <div className="sector-photo-card">
                <img 
                  src="/images/residential-delivery.jpg" 
                  alt="RESCO indoor delivery robot operating on a residential tower floor by the lift bank and flat doors, completely indoors" 
                  width="1200"
                  height="675"
                />
                <div className="sector-photo-caption">
                  <span>Inside the tower — from the lobby and lift car to the flat door. Never outdoor grounds.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 4 — Also suited to
          =================================================================== */}
      <section className="also-suited-section" id="also-suited">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Specialised Environments</span>
            <h2 className="section-title">Also suited to</h2>
          </div>

          <div className="suited-grid">
            {additionalSectors.map((sector, idx) => {
              const IconComp = sector.icon;
              return (
                <div className="suited-card" key={idx}>
                  <div className="suited-card-top">
                    <div className="suited-icon-box">
                      <IconComp size={24} />
                    </div>
                    <span className="suited-tag">{sector.subtitle}</span>
                  </div>
                  <h3 className="suited-title">{sector.title}</h3>
                  <p className="suited-body">{sector.body}</p>
                  <div className="suited-footer-note">
                    <span>{sector.note}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 5 — Where it does not fit
          =================================================================== */}
      <section className="disqualification-section alt-bg" id="where-it-does-not-fit">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Clear Operational Limits</span>
            <h2 className="section-title">Said plainly, because it saves everybody time.</h2>
          </div>

          <div className="limits-grid">
            {limits.map((item, idx) => (
              <div className="limit-card" key={idx}>
                <div className="limit-card-header">
                  <div className="limit-icon-wrapper">
                    <XCircle size={22} />
                  </div>
                  <h3 className="limit-title">{item.title}</h3>
                </div>
                <p className="limit-desc">{item.desc}</p>
                <span className="limit-detail">{item.detail}</span>
              </div>
            ))}
          </div>

          <div className="limits-closing-banner">
            <div className="closing-banner-content">
              <AlertTriangle size={22} className="banner-icon" />
              <p className="banner-text">
                If your building has any of these, say so early — the survey will find it anyway.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 6 — Closing band
          =================================================================== */}
      <section className="solutions-closing-band" id="solutions-closing">
        <div className="container">
          <div className="closing-band-box">
            <div className="closing-band-content text-center">
              <span className="section-label closing-label">Pre-Quotation Feasibility</span>
              <h2 className="closing-band-title">Which floors could it serve in your building?</h2>
              <p className="closing-band-sub">
                We confirm exact corridor dimensions, threshold heights, Wi-Fi continuity and lift contractor readiness in a written survey report.
              </p>
              <div className="closing-band-action">
                <button 
                  type="button" 
                  className="btn btn-primary btn-lg" 
                  onClick={onOpenDemo}
                  id="solutionsBookSurveyBtn"
                >
                  Book a survey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
