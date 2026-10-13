import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function ClosingBandSection({ onOpenDemo }) {
  const whatsappUrl = "https://wa.me/912224306494?text=" + encodeURIComponent("Hi RESCO team, I would like to arrange a site survey for our property.");

  return (
    <section className="closing-band" id="book-demo">
      <div className="container">
        <div className="closing-band-inner">
          <h2 className="closing-title">Start with a survey.</h2>
          <p className="closing-body">
            Half a day with your engineering team and an hour with your lift contractor tells you which floors RESCO can serve and what the building needs to provide — before any commitment.
          </p>
          <div className="closing-buttons">
            <button 
              type="button" 
              className="btn btn-primary btn-lg" 
              onClick={onOpenDemo}
            >
              Book a demo
            </button>
            <a 
              href={whatsappUrl} 
              className="btn btn-whatsapp btn-lg" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} /> Talk to us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
