import React, { useEffect } from 'react';

export default function PrivacyPolicyView() {
  useEffect(() => {
    document.title = "Privacy Policy — RESCO Delivery Robots";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="legal-page-view">
      <section className="legal-hero">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Legal</span>
            <h1 className="hero-headline">Privacy Policy</h1>
            <p className="hero-subheadline">
              How RESCO and PDR Videotronics (India) Private Limited handle property, contact, and sensor information.
            </p>
          </div>
        </div>
      </section>

      <section className="legal-content-section">
        <div className="container">
          <div className="legal-article">
            <p className="legal-last-updated">Last updated: October 2026</p>

            <h2>1. Overview</h2>
            <p>
              RESCO is the commercial robotics brand of PDR Videotronics (India) Private Limited (&quot;PDR&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), headquartered at 99 Old Prabhadevi Road, Mumbai 400 025. We respect the privacy of our website visitors, clients, building residents, and hotel guests.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              When you submit a demonstration, site survey, brochure, or partner enquiry through our website (rescotech.com), we collect:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> Your name, business email address, phone number, and city.</li>
              <li><strong>Property Details:</strong> Building or property name, property type (hotel, gated community, hospital, office), floor count, passenger lift status, approximate unit count, and deployment timeline.</li>
              <li><strong>Communications:</strong> Any notes, questions, or requirements you share with us.</li>
            </ul>

            <h2>3. Autonomous Robot Operation &amp; Sensing Data</h2>
            <p>
              RESCO autonomous indoor delivery machines (M6 and M5) utilize time-of-flight (TOF) radar, optical depth sensors, and SLAM guidance strictly for real-time corridor navigation, collision avoidance, and lift entry.
            </p>
            <ul>
              <li>Navigation sensors process spatial depth locally to calculate routes and prevent contact with obstacles, guests, and residents.</li>
              <li>Our standard delivery machines do not maintain general surveillance recording of private corridors or guest rooms.</li>
              <li>Where property-specific security or delivery audit logging is required, data policies are configured directly with property management during the site survey.</li>
            </ul>

            <h2>4. How We Use Your Information</h2>
            <p>We use the details you provide to:</p>
            <ul>
              <li>Conduct feasibility assessments and schedule on-site building route surveys.</li>
              <li>Transmit requested product brochures, technical specifications, and written proposals.</li>
              <li>Respond to inquiries via phone, email, or WhatsApp.</li>
              <li>Provide ongoing operational and lift integration support for commissioned units.</li>
            </ul>

            <h2>5. Data Sharing &amp; Third Parties</h2>
            <p>
              We do not sell, rent, or trade your personal information. Information is accessed only by authorized PDR Videotronics personnel and trusted technical contractors (such as coordinated lift maintenance partners) strictly to execute site surveys and installations.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              For any questions regarding this Privacy Policy or your data, please contact:
            </p>
            <div className="legal-contact-card">
              <strong>PDR Videotronics (India) Private Limited</strong><br />
              99 Old Prabhadevi Road, Mumbai 400 025<br />
              Email: <a href="mailto:shlok@rescotech.com" className="legal-link">shlok@rescotech.com</a> / <a href="mailto:info@rescotech.com" className="legal-link">info@rescotech.com</a><br />
              Phone: +91 22 2430 6494
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
