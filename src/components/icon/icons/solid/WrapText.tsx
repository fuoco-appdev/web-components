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
      d="M20 5H4v2h16V5ZM4 19h6v-2H4v2Zm0-8h13c2.21 0 4 1.79 4 4s-1.79 4-4 4h-2v2l-3-3 3-3v2h2.25c1.1 0 2-.9 2-2s-.9-2-2-2H4v-2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
