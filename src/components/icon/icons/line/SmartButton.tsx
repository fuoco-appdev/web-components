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
    <path d="M22 8v6c0 1.1-.9 2-2 2h-1v-2h1V8H4v6h6v2H4c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2Zm-7.5 10 1.09-2.41L18 14.5l-2.41-1.09L14.5 11l-1.09 2.41L11 14.5l2.41 1.09L14.5 18Zm2.5-5 .62-1.38L19 11l-1.38-.62L17 9l-.62 1.38L15 11l1.38.62L17 13Zm-2.5 5 1.09-2.41L18 14.5l-2.41-1.09L14.5 11l-1.09 2.41L11 14.5l2.41 1.09L14.5 18Zm2.5-5 .62-1.38L19 11l-1.38-.62L17 9l-.62 1.38L15 11l1.38.62L17 13Z" />
  </svg>
);

export default Icon;
