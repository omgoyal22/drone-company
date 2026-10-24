import React from 'react';
import { X } from 'lucide-react';
import DemoForm from './DemoForm';

export default function DemoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card modal-card-wide" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header-block text-center" style={{ marginBottom: 24 }}>
          <span className="section-label">On-site demonstration &amp; survey</span>
          <h3 className="modal-title" style={{ fontSize: 26, marginBottom: 8 }}>Book a demo</h3>
          <p className="modal-desc" style={{ maxWidth: 540, margin: '0 auto' }}>
            Tell us about the property and we will come back with what the robot can do there — and what it cannot.
          </p>
        </div>

        <DemoForm isModal={true} onClose={onClose} />
      </div>
    </div>
  );
}
