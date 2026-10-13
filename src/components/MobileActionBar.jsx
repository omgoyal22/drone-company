import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function MobileActionBar({ onOpenDemo }) {
  const whatsappUrl = "https://wa.me/912224306494?text=" + encodeURIComponent("Hi RESCO team, I am interested in booking a site survey for our building.");

  return (
    <aside className="mobile-fixed-bar" aria-label="Mobile quick actions">
      <div className="mobile-bar-actions">
        <a 
          href={whatsappUrl} 
          className="mobile-bar-whatsapp" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Talk to us on WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
        <button 
          type="button" 
          className="btn btn-primary mobile-bar-demo" 
          onClick={onOpenDemo}
        >
          Book a demo
        </button>
      </div>
    </aside>
  );
}
