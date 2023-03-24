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
    <path d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22ZM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1ZM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5V8Zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2H4Z" />
  </svg>
);

export default Icon;
