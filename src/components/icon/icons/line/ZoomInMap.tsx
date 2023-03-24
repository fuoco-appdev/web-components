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
    <path d="M9 9V3H7v2.59L3.91 2.5 2.5 3.91 5.59 7H3v2h6Zm12 0V7h-2.59l3.09-3.09-1.41-1.41L17 5.59V3h-2v6h6ZM3 15v2h2.59L2.5 20.09l1.41 1.41L7 18.41V21h2v-6H3Zm12 0v6h2v-2.59l3.09 3.09 1.41-1.41L18.41 17H21v-2h-6Z" />
  </svg>
);

export default Icon;
