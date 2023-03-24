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
    <path d="M17 8H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2Zm-4 12.5h-2V19h2v1.5Zm0-2.5h-2c0-1.5-2.5-3-2.5-5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 2-2.5 3.5-2.5 5Zm5-11.5H6C6 5.67 6.67 5 7.5 5h9c.83 0 1.5.67 1.5 1.5Zm-1-3H7C7 2.67 7.67 2 8.5 2h7c.83 0 1.5.67 1.5 1.5Z" />
  </svg>
);

export default Icon;
