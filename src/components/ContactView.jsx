import React, { useState } from 'react';
import { Send, CheckCircle, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactView() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'hotel',
    city: '',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = "https://wa.me/912224306494?text=" + encodeURIComponent("Hi RESCO team, I would like to inquire about a site survey for our property.");

  return (
    <div className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 50px' }}>
          <span className="section-label">Connect &amp; Schedule</span>
          <h1 className="section-title">Schedule a Site Survey or Live Demo</h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Half a day with your engineering team and an hour with your lift contractor tells you which floors RESCO can serve and what the building needs to provide — before any commitment.
          </p>
        </div>

        <div className="contact-grid">
          {/* Form */}
          <div className="contact-form-card">
            <h2 className="contact-card-title">Site Survey Request</h2>
            
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <CheckCircle size={44} color="var(--resco-orange)" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, color: 'var(--text-primary)' }}>Request Received</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 24, lineHeight: 1.65 }}>
                  Thank you, <strong>{formData.name}</strong>. Our Mumbai robotics engineering team will contact you shortly to coordinate the route survey.
                </p>
                <button type="button" className="btn btn-secondary" onClick={() => setSubmitted(false)}>
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="cpName">Your Name *</label>
                    <input
                      type="text"
                      id="cpName"
                      className="form-control"
                      placeholder="Rahul Sharma"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="cpPhone">Phone Number *</label>
                    <input
                      type="tel"
                      id="cpPhone"
                      className="form-control"
                      placeholder="+91 98200 00000"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="cpEmail">Work Email *</label>
                  <input
                    type="email"
                    id="cpEmail"
                    className="form-control"
                    placeholder="r.sharma@property.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="cpType">Property Type *</label>
                    <select
                      id="cpType"
                      className="form-control"
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      required
                    >
                      <option value="hotel">Hotel / Hospitality</option>
                      <option value="residential">Gated Community / Residential</option>
                      <option value="commercial">Commercial Office</option>
                      <option value="hospital">Hospital / Healthcare</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="cpCity">City / Location *</label>
                    <input
                      type="text"
                      id="cpCity"
                      className="form-control"
                      placeholder="Mumbai, BKC"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="cpDetails">Building Details (Floors, lifts, special ramps)</label>
                  <textarea
                    id="cpDetails"
                    className="form-control"
                    rows={3}
                    placeholder="Tell us about the property layout..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg form-submit-btn">
                  <Send size={16} /> Schedule Site Survey
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & FAQ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="contact-info-card">
              <h3 className="contact-card-title" style={{ fontSize: 18 }}>Direct Contact</h3>
              
              <div className="contact-info-list">
                <div className="contact-info-row">
                  <MapPin size={18} color="var(--resco-orange)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>PDR Videotronics (India) Private Limited</strong>
                    <div style={{ marginTop: 2 }}>99 Old Prabhadevi Road, Mumbai 400 025</div>
                  </div>
                </div>

                <div className="contact-info-row">
                  <Phone size={16} color="var(--resco-orange)" style={{ flexShrink: 0 }} />
                  <a href="tel:+912224306494" style={{ color: 'var(--text-primary)' }}>+91 22 2430 6494</a>
                </div>

                <div className="contact-info-row">
                  <Mail size={16} color="var(--resco-orange)" style={{ flexShrink: 0 }} />
                  <a href="mailto:info@pdrworld.com" style={{ color: 'var(--text-primary)' }}>info@pdrworld.com</a>
                </div>
              </div>

              <div style={{ marginTop: 22 }}>
                <a href={whatsappUrl} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} /> Talk to us on WhatsApp
                </a>
              </div>
            </div>

            {/* FAQ Block */}
            <div className="contact-info-card">
              <h3 className="contact-card-title" style={{ fontSize: 18, marginBottom: 16 }}>Common Questions</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 6 }}>Does the recipient need a smartphone app?</h4>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    No. The robot automatically telephones the room or flat on arrival. The guest or resident picks up the receiver as usual.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 6 }}>How does it interface with lifts?</h4>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    A dedicated industrial interface module is installed on your lift bank in direct coordination with your lift maintenance provider.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 6 }}>What happens if there are thresholds or ramps?</h4>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    During the initial floor-by-floor site survey, our team tests all ramps and thresholds to confirm exact floor eligibility before quotation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
