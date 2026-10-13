import React, { useState } from 'react';
import { X, CheckCircle, Send } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'hotel',
    city: '',
    buildingDetails: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
              <CheckCircle size={48} color="var(--resco-orange)" />
            </div>
            <h3 className="modal-title">Site Survey Request Received</h3>
            <p className="modal-desc" style={{ maxWidth: 420, margin: '0 auto 24px' }}>
              Thank you, <strong>{formData.name}</strong>. Our Mumbai robotics engineering team will contact you within 24 hours to coordinate with your engineering and lift contractor teams.
            </p>
            <button type="button" className="btn btn-primary" onClick={handleReset}>
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="modal-title">Book a Demo or Site Survey</h3>
            <p className="modal-desc">
              Half a day with your engineering team and an hour with your lift contractor tells you which floors RESCO can serve — before any commitment.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="mName">Your Name *</label>
                  <input
                    type="text"
                    id="mName"
                    className="form-control"
                    placeholder="e.g. Rahul Sharma"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="mPhone">Phone Number *</label>
                  <input
                    type="tel"
                    id="mPhone"
                    className="form-control"
                    placeholder="+91 98200 00000"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="mEmail">Work Email *</label>
                <input
                  type="email"
                  id="mEmail"
                  className="form-control"
                  placeholder="r.sharma@property.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="mType">Property Type *</label>
                  <select
                    id="mType"
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
                  <label className="form-label" htmlFor="mCity">City / Location *</label>
                  <input
                    type="text"
                    id="mCity"
                    className="form-control"
                    placeholder="e.g. Mumbai, BKC"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="mDetails">Number of Floors / Lifts (Optional)</label>
                <input
                  type="text"
                  id="mDetails"
                  className="form-control"
                  placeholder="e.g. 18 floors, 3 lifts"
                  value={formData.buildingDetails}
                  onChange={(e) => setFormData({ ...formData, buildingDetails: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg form-submit-btn">
                <Send size={18} /> Schedule Site Survey
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
