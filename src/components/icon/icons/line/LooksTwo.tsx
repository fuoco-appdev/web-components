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
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 16H5V5h14v14Zm-4-4h-4v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H9v2h4v2h-2a2 2 0 0 0-2 2v4h6v-2Z" />
  </svg>
)

export default Icon
