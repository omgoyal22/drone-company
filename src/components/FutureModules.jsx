import React from 'react';
import { Building, Quote, ArrowRight, CheckCircle2 } from 'lucide-react';

/**
 * FUTURE MODULE 1: Logo Strip ("Running at")
 * 
 * Note from Owner Guidelines:
 * "A logo strip — 'Running at', with property logos. Every competitor leads with one,
 * and it is the single most persuasive thing on their sites. Build it now, switch it on later."
 * 
 * Set isActive to true when PDR confirms live hotel and residential customer logos.
 */
export function RunningAtLogoStrip({ isActive = false, logos = [] }) {
  if (!isActive) return null;

  return (
    <section className="future-module running-at-section" id="running-at-properties">
      <div className="container">
        <div className="running-at-inner">
          <span className="running-at-label">Running at</span>
          <div className="running-at-logos-track">
            {logos.length > 0 ? (
              logos.map((logo, idx) => (
                <div className="property-logo-item" key={idx}>
                  <img src={logo.src} alt={logo.name} className="property-logo-img" />
                </div>
              ))
            ) : (
              <div className="property-logo-placeholder-track">
                {/* Visual architectural slots ready for PDR vector client marks */}
                <div className="property-logo-slot"><span>Grand Luxury Hotel</span></div>
                <div className="property-logo-slot"><span>The Heights Residency</span></div>
                <div className="property-logo-slot"><span>One Horizon Centre</span></div>
                <div className="property-logo-slot"><span>Prestige Palms Tower</span></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * FUTURE MODULE 2: Customer Quote
 * 
 * Note from Owner Guidelines:
 * "A quote from a customer, with a name, role and property.
 * Build it now, switch it on later."
 * 
 * Set isActive to true when real customer endorsement is received.
 */
export function CustomerQuoteBlock({ 
  isActive = false, 
  quote = "The night shift no longer spends two hours walking extra linen and forgotten chargers between floors. Our front desk stays manned, and every single room drop has a time and completion log.",
  author = "General Manager",
  property = "Five-Star Business Hotel, Mumbai"
}) {
  if (!isActive) return null;

  return (
    <section className="future-module customer-quote-section alt-bg" id="customer-endorsement">
      <div className="container">
        <div className="customer-quote-card">
          <div className="quote-icon-box">
            <Quote size={32} />
          </div>
          <blockquote className="quote-text">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <div className="quote-attribution">
            <span className="quote-author-name">{author}</span>
            <span className="quote-property-name">{property}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * FUTURE MODULE 3: Short Case Study
 * 
 * Note from Owner Guidelines:
 * "A short case study — the building, the trips it took over, what the property says about it.
 * Build it now, switch it on later."
 * 
 * Set isActive to true when the first installation case study is written.
 */
export function CaseStudyBlock({ 
  isActive = false,
  study = {
    tag: "Deployment Profile",
    title: "16-Floor Hospitality Tower, Mumbai",
    building: "16-floor hotel with 220 guest rooms, 3 passenger lifts, and 24-hour room service.",
    trips: [
      "Late-night room service orders between 11 PM and 6 AM",
      "Forgotten amenity deliveries (chargers, toiletries, linen)",
      "Express laundry returns"
    ],
    statement: "Lift waiting times at the front desk dropped to zero during evening surges. The robot logged over 40 multi-floor trips per night with zero unassisted elevator incidents."
  }
}) {
  if (!isActive) return null;

  return (
    <section className="future-module case-study-section" id="property-case-study">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">{study.tag}</span>
          <h2 className="section-title">Case Study</h2>
        </div>

        <div className="case-study-card">
          <div className="case-study-header">
            <Building size={24} className="case-study-icon" />
            <h3 className="case-study-title">{study.title}</h3>
          </div>

          <div className="case-study-grid">
            <div className="case-study-col">
              <h4 className="col-subheading">The Building</h4>
              <p className="col-body">{study.building}</p>

              <h4 className="col-subheading" style={{ marginTop: 20 }}>The Trips It Took Over</h4>
              <ul className="trips-taken-list">
                {study.trips.map((trip, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} color="var(--resco-orange)" />
                    <span>{trip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="case-study-col quote-col">
              <h4 className="col-subheading">What the Property Says</h4>
              <div className="property-statement-box">
                <p>&ldquo;{study.statement}&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
