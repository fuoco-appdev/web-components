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
    <path d="M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5V14Z" />
    <path d="M13.5 18.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5v6ZM15 14h1.5v1.5H15V14Z" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 16H5V5h14v14Z" />
    <path d="M8.5 11.5H10v-6H7V7h1.5v4.5Z" />
    <path d="M16.5 10.5v-4c0-.55-.45-1-1-1H13c-.55 0-1 .45-1 1V8c0 .55.45 1 1 1h2v1h-3v1.5h3.5c.55 0 1-.45 1-1ZM15 8h-1.5V6.5H15V8Z" />
  </svg>
);

export default Icon;
