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
      d="M21 3v7h-7l2.95-2.95A7.018 7.018 0 0 0 12 5c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7h2a9 9 0 1 1-9-9c2.49 0 4.74 1.01 6.36 2.64L21 3ZM11 13V8h1.5v4.15l3.52 2.09-.77 1.28L11 13Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
