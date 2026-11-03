import React, { useEffect } from 'react';

export default function TermsView() {
  useEffect(() => {
    document.title = "Terms & Conditions — RESCO Delivery Robots";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="legal-page-view">
      <section className="legal-hero">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Legal</span>
            <h1 className="hero-headline">Terms of Service</h1>
            <p className="hero-subheadline">
              General commercial terms and website terms of use for RESCO robotics solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="legal-content-section">
        <div className="container">
          <div className="legal-article">
            <p className="legal-last-updated">Last updated: October 2026</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the RESCO website (rescotech.com) and associated demonstration booking services, you agree to comply with and be bound by these Terms of Service.
            </p>

            <h2>2. Demonstrations &amp; Site Surveys</h2>
            <p>
              Submitting a request for a demonstration or building site survey does not constitute a binding purchase order or commercial commitment by either party. A written quotation and feasibility statement are issued only following mutual agreement on building parameters, corridor readiness, and lift contractor sign-off.
            </p>

            <h2>3. Commercial Deployment &amp; Subscriptions</h2>
            <p>
              All hardware deployments (purchase or monthly subscription arrangements) for the RESCO M6 and RESCO M5 delivery robots are governed by individual master service agreements (MSAs) and site-specific service level agreements (SLAs) executed directly with PDR Videotronics (India) Private Limited.
            </p>

            <h2>4. Building &amp; Operational Prerequisites</h2>
            <p>
              As outlined in our technical specifications:
            </p>
            <ul>
              <li>RESCO machines operate strictly indoors across mapped levels.</li>
              <li>Multi-floor operations require a coordinated IoT interface module installed in passenger lifts with the authorization of your licensed lift maintenance contractor.</li>
              <li>Building corridors, ramps, and thresholds must adhere to the certified gradeability limits (up to 2.5 cm threshold and 12° slope for M6; 2.0 cm threshold and 10° slope for M5).</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>
              All trademarks, product names, logos, machine designs, software interfaces, and photographic media appearing on rescotech.com are the property of PDR Videotronics (India) Private Limited.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
            </p>

            <h2>7. Contact</h2>
            <p>
              For legal inquiries or corporate contracts:
            </p>
            <div className="legal-contact-card">
              <strong>PDR Videotronics (India) Private Limited</strong><br />
              99 Old Prabhadevi Road, Mumbai 400 025<br />
              Email: <a href="mailto:shlok@rescotech.com" className="legal-link">shlok@rescotech.com</a> / <a href="mailto:info@rescotech.com" className="legal-link">info@rescotech.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
