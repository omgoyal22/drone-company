import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Download, 
  Handshake, 
  ShieldCheck, 
  ArrowRight, 
  Send, 
  Check, 
  HelpCircle,
  FileCheck,
  X
} from 'lucide-react';

export default function ContactView() {
  useEffect(() => {
    // Set page title and meta description per specification
    document.title = "Book a Demo — RESCO Delivery Robots";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Book a demonstration or a site survey for a RESCO indoor delivery robot. Mumbai based, deployed and supported across India.";
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Main Form State
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    propertyType: 'hotel',
    floors: '',
    hasPassengerLifts: 'yes',
    roomsOrFlats: '',
    interestType: 'not sure yet',
    deployTimeline: 'exploring',
    notes: '',
    consent: false,
    hpField: '' // Honeypot spam protection
  });

  // Brochure Form State
  const [brochureSubmitted, setBrochureSubmitted] = useState(false);
  const [brochureData, setBrochureData] = useState({
    name: '',
    email: '',
    company: ''
  });

  // Partner Modal State
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [partnerData, setPartnerData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    market: '',
    notes: ''
  });

  // FAQ Accordion State (all 13 questions from specification)
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Does it need a lift?",
      a: "For more than one floor, yes — and the lift needs a small interface module fitted by your own lift contractor. On a single floor it works without one."
    },
    {
      q: "What happens if the corridor is blocked?",
      a: "It goes around obstacles rather than stopping at them. If a corridor is blocked completely it holds position and reports the blockage."
    },
    {
      q: "How does the recipient know it has arrived?",
      a: "It telephones the room or flat automatically. Nobody needs to install an app."
    },
    {
      q: "Is the delivery secure?",
      a: "The cabin locks when it is loaded and opens at the destination. Every trip is logged with time, route, floor and whether the handover completed."
    },
    {
      q: "How much can it carry?",
      a: "Up to 10 kg, in a cabin of 280 × 280 × 330 mm. In practice the space runs out before the weight does."
    },
    {
      q: "How long does it run between charges?",
      a: "7 to 9 hours unloaded. It returns to its dock and charges on its own; expect less in a building with thick carpet and slopes."
    },
    {
      q: "Can it go outdoors or climb stairs?",
      a: "No. It is an indoor machine with no weather protection, and no robot in this class climbs stairs."
    },
    {
      q: "What about cameras and privacy?",
      a: "Its sensors exist to see obstacles and judge distance so it can drive safely. If your property has a policy on recording, raise it at the survey and we will confirm what the configuration allows."
    },
    {
      q: "How many deliveries can it do in a day?",
      a: "That depends on your lift waiting times and how long each trip is, both of which belong to the building rather than the robot. We size it during the survey instead of quoting a number from a brochure."
    },
    {
      q: "How long does deployment take?",
      a: "Survey, then installation and mapping, then handover and training. The lift interface is usually the longest step because it depends on your lift contractor."
    },
    {
      q: "Can we buy it, or only rent?",
      a: "Either. Purchase or a monthly subscription over a fixed term. We quote both after the survey."
    },
    {
      q: "Which of the two models should we take?",
      a: "The M6 is narrower and handles slightly higher thresholds, so it suits tight corridors and older buildings. The M5 carries two cabins and a large screen, so it suits higher delivery volumes and lobbies where the screen is useful. The survey settles it."
    },
    {
      q: "Can the robot carry our own branding?",
      a: "The M5 can be finished in the property’s branding, and its screen can run your own content between deliveries."
    }
  ];

  const handleMainSubmit = (e) => {
    e.preventDefault();
    if (formData.hpField) {
      // Spam honeypot triggered
      return;
    }
    setSubmitted(true);
  };

  const handleBrochureSubmit = (e) => {
    e.preventDefault();
    setBrochureSubmitted(true);
  };

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    setPartnerSubmitted(true);
  };

  const whatsappUrl = "https://wa.me/912224306494?text=" + encodeURIComponent("Hi RESCO team, I would like to inquire about an on-site demonstration and survey for our property.");

  return (
    <div className="contact-page-view">
      {/* ===================================================================
          Section 1 — Hero
          =================================================================== */}
      <section className="contact-hero" id="contact-hero">
        <div className="container">
          <div className="contact-hero-content section-header text-center">
            <span className="section-label">On-Site Demonstration &amp; Survey</span>
            <h1 className="hero-headline">See it in your own building.</h1>
            <p className="hero-subheadline">
              Tell us about the property and we will come back with what the robot can do there — and what it cannot.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 2 — The Form
          =================================================================== */}
      <section className="contact-form-section" id="booking-form">
        <div className="container">
          <div className="contact-main-card">
            {submitted ? (
              <div className="submission-thankyou-state" id="submissionThankYou">
                <div className="thankyou-icon-box">
                  <CheckCircle2 size={56} className="thankyou-check" />
                </div>
                <h2 className="thankyou-title">Demo &amp; Survey Request Received</h2>
                <p className="thankyou-body">
                  Thank you, <strong>{formData.name}</strong>. Your enquiry for <strong>{formData.company || 'your property'}</strong> has been registered with our Mumbai engineering office.
                </p>
                <div className="thankyou-details-box">
                  <div className="thankyou-row">
                    <span className="thankyou-label">Confirmation Email:</span>
                    <span className="thankyou-val">{formData.email}</span>
                  </div>
                  <div className="thankyou-row">
                    <span className="thankyou-label">Property Type:</span>
                    <span className="thankyou-val">{formData.propertyType}</span>
                  </div>
                  <div className="thankyou-row">
                    <span className="thankyou-label">City:</span>
                    <span className="thankyou-val">{formData.city}</span>
                  </div>
                  <div className="thankyou-row">
                    <span className="thankyou-label">Next Step:</span>
                    <span className="thankyou-val">A senior robotics surveyor will call you to review floor parameters.</span>
                  </div>
                </div>
                <button 
                  type="button" 
                  className="btn btn-outline" 
                  onClick={() => setSubmitted(false)}
                >
                  Submit details for another building
                </button>
              </div>
            ) : (
              <form onSubmit={handleMainSubmit} className="contact-full-form">
                {/* Honeypot field (hidden from genuine users) */}
                <input 
                  type="text" 
                  name="website_url" 
                  value={formData.hpField} 
                  onChange={(e) => setFormData({ ...formData, hpField: e.target.value })} 
                  style={{ display: 'none' }} 
                  tabIndex="-1" 
                  autoComplete="off" 
                />

                <div className="form-section-header">
                  <h3 className="form-legend-title">Property &amp; Operational Information</h3>
                  <p className="form-legend-desc">All fields marked with an asterisk (*) are required.</p>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="ctName">Your Name *</label>
                    <input 
                      type="text" 
                      id="ctName" 
                      className="form-control" 
                      placeholder="e.g. Vikram Mehta" 
                      required 
                      value={formData.name} 
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="ctCompany">Company or property name *</label>
                    <input 
                      type="text" 
                      id="ctCompany" 
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
                    <label className="form-label" htmlFor="ctEmail">Email *</label>
                    <input 
                      type="email" 
                      id="ctEmail" 
                      className="form-control" 
                      placeholder="v.mehta@property.com" 
                      required 
                      value={formData.email} 
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="ctPhone">Phone *</label>
                    <input 
                      type="tel" 
                      id="ctPhone" 
                      className="form-control" 
                      placeholder="+91 98200 00000" 
                      required 
                      value={formData.phone} 
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="ctCity">City *</label>
                    <input 
                      type="text" 
                      id="ctCity" 
                      className="form-control" 
                      placeholder="e.g. Mumbai, Bengaluru, Delhi NCR" 
                      required 
                      value={formData.city} 
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })} 
                    />
                  </div>
                </div>

                {/* Property Type Radio Group */}
                <div className="form-group form-choice-block">
                  <label className="form-label">Type of property *</label>
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
                          name="propertyType" 
                          value={opt.id} 
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
                    <label className="form-label" htmlFor="ctFloors">Number of floors the robot would serve *</label>
                    <input 
                      type="text" 
                      id="ctFloors" 
                      className="form-control" 
                      placeholder="e.g. 12 floors" 
                      required
                      value={formData.floors} 
                      onChange={(e) => setFormData({ ...formData, floors: e.target.value })} 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="ctRooms">Rooms or flats — a range is fine *</label>
                    <input 
                      type="text" 
                      id="ctRooms" 
                      className="form-control" 
                      placeholder="e.g. 150 – 200 rooms" 
                      required
                      value={formData.roomsOrFlats} 
                      onChange={(e) => setFormData({ ...formData, roomsOrFlats: e.target.value })} 
                    />
                  </div>

                  {/* Passenger Lifts */}
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
                            name="hasPassengerLifts" 
                            value={opt.id} 
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
                  {/* Interested in */}
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
                            name="interestType" 
                            value={opt.id} 
                            checked={formData.interestType === opt.id} 
                            onChange={(e) => setFormData({ ...formData, interestType: e.target.value })} 
                          />
                          <span>{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* When are you looking to deploy? */}
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
                            name="deployTimeline" 
                            value={opt.id} 
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
                  <label className="form-label" htmlFor="ctNotes">Anything else</label>
                  <textarea 
                    id="ctNotes" 
                    className="form-control" 
                    rows={3} 
                    placeholder="Tell us about special corridor carpets, heavy peak delivery hours, or lift contractor details..." 
                    value={formData.notes} 
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })} 
                  />
                </div>

                {/* Consent checkbox */}
                <div className="form-consent-box">
                  <label className="consent-checkbox-label">
                    <input 
                      type="checkbox" 
                      required 
                      checked={formData.consent} 
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })} 
                      id="ctConsentCheckbox"
                    />
                    <span>
                      I agree to be contacted about this enquiry. <a href="#privacy" onClick={(e) => e.preventDefault()} className="privacy-link">Privacy Policy</a>
                    </span>
                  </label>
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="btn btn-primary btn-lg" id="contactBookDemoSubmit">
                    Book a demo
                  </button>
                  <span className="submit-security-note">
                    <ShieldCheck size={16} /> Encrypted transmission · Handled directly by PDR Videotronics, Mumbai
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 3 — What happens next
          =================================================================== */}
      <section className="contact-next-section alt-bg" id="what-happens-next">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Subsequent Steps</span>
            <h2 className="section-title">What happens next</h2>
          </div>

          <div className="next-steps-grid">
            <div className="next-step-card">
              <span className="next-step-num">1</span>
              <h3 className="next-step-title">Initial Scope Call</h3>
              <p className="next-step-desc">
                We call to understand the building — lifts, floors, and the trips you want covered.
              </p>
            </div>

            <div className="next-step-card">
              <span className="next-step-num">2</span>
              <h3 className="next-step-title">On-Site Route Survey</h3>
              <p className="next-step-desc">
                We survey the route with your engineering team and your lift contractor.
              </p>
            </div>

            <div className="next-step-card">
              <span className="next-step-num">3</span>
              <h3 className="next-step-title">Written Statement &amp; Quote</h3>
              <p className="next-step-desc">
                You get a written statement of which floors can be served, and a quotation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 3b & 3c — Brochure & Channel Partners
          =================================================================== */}
      <section className="contact-secondary-grid-section" id="brochure-and-partners">
        <div className="container">
          <div className="secondary-split-grid">
            {/* Section 3b — Download the brochure */}
            <div className="brochure-card">
              <div className="card-top-icon">
                <Download size={24} />
              </div>
              <h3 className="brochure-heading">Prefer to read it first?</h3>
              <p className="brochure-body">
                Leave a name and an email and the product brochure comes straight through.
              </p>

              {brochureSubmitted ? (
                <div className="brochure-success">
                  <CheckCircle2 size={24} className="brochure-check" />
                  <p>Brochure sent to <strong>{brochureData.email}</strong>. Please check your inbox.</p>
                </div>
              ) : (
                <form onSubmit={handleBrochureSubmit} className="brochure-form">
                  <div className="form-group">
                    <label className="form-label" htmlFor="brName">Name</label>
                    <input 
                      type="text" 
                      id="brName" 
                      className="form-control" 
                      placeholder="Your name" 
                      required 
                      value={brochureData.name} 
                      onChange={(e) => setBrochureData({ ...brochureData, name: e.target.value })} 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="brEmail">Email</label>
                    <input 
                      type="email" 
                      id="brEmail" 
                      className="form-control" 
                      placeholder="name@company.com" 
                      required 
                      value={brochureData.email} 
                      onChange={(e) => setBrochureData({ ...brochureData, email: e.target.value })} 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="brCompany">Company</label>
                    <input 
                      type="text" 
                      id="brCompany" 
                      className="form-control" 
                      placeholder="Property or firm name" 
                      required 
                      value={brochureData.company} 
                      onChange={(e) => setBrochureData({ ...brochureData, company: e.target.value })} 
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" id="sendBrochureBtn">
                    Send me the brochure
                  </button>
                </form>
              )}
            </div>

            {/* Section 3c — Partners and dealers */}
            <div className="partner-card">
              <div className="card-top-icon">
                <Handshake size={24} />
              </div>
              <h3 className="partner-heading">Selling to hotels or societies already?</h3>
              <p className="partner-body">
                We work with facility management companies, hospitality suppliers and system integrators across India. Tell us about your market and we will come back with how the arrangement works.
              </p>

              <div className="partner-action-box">
                <button 
                  type="button" 
                  className="btn btn-outline btn-lg" 
                  onClick={() => setIsPartnerModalOpen(true)}
                  id="talkAboutPartneringBtn"
                >
                  Talk about partnering
                </button>
                <span className="partner-note">
                  Channel agreements with direct Mumbai factory support and spare parts provisioning.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 4 — Contact Details
          =================================================================== */}
      <section className="contact-details-band alt-bg" id="contact-details">
        <div className="container">
          <div className="details-box">
            <div className="details-header section-header text-center">
              <span className="section-label">Corporate Headquarters</span>
              <h2 className="section-title">Direct Contact</h2>
              <p className="details-address-text">
                PDR Videotronics (India) Private Limited, 99 Old Prabhadevi Road, Mumbai 400 025 · +91 22 2430 6494 · +91 86910 00897 · info@pdrworld.com
              </p>
            </div>

            <div className="details-actions-row">
              <a href="tel:+912224306494" className="btn btn-outline btn-lg" id="contactCallBtn">
                <Phone size={18} /> Call now
              </a>
              <a href={whatsappUrl} className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer" id="contactWhatsappBtn">
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a href="mailto:info@pdrworld.com" className="btn btn-outline btn-lg" id="contactEmailBtn">
                <Mail size={18} /> Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          Section 5 — Questions (Full FAQ with 13 Questions)
          =================================================================== */}
      <section className="contact-faq-section" id="questions">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Clear Answers</span>
            <h2 className="section-title">Questions</h2>
            <p className="section-subtitle">
              Common operational and deployment considerations addressed directly.
            </p>
          </div>

          <div className="faq-accordion-wrapper">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  className={`faq-item-card ${isOpen ? 'open' : ''}`} 
                  key={idx}
                >
                  <button 
                    type="button" 
                    className="faq-question-btn" 
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.q}</span>
                    <span className="faq-toggle-icon">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-content">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Modal */}
      {isPartnerModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsPartnerModalOpen(false)}>
          <div className="modal-dialog partner-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="section-label">Channel Cooperation</span>
                <h3 className="modal-title">Partner &amp; Reseller Enquiry</h3>
              </div>
              <button 
                type="button" 
                className="modal-close-btn" 
                onClick={() => setIsPartnerModalOpen(false)}
                aria-label="Close dialog"
              >
                <X size={22} />
              </button>
            </div>

            <div className="modal-body">
              {partnerSubmitted ? (
                <div className="partner-submitted-box">
                  <CheckCircle2 size={48} className="partner-check" />
                  <h4>Partner Request Submitted</h4>
                  <p>
                    Thank you, <strong>{partnerData.name}</strong>. Our channel distribution team will review your market details for <strong>{partnerData.company}</strong> and contact you directly.
                  </p>
                  <button 
                    type="button" 
                    className="btn btn-outline" 
                    onClick={() => {
                      setPartnerSubmitted(false);
                      setIsPartnerModalOpen(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePartnerSubmit}>
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label">Contact Name *</label>
                      <input 
                        type="text" 
                        required 
                        className="form-control" 
                        value={partnerData.name} 
                        onChange={(e) => setPartnerData({ ...partnerData, name: e.target.value })} 
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Firm / Partner Company *</label>
                      <input 
                        type="text" 
                        required 
                        className="form-control" 
                        value={partnerData.company} 
                        onChange={(e) => setPartnerData({ ...partnerData, company: e.target.value })} 
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input 
                        type="email" 
                        required 
                        className="form-control" 
                        value={partnerData.email} 
                        onChange={(e) => setPartnerData({ ...partnerData, email: e.target.value })} 
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone *</label>
                      <input 
                        type="tel" 
                        required 
                        className="form-control" 
                        value={partnerData.phone} 
                        onChange={(e) => setPartnerData({ ...partnerData, phone: e.target.value })} 
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Primary Region / Market *</label>
                    <input 
                      type="text" 
                      required 
                      className="form-control" 
                      placeholder="e.g. West India Hospitality / South India Facility Management" 
                      value={partnerData.market} 
                      onChange={(e) => setPartnerData({ ...partnerData, market: e.target.value })} 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Client Type &amp; Portfolio Notes</label>
                    <textarea 
                      rows={3} 
                      className="form-control" 
                      placeholder="Briefly describe your existing client base in hotels, residential complexes or commercial parks..." 
                      value={partnerData.notes} 
                      onChange={(e) => setPartnerData({ ...partnerData, notes: e.target.value })} 
                    />
                  </div>

                  <div className="modal-actions">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Submit Partner Enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
