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
    <path d="M5.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    <path d="M12.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    <path d="M16 1a6.98 6.98 0 0 0-5.75 3.02C9.84 4.01 9.43 4 9 4c-4.42 0-8 .5-8 4v10c0 .88.39 1.67 1 2.22V22c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22v-3.08c3.39-.49 6-3.39 6-6.92 0-3.87-3.13-7-7-7ZM9 6h.29c-.09.32-.16.66-.21.99H3.34C3.89 6.46 5.31 6 9 6ZM3 8.99h6.08c.16 1.11.57 2.13 1.18 3.01H3V8.99ZM15 18c0 .37-.21.62-.34.73l-.29.27H3.63l-.29-.27A.968.968 0 0 1 3 18v-4h9.41c.78.47 1.65.79 2.59.92V18Zm1-5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm.5-9H15v5l3.62 2.16.75-1.23-2.87-1.68V4Z" />
  </svg>
);

export default Icon;
