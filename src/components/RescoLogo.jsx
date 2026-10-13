import React from 'react';

/**
 * Official RESCO Brand Logo Component
 * Incorporates the geometric hexagonal R emblem with the industrial orange facet
 * and structural typography.
 */
export default function RescoLogo({ 
  variant = 'full', 
  theme = 'light', // 'light' for light backgrounds (dark text), 'dark' for dark backgrounds (white text)
  height = 38,
  className = ''
}) {
  if (variant === 'mark') {
    return (
      <img 
        src="/images/resco-mark.png" 
        alt="RESCO Engineering Intelligence" 
        style={{ height, width: 'auto', display: 'block' }}
        className={`resco-logo-mark ${className}`}
      />
    );
  }

  const logoSrc = theme === 'dark' 
    ? '/images/resco-logo-white.png' 
    : '/images/resco-logo-tight.png';

  return (
    <div 
      className={`resco-logo-wrapper ${className}`} 
      style={{ display: 'inline-flex', alignItems: 'center' }}
    >
      <img 
        src={logoSrc} 
        alt="RESCO — Engineering Intelligence" 
        style={{ height, width: 'auto', display: 'block', objectFit: 'contain' }}
        className="resco-logo-img"
      />
    </div>
  );
}
