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
    <path d="M16 11v6.97l-5-2.14-5 2.14V5h6V3H6c-1.1 0-2 .9-2 2v16l7-3 7 3V11h-2Zm4-4h-6V5h6v2Z" />
  </svg>
);

export default Icon;