import React from 'react';
import ClosingBandSection from './ClosingBandSection';
import { ArrowLeft } from 'lucide-react';

export default function PlaceholderView({ pageId, onBackHome, onOpenDemo }) {
  const pageDetails = {
    robots: {
      title: "The Robots",
      slug: "/robots",
      purpose: "The machine in detail — how it works, specification, building suitability",
      badge: "Fleet Engineering & Specs"
    },
    solutions: {
      title: "Solutions",
      slug: "/solutions",
      purpose: "Hotels and gated communities, plus other settings it suits",
      badge: "Target Environments"
    },
    about: {
      title: "About RESCO",
      slug: "/about",
      purpose: "Who is behind RESCO and how a deployment runs",
      badge: "PDR Videotronics (India)"
    }
  };

  const current = pageDetails[pageId] || {
    title: pageId,
    slug: `/${pageId}`,
    purpose: "Page content",
    badge: "Page"
  };

  return (
    <div>
      <div className="section-padding">
        <div className="container">
          <button 
            type="button" 
            className="arrow-link" 
            onClick={onBackHome}
            style={{ marginBottom: 30 }}
          >
            <ArrowLeft size={18} /> Back to Home
          </button>

          <div className="page-placeholder-card">
            <div className="section-label">{current.badge}</div>
            <h1 className="section-title" style={{ marginTop: 12 }}>{current.title}</h1>
            <p className="section-subtitle" style={{ margin: '0 auto 28px' }}>
              {current.purpose}
            </p>
            <div style={{ background: 'var(--bg-page)', border: '1px solid var(--border)', borderLeft: '3px solid var(--resco-orange)', borderRadius: 'var(--r-sm)', padding: 24, display: 'inline-block', maxWidth: 560, textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 6, fontSize: 14 }}>
                Page under development
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', lineHeight: 1.65 }}>
                Page 1 (Home) is fully completed. When you share the specific copy and layout for this page, we'll build it right away.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Every page ends with the demo survey CTA as per brief */}
      <ClosingBandSection onOpenDemo={onOpenDemo} />
    </div>
  );
}
