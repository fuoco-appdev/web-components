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
    <path d="M3.42 2.61 2.01 4.03 4.1 6.12C2.79 7.82 2 9.94 2 12.25c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 17.78 4 15.21 4 12.25c0-1.76.57-3.38 1.53-4.69L6.96 9c-.6.93-.96 2.05-.96 3.25 0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-.65.17-1.25.44-1.79l1.58 1.58-.02.21c0 1.1.9 2 2 2l.21-.02 7.52 7.52 1.41-1.41L3.42 2.61Zm14.29 11.46c.18-.57.29-1.19.29-1.82 0-3.31-2.69-6-6-6-.63 0-1.25.11-1.82.29l1.72 1.72c.03 0 .06-.01.1-.01 2.21 0 4 1.79 4 4 0 .04-.01.07-.01.11l1.72 1.71ZM12 4.25c4.42 0 8 3.58 8 8 0 1.2-.29 2.32-.77 3.35l1.49 1.49A9.82 9.82 0 0 0 22 12.25c0-5.52-4.48-10-10-10-1.76 0-3.4.48-4.84 1.28l1.48 1.48c1.02-.48 2.16-.76 3.36-.76Z" />
  </svg>
);

export default Icon;
