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
      d="M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63a12.187 12.187 0 0 0-3.55 7.63c1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63Zm-6.759 2.482h.002v.001c.068.042.136.084.2.127l.008.006a4.57 4.57 0 0 0-.155-.097l-.003-.002h-.001l-.003-.002a3.215 3.215 0 0 1-.239-.155 7.7 7.7 0 0 0 .191.122Zm.21.134A12.205 12.205 0 0 1 12 15.45C14.15 12.17 17.82 10 22 10c0 5.32-3.36 9.82-8.03 11.49-.64.22-1.29.39-1.97.51-.68-.11-1.34-.28-1.97-.51C5.36 19.82 2 15.32 2 10a11.81 11.81 0 0 1 6.941 2.246Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
