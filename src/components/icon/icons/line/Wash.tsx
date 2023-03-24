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
    <path d="M21.25 16a1.25 1.25 0 0 0 0-2.5H12.5v-1h6.75c.69 0 1.25-.56 1.25-1.25 0-.67-.53-1.2-1.18-1.24L9.37 10l1.48-2.6c.09-.17.14-.34.14-.54 0-.26-.09-.5-.26-.7L9.62 5l-7.18 6.8c-.6.56-.94 1.35-.94 2.17V20c0 1.66 1.34 3 3 3h13.75a1.25 1.25 0 0 0 0-2.5H12.5v-1h7.75a1.25 1.25 0 0 0 0-2.5H12.5v-1h8.75ZM10.5 21h-6c-.55 0-1-.45-1-1v-6c0-.39.23-.64.36-.75L7.5 9.87V12h3v9ZM14 9c.83 0 1.5-.67 1.5-1.5C15.5 6.66 14 5 14 5s-1.5 1.66-1.5 2.5c0 .83.67 1.5 1.5 1.5Zm5-8s-2.5 2.83-2.5 4.5a2.5 2.5 0 0 0 5 0C21.5 3.83 19 1 19 1Zm0 5.5c-.55 0-1-.45-1-1 0-.4.43-1.22 1-2.05.57.83 1 1.65 1 2.05 0 .55-.45 1-1 1Z" />
  </svg>
);

export default Icon;
