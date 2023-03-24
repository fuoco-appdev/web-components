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
      d="M21 8c1.1 0 2 .9 2 2l-.01.08.01.01V12c0 .26-.05.5-.14.73l-3.02 7.05C19.54 20.5 18.83 21 18 21H9c-1.1 0-2-.9-2-2V9c0-.55.22-1.05.59-1.41L14.17 1l1.06 1.05c.27.27.44.65.44 1.06l-.03.32L14.69 8H21ZM5 21H1V9h4v12Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
