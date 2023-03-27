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
    <path
      fillRule="evenodd"
      d="M17.84 12c.29.11.58.24.86.4a6.012 6.012 0 0 1 3 5.19 6.008 6.008 0 0 1-6 0 5.4 5.4 0 0 1-.78-.54c.05.31.08.63.08.95 0 2.22-1.21 4.15-3 5.19-1.79-1.04-3-2.97-3-5.19 0-.32.03-.64.08-.96-.24.19-.5.38-.78.54a6.007 6.007 0 0 1-6 0 6.012 6.012 0 0 1 3-5.19c.28-.16.57-.29.86-.4a6.06 6.06 0 0 1-.86-.4 5.97 5.97 0 0 1-3-5.19 6.008 6.008 0 0 1 6 0c.28.16.54.35.78.55A5.99 5.99 0 0 1 9 6c0-2.22 1.21-4.15 3-5.19 1.79 1.04 3 2.97 3 5.19 0 .32-.03.64-.08.95.24-.19.5-.38.78-.54a6.007 6.007 0 0 1 6 0 6.012 6.012 0 0 1-3 5.19c-.28.16-.57.29-.86.4ZM8 12c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4-4 1.79-4 4Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;