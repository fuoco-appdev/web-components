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
    <path d="M21 22.5c-1.03 0-2.06-.25-3-.75-1.89 1-4.11 1-6 0-1.89 1-4.11 1-6 0-.95.5-1.97.75-3 .75H2v-2h1c1.04 0 2.08-.35 3-1 1.83 1.3 4.17 1.3 6 0 1.83 1.3 4.17 1.3 6 0 .91.65 1.96 1 3 1h1v2h-1ZM12 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm12 12s-1.52.71-3.93 1.37c-.82-.23-1.53-.75-2.07-1.37-.73.84-1.8 1.5-3 1.5s-2.27-.66-3-1.5c-.73.84-1.8 1.5-3 1.5s-2.27-.66-3-1.5c-.54.61-1.25 1.13-2.07 1.37C1.52 17.71 0 17 0 17s2.93-1.36 7.13-2.08l1.35-4.17c.31-.95 1.32-1.47 2.27-1.16.09.03.19.07.27.11l2.47 1.3 2.84-1.5 1.65-3.71-.51-1.32L18.8 1.5 22 2.93 20.67 5.9l-1.31.5-3.72 8.34C20.49 15.37 24 17 24 17Zm-8.98-4.54-1.52.8-1.75-.92-.71 2.17c.32 0 .64-.01.96-.01.71 0 1.4.03 2.07.08l.95-2.12Z" />
  </svg>
);

export default Icon;
