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
    <path d="m18.36 9 .6 3H5.04l.6-3h12.72ZM20 4H4v2h16V4Zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5ZM6 18v-4h6v4H6Z" />
  </svg>
);

export default Icon;
