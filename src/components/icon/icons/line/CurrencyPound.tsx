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
    <path d="M14 21.25c1.93 0 3.62-1.17 4-3l-1.75-.88c-.25 1.09-.92 1.88-2.25 1.88H9.1c.83-1 1.5-2.34 1.5-4 0-.35-.03-.69-.08-1H14v-2H9.82C9 10.67 8 9.85 8 8.25a3.5 3.5 0 0 1 6.78-1.22l1.85-.78c-.8-2.05-2.79-3.5-5.13-3.5-3.04 0-5.5 2.46-5.5 5.5 0 1.78.79 2.9 1.49 4H6v2h2.47c.08.31.13.64.13 1 0 2.7-2.6 4-2.6 4v2h8Z" />
  </svg>
);

export default Icon;