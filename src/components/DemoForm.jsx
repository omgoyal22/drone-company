import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, X } from 'lucide-react';

export default function DemoForm({ isModal = false, onClose = null }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    propertyType: '', // Blank by default, user must choose
    floors: '',
    hasPassengerLifts: '', // Blank by default, user must choose
    roomsOrFlats: '',
    interestType: '', // Blank by default, user must choose
    deployTimeline: '', // Blank by default, user must choose
    notes: '',
    consent: false, // Unchecked by default
    hpField: '' // Honeypot spam protection
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.hpField) {
      // Spam honeypot triggered
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    if (onClose) onClose();
  };

  if (submitted) {
    return (
      <div className="submission-thankyou-state" id="demoFormThankYou">
        <div className="thankyou-icon-box">
          <CheckCircle2 size={52} className="thankyou-check" />
        </div>
        <h2 className="thankyou-title">Demo and survey request received</h2>
        <p className="thankyou-body">
          Thank you, <strong>{formData.name}</strong>. Your enquiry for <strong>{formData.company || 'your property'}</strong> has reached our Mumbai engineering team. We will call you within one business day to review your building details.
        </p>
        <div className="thankyou-details-box">
          <div className="thankyou-row">
            <span className="thankyou-label">Confirmation email:</span>
            <span className="thankyou-val">{formData.email}</span>
          </div>
          {formData.propertyType && (
            <div className="thankyou-row">
              <span className="thankyou-label">Property type:</span>
              <span className="thankyou-val" style={{ textTransform: 'capitalize' }}>{formData.propertyType}</span>
            </div>
          )}
          {formData.city && (
            <div className="thankyou-row">
              <span className="thankyou-label">City:</span>
              <span className="thankyou-val">{formData.city}</span>
            </div>
          )}
          <div className="thankyou-row">
            <span className="thankyou-label">Next step:</span>
            <span className="thankyou-val">We will phone you to check lift type, floor count and route feasibility.</span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
          {isModal ? (
            <button type="button" className="btn btn-primary" onClick={handleReset}>
              Close
            </button>
          ) : (
            <button 
              type="button" 
              className="btn btn-outline" 
              onClick={() => setSubmitted(false)}
            >
              Submit details for another building
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-full-form">
      {/* Honeypot field for spam protection */}
      <input 
        type="text" 
        name="user_web_address" 
        value={formData.hpField} 
        onChange={(e) => setFormData({ ...formData, hpField: e.target.value })} 
        style={{ display: 'none' }} 
        tabIndex="-1" 
        autoComplete="off" 
      />

      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label" htmlFor="dfName">Your name *</label>
          <input 
            type="text" 
            id="dfName" 
            className="form-control" 
            placeholder="e.g. Vikram Mehta" 
            required 
            value={formData.name} 
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="dfCompany">Company or property name *</label>
          <input 
            type="text" 
            id="dfCompany" 
            className="form-control" 
            placeholder="e.g. Grand Horizon Hotel / Tower B" 
            required 
            value={formData.company} 
            onChange={(e) => setFormData({ ...formData, company: e.target.value })} 
          />
        </div>
      </div>

      <div className="form-grid-3">
        <div className="form-group">
          <label className="form-label" htmlFor="dfEmail">Email *</label>
          <input 
            type="email" 
            id="dfEmail" 
            className="form-control" 
            placeholder="v.mehta@property.com" 
            required 
            value={formData.email} 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="dfPhone">Phone *</label>
          <input 
            type="tel" 
            id="dfPhone" 
            className="form-control" 
            placeholder="+91 98200 00000" 
            required 
            value={formData.phone} 
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="dfCity">City *</label>
          <input 
            type="text" 
            id="dfCity" 
            className="form-control" 
            placeholder="e.g. Mumbai, Bengaluru, Delhi NCR" 
            required 
            value={formData.city} 
            onChange={(e) => setFormData({ ...formData, city: e.target.value })} 
          />
        </div>
      </div>

      {/* Property Type Radio Group — NONE PRE-SELECTED */}
      <div className="form-group form-choice-block">
        <label className="form-label">Type of property * <span className="label-instruction">(select one)</span></label>
        <div className="choice-pills-row">
          {[
            { id: 'hotel', label: 'Hotel' },
            { id: 'gated community', label: 'Gated community' },
            { id: 'hospital', label: 'Hospital' },
            { id: 'office', label: 'Office' },
            { id: 'other', label: 'Other' }
          ].map((opt) => (
            <label 
              key={opt.id} 
              className={`choice-pill ${formData.propertyType === opt.id ? 'active' : ''}`}
            >
              <input 
                type="radio" 
                name="demoPropertyType" 
                value={opt.id} 
                required
                checked={formData.propertyType === opt.id} 
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })} 
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-grid-3">
        <div className="form-group">
          <label className="form-label" htmlFor="dfFloors">Number of floors the robot would serve *</label>
          <input 
            type="text" 
            id="dfFloors" 
            className="form-control" 
            placeholder="e.g. 12 floors" 
            required
            value={formData.floors} 
            onChange={(e) => setFormData({ ...formData, floors: e.target.value })} 
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="dfRooms">Rooms or flats — a range is fine *</label>
          <input 
            type="text" 
            id="dfRooms" 
            className="form-control" 
            placeholder="e.g. 150 – 200 rooms" 
            required
            value={formData.roomsOrFlats} 
            onChange={(e) => setFormData({ ...formData, roomsOrFlats: e.target.value })} 
          />
        </div>

        {/* Passenger Lifts — NONE PRE-SELECTED */}
        <div className="form-group">
          <label className="form-label">Does the building have passenger lifts? *</label>
          <div className="choice-pills-row">
            {[
              { id: 'yes', label: 'Yes' },
              { id: 'no', label: 'No' },
              { id: 'not sure', label: 'Not sure' }
            ].map((opt) => (
              <label 
                key={opt.id} 
                className={`choice-pill ${formData.hasPassengerLifts === opt.id ? 'active' : ''}`}
              >
                <input 
                  type="radio" 
                  name="demoHasPassengerLifts" 
                  value={opt.id} 
                  required
                  checked={formData.hasPassengerLifts === opt.id} 
                  onChange={(e) => setFormData({ ...formData, hasPassengerLifts: e.target.value })} 
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="form-grid-2">
        {/* Interested in — NONE PRE-SELECTED */}
        <div className="form-group">
          <label className="form-label">Interested in *</label>
          <div className="choice-pills-row">
            {[
              { id: 'purchase', label: 'Purchase' },
              { id: 'subscription', label: 'Subscription' },
              { id: 'not sure yet', label: 'Not sure yet' }
            ].map((opt) => (
              <label 
                key={opt.id} 
                className={`choice-pill ${formData.interestType === opt.id ? 'active' : ''}`}
              >
                <input 
                  type="radio" 
                  name="demoInterestType" 
                  value={opt.id} 
                  required
                  checked={formData.interestType === opt.id} 
                  onChange={(e) => setFormData({ ...formData, interestType: e.target.value })} 
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* When are you looking to deploy? — NONE PRE-SELECTED */}
        <div className="form-group">
          <label className="form-label">When are you looking to deploy? *</label>
          <div className="choice-pills-row">
            {[
              { id: 'now', label: 'Now' },
              { id: '3 months', label: '3 months' },
              { id: '6 months', label: '6 months' },
              { id: 'exploring', label: 'Exploring' }
            ].map((opt) => (
              <label 
                key={opt.id} 
                className={`choice-pill ${formData.deployTimeline === opt.id ? 'active' : ''}`}
              >
                <input 
                  type="radio" 
                  name="demoDeployTimeline" 
                  value={opt.id} 
                  required
                  checked={formData.deployTimeline === opt.id} 
                  onChange={(e) => setFormData({ ...formData, deployTimeline: e.target.value })} 
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="dfNotes">Anything else</label>
        <textarea 
          id="dfNotes" 
          className="form-control" 
          rows={3} 
          placeholder="Tell us about special corridor carpets, heavy peak delivery hours, or lift contractor details..." 
          value={formData.notes} 
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })} 
        />
      </div>

      {/* Consent checkbox — UNCHECKED BY DEFAULT */}
      <div className="form-consent-box">
        <label className="consent-checkbox-label" htmlFor="dfConsentCheckbox">
          <input 
            type="checkbox" 
            required 
            checked={formData.consent} 
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })} 
            id="dfConsentCheckbox"
          />
          <span>
            I agree to be contacted about this enquiry. <a href="#privacy" onClick={(e) => e.preventDefault()} className="privacy-link">Privacy Policy</a>
          </span>
        </label>
      </div>

      <div className="form-submit-row">
        <button type="submit" className="btn btn-primary btn-lg" id={isModal ? "modalBookDemoSubmit" : "contactBookDemoSubmit"}>
          Book a demo
        </button>
        <span className="submit-security-note">
          <ShieldCheck size={16} /> Handled directly by PDR Videotronics, Mumbai
        </span>
      </div>
    </form>
  );
}
