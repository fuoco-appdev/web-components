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
    <path d="m12 8.295-6 6 1.41 1.41 4.59-4.58 4.59 4.58 1.41-1.41-6-6Z" />
  </svg>
);

export default Icon;
