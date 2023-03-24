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
    <path d="m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5ZM10 5.47l4 1.4v11.66l-4-1.4V5.47Zm-5 .99 3-1.01v11.7l-3 1.16V6.46Zm14 11.08-3 1.01V6.86l3-1.16v11.84Z" />
  </svg>
);

export default Icon;
