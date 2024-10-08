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
      d="M19 3H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2ZM3 9h2V7H3v2Zm0 4h2v-2H3v2Zm0 4h2v-2H3v2Zm2 2v2a2 2 0 0 1-2-2h2Zm12 2h-2v-2h2v2Zm-8-6h10V5H9v10Zm2 6h2v-2h-2v2Zm-2 0H7v-2h2v2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
