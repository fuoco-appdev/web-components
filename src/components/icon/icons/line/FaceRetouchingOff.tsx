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
    <path d="M9.055 14.195a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
    <path d="M17.555 9.945c.75 0 1.47-.09 2.17-.24.21.71.33 1.46.33 2.24 0 1.22-.28 2.37-.77 3.4l1.49 1.49a9.981 9.981 0 0 0 1.28-4.89c0-5.52-4.48-10-10-10-1.78 0-3.44.47-4.89 1.28l5.33 5.33c1.49.88 3.21 1.39 5.06 1.39Zm-6.84-5.88c.43-.07.88-.12 1.34-.12 2.9 0 5.44 1.56 6.84 3.88-.43.07-.88.12-1.34.12-2.9 0-5.44-1.56-6.84-3.88Z" />
    <path d="m1.945 3.665 2.19 2.19a9.958 9.958 0 0 0-2.08 6.09c0 5.52 4.48 10 10 10 2.29 0 4.4-.78 6.09-2.08l2.19 2.19 1.41-1.41-18.38-18.39-1.42 1.41Zm14.77 14.77a7.91 7.91 0 0 1-4.66 1.51c-4.41 0-8-3.59-8-8 0-.05.01-.1 0-.14a9.947 9.947 0 0 0 3.64-2.39l9.02 9.02ZM6.285 8.005c-.53.55-1.14 1.03-1.81 1.41.26-.77.63-1.48 1.09-2.13l.72.72Z" />
  </svg>
);

export default Icon;