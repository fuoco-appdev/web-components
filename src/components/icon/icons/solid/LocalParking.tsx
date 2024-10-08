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
      d="M6 3h7c3.31 0 6 2.69 6 6s-2.69 6-6 6h-3v6H6V3Zm4 8h3.2c1.1 0 2-.9 2-2s-.9-2-2-2H10v4Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
