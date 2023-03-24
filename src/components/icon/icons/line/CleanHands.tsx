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
    <path d="m17.49 4.75.63 1.37 1.37.63-1.37.63-.63 1.37-.63-1.37-1.37-.63 1.37-.63.63-1.37Zm3.01 9c1.1 0 2-.9 2-2s-2-4-2-4-2 2.9-2 4 .9 2 2 2Zm-9-7.9v-2.1h2c.57 0 1.1.17 1.55.45l1.43-1.43a4.899 4.899 0 0 0-2.98-1.02H8v2h1.5v2.11c-1.78.37-3.2 1.68-3.75 3.39h2.16c.53-.89 1.48-1.5 2.59-1.5 1.62 0 2.94 1.29 2.99 2.9l2.01.75v-.65a5 5 0 0 0-4-4.9Zm11 12.9v1l-8 2.5-7-1.94v1.44h-6v-11h7.97l6.16 2.3a2.89 2.89 0 0 1 1.87 2.7h2c1.66 0 3 1.34 3 3Zm-17 1v-7h-2v7h2Zm14.9-1.43c-.16-.33-.51-.56-.9-.56h-5.35c-.54 0-1.07-.09-1.58-.26l-2.38-.79.63-1.9 2.38.79c.31.1 2.3.15 2.3.15 0-.37-.23-.7-.57-.83l-5.82-2.17H7.5v5.48l6.97 1.93 5.93-1.84Z" />
  </svg>
);

export default Icon;
