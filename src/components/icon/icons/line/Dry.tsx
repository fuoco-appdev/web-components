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
    <path d="M21.25 15.5a1.25 1.25 0 0 0 0-2.5H12.5v-1h6.75c.69 0 1.25-.56 1.25-1.25 0-.67-.53-1.2-1.18-1.24L9.37 9.5l1.48-2.6c.09-.17.14-.34.14-.54 0-.26-.09-.5-.26-.7L9.62 4.5l-7.18 6.8c-.6.56-.94 1.35-.94 2.17v6.03c0 1.66 1.34 3 3 3h13.75a1.25 1.25 0 0 0 0-2.5H12.5v-1h7.75a1.25 1.25 0 0 0 0-2.5H12.5v-1h8.75Zm-10.75 5h-6c-.55 0-1-.45-1-1v-6c0-.39.23-.64.36-.75L7.5 9.37v2.13h3v9Zm5.65-16.14-.07-.07c-.57-.62-.82-1.41-.67-2.2l.09-.59h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71Zm4 0-.07-.07c-.57-.62-.82-1.41-.67-2.2l.09-.59h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71Z" />
  </svg>
);

export default Icon;
