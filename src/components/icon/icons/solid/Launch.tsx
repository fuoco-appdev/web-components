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
      d="M5 5v14h14v-7h2v7c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7v2H5Zm9 0V3h7v7h-2V6.41l-9.83 9.83-1.41-1.41L17.59 5H14Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
