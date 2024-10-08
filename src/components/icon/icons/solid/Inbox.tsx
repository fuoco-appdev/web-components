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
      d="M4.99 3H19a2 2 0 0 1 2 2v14c0 1.1-.9 2-2 2H4.99C3.88 21 3 20.1 3 19l.01-14c0-1.11.87-2 1.98-2ZM15 15h4V5H5v10h4c0 1.66 1.35 3 3 3s3-1.34 3-3Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
