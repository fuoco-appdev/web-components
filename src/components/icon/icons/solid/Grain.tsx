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
      d="M20 6c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2ZM4 10c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2Zm4 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2Zm-2 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm2-2c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2Zm-2-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2ZM8 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
