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
      d="M3 3h18a2 2 0 0 1 2 2l-.01 12c0 1.1-.89 2-1.99 2h-5v2H8v-2H3a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2Zm0 14h18V5H3v12Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
