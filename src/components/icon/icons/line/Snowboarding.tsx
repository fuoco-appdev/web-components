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
    <path d="M13.999 3.25c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2Zm7.4 17.09a.748.748 0 0 0-.64.17c-.69.6-1.64.88-2.6.67l-1.16-.24-1-6.19-3.32-2.67 1.8-2.89a6.507 6.507 0 0 0 5.52 3.06v-2c-1.85 0-3.44-1.12-4.13-2.72l-.52-1.21c-.19-.43-.74-1.07-1.65-1.07h-5.7l-2.5 4 1.7 1.06 1.9-3.06h2.35l-2.51 3.99c-.28.45-.37 1-.25 1.52l.81 3.49-3.5 2.35-.47-.1c-.96-.2-1.71-.85-2.1-1.67a.744.744 0 0 0-.51-.42c-.43-.09-.82.2-.9.58-.04.14-.02.31.05.46.58 1.24 1.71 2.2 3.15 2.51l12.63 2.69c1.44.31 2.86-.11 3.9-1.01.13-.11.21-.26.24-.41.07-.38-.16-.8-.59-.89Zm-12.67-1.16 3.02-2.03-.44-3.32 2.84 2.02.75 4.64-6.17-1.31Z" />
  </svg>
);

export default Icon;