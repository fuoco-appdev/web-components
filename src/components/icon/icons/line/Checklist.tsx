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
    <path d="M22 7.535h-9v2h9v-2Zm0 8h-9v2h9v-2Zm-16.46-4L2 7.995l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66Zm0 8L2 15.995l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66Z" />
  </svg>
);

export default Icon;