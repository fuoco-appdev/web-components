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
    <path d="M6 6.75c.31 0 .7.15.9.56.24.5.02 1.1-.47 1.34a.979.979 0 0 1-1.32-.46.986.986 0 0 1 .46-1.34c.14-.06.28-.1.43-.1Zm6.47 2.11 6.69 2.41c.52.19.93.56 1.15 1.05.22.48.25 1.03.06 1.53l-.01.02-8.59-3.11.7-1.9ZM10 15.44l4 1.44v.37h-4v-1.81ZM6 4.75c-.44 0-.88.1-1.3.3a2.99 2.99 0 0 0-1.4 4 2.988 2.988 0 0 0 4 1.4 3.01 3.01 0 0 0 1.41-4A3.013 3.013 0 0 0 6 4.75Zm5.28 1.55L9.2 11.96l12.36 4.47.69-1.89a4 4 0 0 0-2.41-5.15L11.28 6.3Zm-9.09 4.2-.69 1.89L8 14.73v4.52h8v-1.63l4.52 1.63.69-1.89L2.19 10.5Z" />
  </svg>
);

export default Icon;
