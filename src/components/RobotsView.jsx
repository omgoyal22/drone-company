import React, { useEffect } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Map, 
  Radio, 
  Eye, 
  ArrowUpDown, 
  BatteryCharging, 
  ShieldCheck, 
  Layers, 
  Laptop, 
  Check, 
  ChevronRight 
} from 'lucide-react';

export default function RobotsView({ onOpenDemo }) {
  useEffect(() => {
    // Set page title and meta description per specification
    document.title = "RESCO M6 Delivery Robot — How It Works and Full Specification";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Specification, navigation, lift integration and building requirements for the RESCO M6 autonomous indoor delivery robot.";
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const m6Specs = [
    { label: "Dimensions", value: "500 × 500 × 950 mm" },
    { label: "Weight", value: "55 kg" },
    { label: "Rated load", value: "10 kg" },
    { label: "Cabin", value: "280 × 280 × 330 mm, electric door" },
    { label: "Navigation", value: "SLAM, autonomous obstacle avoidance" },
    { label: "Sensing", value: "High-precision TOF radar and RGBD binocular camera" },
    { label: "Display", value: "10.1 inch touchscreen, 1920 × 1080" },
    { label: "Operating system", value: "Android / ROS" },
    { label: "Speed", value: "0 – 1.5 m/s, adjustable" },
    { label: "Gradeability", value: "12° slope · 2.5 cm step, adaptive suspension" },
    { label: "Endurance", value: "7 – 9 hours unloaded, automatic return to dock" },
    { label: "Lift", value: "Automatic lift-taking through an IoT module" },
    { label: "Notification", value: "Automatic call to the room or flat telephone" },
    { label: "Management", value: "Cloud dashboard with live location and task reporting" },
    { label: "Optional", value: "In-cabin object recognition" }
  ];

  const m5Specs = [
    { label: "Dimensions", value: "550 × 550 × 1000 mm" },
    { label: "Weight", value: "65 kg" },
    { label: "Rated load", value: "15 kg" },
    { label: "Cabins", value: "Two — 335 × 300 × 180 mm and 335 × 300 × 250 mm" },
    { label: "Screen", value: "21.5 inch, 1920 × 1080" },
    { label: "Navigation", value: "SLAM" },
    { label: "Sensing", value: "TOF radar" },
    { label: "Operating system", value: "Android / ROS" },
    { label: "Gradeability", value: "10° slope · 2 cm step" },
    { label: "Endurance", value: "12 hours" },
    { label: "Lift", value: "Automatic lift-taking through an IoT module" },
    { label: "Notification", value: "Automatic call to the room or flat telephone" },
    { label: "Management", value: "Cloud dashboard with status monitoring and remote software updates" },
    { label: "Optional", value: "Custom exterior finish in the property’s own branding" }
  ];

  const comparisonRows = [
    {
      feature: "Cabins",
      m6: "One",
      m5: "Two"
    },
    {
      feature: "Rated load",
      m6: "10 kg",
      m5: "15 kg"
    },
    {
      feature: "Width",
      m6: "500 mm",
      m5: "550 mm"
    },
    {
      feature: "Screen",
      m6: "10.1 inch",
      m5: "21.5 inch, can carry your branding"
    },
    {
      feature: "Steps and slopes",
      m6: "Up to 2.5 cm · 12°",
      m5: "Up to 2 cm · 10°"
    },
    {
      feature: "Suits",
      m6: "Tight corridors and small lifts; buildings with thresholds or ramps at the limit",
      m5: "Higher delivery volumes; two drops in one trip; lobbies where the screen earns its place"
    }
  ];

  const suitabilityItems = [
    "Passenger lifts that can take an interface module, and a lift contractor willing to fit it — without this, the robot serves one floor.",
    "Network coverage along the whole route, including inside the lift car.",
    "A power point at the dock, on a circuit that is not switched off at night.",
    "A room or flat telephone system, so the robot can announce its arrival.",
    "A step-free route — thresholds no higher than 2.5 cm and slopes no steeper than 12° for the M6; 2 cm and 10° for the M5.",
    "Corridors wide enough for a 500 mm machine to turn, not merely to fit — 550 mm for the M5.",
    "Someone at the property who owns the deployment and can arrange lift access and mapping windows."
  ];

  return (
    <div className="robots-page-view">
      {/* ===================================================================
          Section 1 — Hero
          =================================================================== */}
      <section className="robots-hero">
        <div className="container">
          <div className="robots-hero-content section-header text-center">
            <span className="section-label">Fleet Hardware</span>
            <h1 className="hero-headline">The machines.</h1>
            <p className="hero-subheadline">
              Two delivery robots for indoor use. Both carry something from one point in a building to another, on their own, and hand it over. One has a single cabin, the other two.
            </p>
          </div>

          <div className="robots-hero-image-wrapper">
            <img 
              src="/images/both-robots.jpg" 
              alt="RESCO M6 and RESCO M5 delivery robots side by side against a plain studio background, full height" 
              width="1200"
              height="675"
            />
            <div className="robots-hero-caption">
              <span>RESCO M6 (single cabin, 500 mm) &amp; RESCO M5 (dual cabin + 21.5&quot; screen, 550 mm)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 2 — Model 1: RESCO M6
          =================================================================== */}
      <section className="model-detail-section" id="model-m6">
        <div className="container">
          <div className="model-header section-header text-center">
            <span className="section-label">Model 01 · RESCO M6</span>
            <h2 className="section-title">RESCO M6</h2>
            <p className="model-strapline">Single cabin. The standard machine for room and flat delivery.</p>
          </div>

          <div className="model-split-grid">
            <div className="model-editorial-col">
              <div className="model-photo-box">
                <img 
                  src="/images/resco-m6.jpg" 
                  alt="RESCO M6 compact delivery robot in a building corridor" 
                />
                <span className="model-photo-tag">Compact 500 mm Footprint</span>
              </div>
              <div className="model-body-text">
                <p>
                  Think of it as a lockable box on a wheeled base that knows the floor plan of your building, sees what is in front of it, and can ask the lift to take it to another floor.
                </p>
                <p>
                  Staff put an item in the cabin and enter a destination. It closes and locks, drives the corridor avoiding people and trolleys, calls the lift, rides to the floor, drives to the door and telephones the room. The recipient opens the cabin at the touchscreen, takes the item, and the robot returns to its dock.
                </p>
              </div>
            </div>

            <div className="model-specs-col">
              <h3 className="specs-table-title">Specification</h3>
              <div className="specs-table">
                {m6Specs.map((item, idx) => (
                  <div className="spec-row" key={idx}>
                    <span className="spec-label">{item.label}</span>
                    <span className="spec-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 3 — Model 2: RESCO M5
          =================================================================== */}
      <section className="model-detail-section alt-bg" id="model-m5">
        <div className="container">
          <div className="model-header section-header text-center">
            <span className="section-label">Model 02 · RESCO M5</span>
            <h2 className="section-title">RESCO M5</h2>
            <p className="model-strapline">Two cabins, and a screen the building can use.</p>
          </div>

          <div className="model-split-grid">
            <div className="model-editorial-col">
              <div className="model-photo-box">
                <img 
                  src="/images/resco-m5.jpg" 
                  alt="RESCO M5 dual cabin delivery robot with 21.5 inch vertical screen" 
                />
                <span className="model-photo-tag">Dual Cabins + 21.5&quot; Display</span>
              </div>
              <div className="model-body-text">
                <p>
                  The M5 works exactly as the M6 does — it maps the building, avoids obstacles, calls the lift and telephones the room — but it carries two separate cabins instead of one, so a single trip can serve two rooms or carry two orders that must stay apart.
                </p>
                <p>
                  The full-height screen on the front is large enough to run the property’s own branding, wayfinding or announcements between deliveries.
                </p>
              </div>
            </div>

            <div className="model-specs-col">
              <h3 className="specs-table-title">Specification</h3>
              <div className="specs-table">
                {m5Specs.map((item, idx) => (
                  <div className="spec-row" key={idx}>
                    <span className="spec-label">{item.label}</span>
                    <span className="spec-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 3b — Which model
          =================================================================== */}
      <section className="comparison-section" id="comparison">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Comparison</span>
            <h2 className="section-title">The difference in one table.</h2>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="th-feature">Specification</th>
                  <th className="th-model">M6</th>
                  <th className="th-model">M5</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="td-feature">{row.feature}</td>
                    <td className="td-val">{row.m6}</td>
                    <td className="td-val">{row.m5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="comparison-bottom-note">
            <p>Which one suits your building comes out of the survey. Most properties start with one machine and add to it.</p>
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 4 — How it finds its way
          =================================================================== */}
      <section className="navigation-section alt-bg" id="navigation">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Navigation &amp; Sensing</span>
            <h2 className="section-title">How it finds its way</h2>
          </div>

          <div className="nav-cards-grid">
            <div className="nav-card">
              <div className="nav-card-icon">
                <Map size={24} />
              </div>
              <h3 className="nav-card-title">The map it builds</h3>
              <p className="nav-card-body">
                During installation the robot is driven around every floor it will serve and builds its own map of walls, doors and fixed obstacles. After that it always knows where it is, and plans a fresh route for every trip. Older delivery machines follow tape or a painted line on the floor and stop when something blocks it. This one has nothing fixed to the floor and drives around the obstruction.
              </p>
            </div>

            <div className="nav-card">
              <div className="nav-card-icon">
                <Radio size={24} />
              </div>
              <h3 className="nav-card-title">Distance</h3>
              <p className="nav-card-body">
                A high-precision TOF radar measures how far away everything around it is, many times a second. That is what keeps it off walls and tells it whether a corridor is clear.
              </p>
            </div>

            <div className="nav-card">
              <div className="nav-card-icon">
                <Eye size={24} />
              </div>
              <h3 className="nav-card-title">Depth</h3>
              <p className="nav-card-body">
                A binocular depth camera judges shape and distance the way two eyes do. It separates a person from a pillar, works out whether a gap is wide enough, and sees that something is moving towards it rather than standing still.
              </p>
            </div>
          </div>

          <div className="nav-replan-banner">
            <span className="replan-tag">Obstacle response</span>
            <p className="replan-text">
              If the route is blocked it re-plans. If it cannot get through at all, it holds position and reports the blockage rather than waiting silently.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 5 — Lifts
          =================================================================== */}
      <section className="lifts-section" id="lifts">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Multi-Floor Transit</span>
            <h2 className="section-title">A robot cannot press a button.</h2>
          </div>

          <div className="lifts-grid">
            <div className="lifts-content">
              <p className="lifts-body">
                To move between floors it needs a small module fitted inside the lift control system, which lets it call the lift over the network and tells it which floor the car is on and when the doors are open.
              </p>
              <p className="lifts-body">
                The work is done by your own lift maintenance contractor, with their approval, and we handle the coordination. If your lifts cannot take a module, the robot still works — but only on the floor it is standing on. We establish this at the survey, before anything is promised.
              </p>
            </div>
            <div className="lifts-callout-card">
              <div className="lifts-callout-icon">
                <ArrowUpDown size={32} />
              </div>
              <h3 className="lifts-callout-title">The Lift Interface Scope</h3>
              <ul className="lifts-callout-list">
                <li>Fitted directly into your lift control system</li>
                <li>Operates with your lift contractor&apos;s sign-off</li>
                <li>Relays floor position, door status and call commands</li>
                <li>Checked on-site during the pre-quotation survey</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 6 & 7 — Charging, Security & Records
          =================================================================== */}
      <section className="charging-security-section alt-bg" id="charging-security">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Docking &amp; Records</span>
            <h2 className="section-title">Charging, security and records.</h2>
          </div>

          <div className="dual-block-grid">
            {/* Section 6 — Charging */}
            <div className="info-block-card">
              <div className="info-block-header">
                <div className="info-icon-wrapper">
                  <BatteryCharging size={24} />
                </div>
                <div>
                  <span className="section-label">Power &amp; Docking</span>
                  <h3 className="info-block-title">Charging</h3>
                </div>
              </div>
              <p className="info-block-desc">
                It returns to its charging dock on its own when a task finishes or the battery runs low, and connects without help. Runtime is 7 to 9 hours unloaded; a loaded robot in a building with thick carpet and slopes will do less. The dock needs a power point that stays live overnight.
              </p>
            </div>

            {/* Section 7 — Security and records */}
            <div className="info-block-card">
              <div className="info-block-header">
                <div className="info-icon-wrapper">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <span className="section-label">Integrity &amp; Auditing</span>
                  <h3 className="info-block-title">Security and records</h3>
                </div>
              </div>
              <div className="security-points-list">
                <div className="security-point">
                  <span className="bullet-dot"></span>
                  <p>The cabin locks when it is loaded and opens at the destination. What is inside cannot be taken out on the way.</p>
                </div>
                <div className="security-point">
                  <span className="bullet-dot"></span>
                  <p>Every trip is recorded — time, route, floor and whether the handover completed. A disputed delivery stops being a matter of memory.</p>
                </div>
                <div className="security-point">
                  <span className="bullet-dot"></span>
                  <p>In-cabin recognition is available as an option, confirming the cabin is genuinely empty after handover.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 8 — Running it
          =================================================================== */}
      <section className="running-section" id="running-it">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Operations</span>
            <h2 className="section-title">Running it</h2>
          </div>

          <div className="running-grid">
            {/* Group 1 — Three ways a job reaches the robot */}
            <div className="running-card">
              <div className="running-card-header">
                <Layers size={22} className="running-header-icon" />
                <h3 className="running-subtitle">Three ways a job reaches the robot</h3>
              </div>
              <div className="running-items-list">
                <div className="running-item">
                  <h4 className="running-item-title">At the robot</h4>
                  <p className="running-item-desc">Load the cabin and enter the room number on the touchscreen. Nothing to integrate; this works from day one.</p>
                </div>
                <div className="running-item">
                  <h4 className="running-item-title">From the dashboard</h4>
                  <p className="running-item-desc">The front desk dispatches and tracks tasks from a browser, with the robot live on a floor plan.</p>
                </div>
                <div className="running-item">
                  <h4 className="running-item-title">From your own system</h4>
                  <p className="running-item-desc">Orders raised in the property system can create robot tasks directly. Scoped per property at the survey.</p>
                </div>
              </div>
            </div>

            {/* Group 2 — What you get back */}
            <div className="running-card">
              <div className="running-card-header">
                <Laptop size={22} className="running-header-icon" />
                <h3 className="running-subtitle">What you get back</h3>
              </div>
              <div className="running-items-list">
                <div className="running-item">
                  <h4 className="running-item-title">Delivery audit</h4>
                  <p className="running-item-desc">A record of every trip — time, route, floor and whether the handover completed.</p>
                </div>
                <div className="running-item">
                  <h4 className="running-item-title">Floor visibility</h4>
                  <p className="running-item-desc">Live location of each robot on a floor plan.</p>
                </div>
                <div className="running-item">
                  <h4 className="running-item-title">Remote health</h4>
                  <p className="running-item-desc">Status monitoring and software updates delivered remotely, without a site visit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 9 — Is your building suitable?
          =================================================================== */}
      <section className="suitability-section alt-bg" id="suitability">
        <div className="container">
          <div className="suitability-header section-header text-center">
            <span className="section-label">Property Pre-requisites</span>
            <h2 className="section-title">Seven things that decide it.</h2>
            <p className="suitability-intro">
              It takes five minutes to answer these, and they tell you more than any brochure.
            </p>
          </div>

          <div className="suitability-list">
            {suitabilityItems.map((text, idx) => (
              <div className="suitability-item" key={idx}>
                <span className="suitability-num">0{idx + 1}</span>
                <p className="suitability-text">{text}</p>
              </div>
            ))}
          </div>

          <div className="suitability-cta-band">
            <p className="suitability-cta-note">
              We confirm all of this in a written survey report before you commit to anything.
            </p>
            <button 
              type="button" 
              className="btn btn-primary btn-lg" 
              onClick={onOpenDemo}
              id="robotsBookSurveyBtn"
            >
              Book a survey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
