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
    <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 14H8V4h12v12ZM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6Zm12 6V9c0-.55-.45-1-1-1h-2v5h2c.55 0 1-.45 1-1Zm-2-3h1v3h-1V9Zm4 2h1v-1h-1V9h1V8h-2v5h1v-2Zm-8 0h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H9v5h1v-2Zm0-2h1v1h-1V9Z" />
  </svg>
);

export default Icon;
