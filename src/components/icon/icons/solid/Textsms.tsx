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
      d="M4 2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H6l-4 4 .01-18c0-1.1.89-2 1.99-2Zm3 9h2V9H7v2Zm6 0h-2V9h2v2Zm2 0h2V9h-2v2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
