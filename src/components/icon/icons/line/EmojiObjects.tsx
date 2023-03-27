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
    <path d="M12.002 2.5c-.46 0-.93.04-1.4.14-2.76.53-4.96 2.76-5.48 5.52-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47v2.31c0 1.1.9 2 2 2h.28a1.98 1.98 0 0 0 3.44 0h.28c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46a6.956 6.956 0 0 0 2.36-5.23c0-3.87-3.13-7-7-7Zm2 14h-4v-1h4v1Zm-4 2v-1h4v1h-4Zm5.31-5.26c-.09.08-.16.18-.24.26h-6.15c-.08-.09-.15-.19-.24-.27-1.32-1.18-1.91-2.94-1.59-4.7.36-1.94 1.96-3.55 3.89-3.93.34-.07.68-.1 1.02-.1 2.76 0 5 2.24 5 5 0 1.43-.61 2.79-1.69 3.74Z" />
    <path d="M12.502 10.5h-1v3h1v-3Z" />
    <path d="m10.381 8.374-.707.707 2.121 2.121.707-.707-2.121-2.121Z" />
    <path d="m11.502 10.505.708.707 2.12-2.121-.706-.707-2.122 2.121Z" />
  </svg>
);

export default Icon;