import * as React from 'react'

const Icon = ({ size = 46, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M4.01 4c0-1.1.89-2 1.99-2h8l6 6v12c0 1.1-.9 2-2 2H5.99C4.89 22 4 21.1 4 20l.01-16ZM13 3.5V9h5.5L13 3.5Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
