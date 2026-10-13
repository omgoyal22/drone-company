import React from 'react';

export default function Footer({ setActivePage }) {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Line 1 */}
        <div className="footer-top-line">
          RESCO — autonomous indoor delivery robots for hotels and residential buildings.
        </div>

        {/* Columns */}
        <div className="footer-columns">
          {/* Column 1: Menu links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li>
                <button type="button" className="footer-link" onClick={() => handleNav('home')}>
                  Home
                </button>
              </li>
              <li>
                <button type="button" className="footer-link" onClick={() => handleNav('robots')}>
                  The Robots
                </button>
              </li>
              <li>
                <button type="button" className="footer-link" onClick={() => handleNav('solutions')}>
                  Solutions
                </button>
              </li>
              <li>
                <button type="button" className="footer-link" onClick={() => handleNav('about')}>
                  About
                </button>
              </li>
              <li>
                <button type="button" className="footer-link" onClick={() => handleNav('contact')}>
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Legal */}
          <div>
            <h4 className="footer-col-title">Legal</h4>
            <ul className="footer-links">
              <li>
                <a href="#privacy" className="footer-link" onClick={(e) => e.preventDefault()}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="footer-link" onClick={(e) => e.preventDefault()}>
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Block */}
          <div>
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact-block">
              <strong>PDR Videotronics (India) Private Limited</strong>
              99 Old Prabhadevi Road, Mumbai 400 025<br />
              Phone: <a href="tel:+912224306494" className="footer-link">+91 22 2430 6494</a><br />
              Email: <a href="mailto:info@pdrworld.com" className="footer-link">info@pdrworld.com</a>
            </div>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 className="footer-col-title">Social</h4>
            <div className="footer-social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-link">YouTube</a>
              <span className="social-pdr-note">[LinkedIn, Instagram, YouTube — PDR to supply the links it wants shown]</span>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="footer-bottom-line">
          © 2026 PDR Videotronics (India) Private Limited. RESCO is a brand of PDR Videotronics (India) Private Limited.
        </div>
      </div>
    </footer>
  );
}
