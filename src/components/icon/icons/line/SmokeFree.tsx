import * as React from "react";

const Icon = ({ size = 46, color = "currentColor", ...props }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.5 12.525H22v3h-1.5v-3Zm-2.5 0h1.5v3H18v-3Zm-1 0h-2.34l2.34 2.34v-2.34Zm-2.5-4.35h1.53c1.05 0 1.97.74 1.97 2.05v1.3h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5a3.35 3.35 0 0 0 0 6.7Zm4.35-3.92c.62-.61 1-1.45 1-2.38h-1.5c0 1.02-.83 1.85-1.85 1.85v1.5c2.24 0 4 1.83 4 4.07v2.23H22v-2.24c0-2.22-1.28-4.14-3.15-5.03Zm-15.44-.14L2 5.525l7 7H2v3h10l7 7 1.41-1.41-17-17Z" />
  </svg>
);

export default Icon;
