import React from 'react';

const LogoMK = ({ size = 200 }) => {
  const strokeWidth = 8;
  const solderRadius = 3;
  const circuitColor = "#FFD700"; // Oro/Amarillo técnico
  const solderColor = "#A9A9A9";  // Gris plateado

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org"
    >
      {/* Fondo Circular */}
      <circle cx="50" cy="50" r="48" fill="white" stroke="#E0E0E0" strokeWidth="0.5" />

      {/* Letra M */}
      <g id="letter-M">
        <polyline
          points="25,65 25,35 35,50 45,35 45,65"
          stroke={circuitColor}
          strokeWidth={strokeWidth}
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        {/* Puntos de soldadura M */}
        <circle cx="25" cy="65" r={solderRadius} fill={solderColor} />
        <circle cx="25" cy="35" r={solderRadius} fill={solderColor} />
        <circle cx="35" cy="50" r={solderRadius} fill={solderColor} />
        <circle cx="45" cy="35" r={solderRadius} fill={solderColor} />
        <circle cx="45" cy="65" r={solderRadius} fill={solderColor} />
      </g>

      {/* Letra K */}
      <g id="letter-K">
        <polyline
          points="55,35 55,65"
          stroke={circuitColor}
          strokeWidth={strokeWidth}
          strokeLinecap="square"
        />
        <polyline
          points="75,35 55,50 75,65"
          stroke={circuitColor}
          strokeWidth={strokeWidth}
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        {/* Puntos de soldadura K */}
        <circle cx="55" cy="35" r={solderRadius} fill={solderColor} />
        <circle cx="55" cy="65" r={solderRadius} fill={solderColor} />
        <circle cx="55" cy="50" r={solderRadius} fill={solderColor} />
        <circle cx="75" cy="35" r={solderRadius} fill={solderColor} />
        <circle cx="75" cy="65" r={solderRadius} fill={solderColor} />
      </g>
    </svg>
  );
};

export default LogoMK;
