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
      d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2ZM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6Zm13.5 4.5L20 12V4h-5v8l2.5-1.5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
