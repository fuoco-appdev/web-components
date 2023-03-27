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
    <path d="M19.88 13.89c1.04 0 1.89-.85 1.89-1.89s-.85-1.89-1.89-1.89-1.89.85-1.89 1.89.85 1.89 1.89 1.89Zm-4.24-.21c.93 0 1.68-.75 1.68-1.68 0-.93-.75-1.68-1.68-1.68-.93 0-1.68.75-1.68 1.68 0 .93.75 1.68 1.68 1.68Zm0-4.26c.93 0 1.68-.75 1.68-1.68 0-.93-.75-1.68-1.68-1.68-.93 0-1.68.75-1.68 1.68 0 .93.75 1.68 1.68 1.68Zm0 8.51c.93 0 1.68-.75 1.68-1.68 0-.93-.75-1.68-1.68-1.68-.93 0-1.68.75-1.68 1.68 0 .92.75 1.68 1.68 1.68Zm-4.24-4.46c.81 0 1.47-.66 1.47-1.47 0-.81-.66-1.47-1.47-1.47-.81 0-1.47.66-1.47 1.47 0 .81.65 1.47 1.47 1.47Zm0-4.26c.81 0 1.47-.66 1.47-1.47 0-.81-.66-1.47-1.47-1.47-.81 0-1.47.66-1.47 1.47 0 .81.65 1.47 1.47 1.47Zm0 8.52c.81 0 1.47-.66 1.47-1.47 0-.81-.66-1.47-1.47-1.47-.81 0-1.47.66-1.47 1.47-.01.81.65 1.47 1.47 1.47Zm0 4.27c.81 0 1.47-.66 1.47-1.47 0-.81-.66-1.47-1.47-1.47-.81 0-1.47.66-1.47 1.47-.01.81.65 1.47 1.47 1.47Zm0-17.06c.81 0 1.47-.66 1.47-1.47 0-.81-.66-1.47-1.47-1.47-.81 0-1.47.66-1.47 1.47 0 .81.65 1.47 1.47 1.47Zm-4.25 8.32c.7 0 1.26-.57 1.26-1.26 0-.69-.57-1.26-1.26-1.26a1.261 1.261 0 0 0 0 2.52Zm0 4.25a1.261 1.261 0 0 0 0-2.52 1.261 1.261 0 0 0 0 2.52Zm0-8.49a1.261 1.261 0 0 0 0-2.52 1.261 1.261 0 0 0 0 2.52Zm-3.87 4.03a1.05 1.05 0 1 0 0-2.1 1.05 1.05 0 0 0 0 2.1Z" />
  </svg>
);

export default Icon;