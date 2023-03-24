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
    <path d="M9 22h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 2 7.58 8.59C7.22 8.95 7 9.45 7 10v10c0 1.1.9 2 2 2Zm0-12 4.34-4.34L12 11h9v2l-3 7H9V10Zm-8 0h4v12H1V10Z" />
  </svg>
);

export default Icon;
