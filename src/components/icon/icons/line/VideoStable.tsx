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
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2ZM4 18V6h2.95l-2.33 8.73L16.82 18H4Zm11.62-2.39-8.55-2.29L8.38 8.4l8.56 2.29-1.32 4.92ZM20 18h-2.95l2.34-8.73L7.18 6H20v12Z" />
  </svg>
);

export default Icon;
