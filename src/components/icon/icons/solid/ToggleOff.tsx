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
      d="M7 7h10c2.76 0 5 2.24 5 5s-2.24 5-5 5H7c-2.76 0-5-2.24-5-5s2.24-5 5-5Zm-3 5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
