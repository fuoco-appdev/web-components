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
    <path d="m3.115 2.505-1.42 1.41 2.27 2.27a9.91 9.91 0 0 0-1.66 5.51c0 5.52 4.48 10 10 10 2.04 0 3.93-.61 5.51-1.66l2.27 2.27 1.41-1.42-18.38-18.38Zm9.19 17.19c-4.41 0-8-3.59-8-8 0-1.48.41-2.86 1.12-4.06l10.93 10.94a7.869 7.869 0 0 1-4.05 1.12Z" />
    <path d="M12.305 3.695c4.41 0 8 3.59 8 8 0 1.48-.41 2.86-1.12 4.05l1.45 1.45a9.782 9.782 0 0 0 1.67-5.5c0-5.52-4.48-10-10-10-2.04 0-3.93.61-5.51 1.66l1.45 1.45c1.2-.7 2.58-1.11 4.06-1.11Z" />
  </svg>
);

export default Icon;
