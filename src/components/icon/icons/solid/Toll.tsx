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
      d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6ZM7 6.35a5.99 5.99 0 0 0 0 11.3v2.09c-3.45-.89-6-4.01-6-7.74 0-3.73 2.55-6.85 6-7.74v2.09Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
