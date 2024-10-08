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
      d="M5 4h14a2 2 0 0 1 2 2v12c0 1.1-.9 2-2 2h-4v-2h4V8H5v10h4v2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm3 10 4-4 4 4h-3v6h-2v-6H8Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
