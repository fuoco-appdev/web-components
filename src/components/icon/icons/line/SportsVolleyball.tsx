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
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 2.07c3.07.38 5.57 2.52 6.54 5.36L13 5.65V4.07ZM8 5.08c1.18-.69 3.33-1.06 3-1.02v7.35l-3 1.73V5.08ZM4.63 15.1c-.4-.96-.63-2-.63-3.1 0-2.02.76-3.86 2-5.27v7.58l-1.37.79Zm1.01 1.73L12 13.15l3 1.73-6.98 4.03a7.794 7.794 0 0 1-2.38-2.08ZM12 20c-.54 0-1.07-.06-1.58-.16l6.58-3.8 1.36.78C16.9 18.75 14.6 20 12 20Zm1-8.58V7.96l7 4.05c0 1.1-.23 2.14-.63 3.09L13 11.42Z" />
  </svg>
);

export default Icon;