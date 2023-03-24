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
    <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2Zm-4 10h2v-2h-2v-2h2v-2h-2V8h4v10h-4v-2Zm0 0h-2v2H4V6h5.17l2 2H14v2h2v2h-2v2h2v2Z" />
  </svg>
);

export default Icon;
