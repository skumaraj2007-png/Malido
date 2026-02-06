
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 200 160" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    aria-hidden="true"
  >
    {/* The artistic shield-like container path */}
    <path 
      d="M15 45C15 45 55 35 100 35C145 35 185 45 185 45C185 45 195 100 100 145C5 100 15 45 15 45Z" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinejoin="round"
    />
    
    {/* Outlined text "MALIDO" */}
    <text 
      x="100" 
      y="88" 
      textAnchor="middle" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.2"
      style={{ 
        fontSize: '34px', 
        fontWeight: '700', 
        fontFamily: "'Playfair Display', serif",
        letterSpacing: '1px'
      }}
    >
      MALIDO
    </text>
    
    {/* Outlined text "CAFÉ" with accent */}
    <text 
      x="100" 
      y="118" 
      textAnchor="middle" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="0.8"
      style={{ 
        fontSize: '20px', 
        fontWeight: '400', 
        fontFamily: "'Playfair Display', serif",
        letterSpacing: '3px'
      }}
    >
      CAFÉ
    </text>
  </svg>
);
