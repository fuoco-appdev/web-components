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
    <path
      fillRule="evenodd"
      d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm7 7v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.005 0-.007-.003-.01-.005-.002-.003-.005-.005-.01-.005H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95Zm-9 7c1.31 0 2.42-.84 2.83-2h2.07A5 5 0 1 1 9 12.1v2.07c-1.16.42-2 1.52-2 2.83 0 1.66 1.34 3 3 3Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
