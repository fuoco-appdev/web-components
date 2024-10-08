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
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2ZM8 10H6v2h2v-2Zm6 0h2v2h-2v-2Zm0 4h2v2h-2v-2Zm-4-4h2v2h-2v-2Zm-6 8h16V6H4v12Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
