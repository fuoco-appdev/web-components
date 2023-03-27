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
    <path d="M7 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M11.15 11.5c-.31-.22-.59-.46-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C6.01 8.5 5 9.51 5 10.75v.75H2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8H11.15ZM7 19.5H5v-6h2v6Zm4 0H9v-6h2v6Zm4 0h-2v-6h2v6Zm4 0h-2v-6h2v6ZM17.42 6.71c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71l-.07-.07c-.57-.62-.82-1.41-.67-2.2L18 2.5h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06Zm-4 0c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71l-.07-.07c-.57-.62-.82-1.41-.67-2.2L14 2.5h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06Z" />
  </svg>
);

export default Icon;