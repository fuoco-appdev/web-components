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
    <path d="m21.714 13.117-2.58 2.58-1.81-1.81 2.18-2.19-7.2-7.2-2.19 2.19-1.81-1.82 2.58-2.58c.78-.78 2.05-.78 2.83 0l8 8c.79.78.79 2.04 0 2.83Zm-.22 7.77-1.41 1.41-3.78-3.77-2.58 2.58c-.78.78-2.05.78-2.83 0l-8-8c-.78-.78-.78-2.05 0-2.83l2.58-2.58-3.78-3.78 1.41-1.41 18.39 18.38Zm-7-4.17-1.39-1.39-.8.8-4.42-4.43.8-.8-1.4-1.39-2.18 2.19 7.2 7.2 2.19-2.18Zm2.23-5.02-4.42-4.42-.8.8 4.42 4.42.8-.8Z" />
  </svg>
);

export default Icon;