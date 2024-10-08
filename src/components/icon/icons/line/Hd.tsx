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
    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 16H5V5h14v14ZM7.5 13h2v2H11V9H9.5v2.5h-2V9H6v6h1.5v-2ZM18 14v-4c0-.55-.45-1-1-1h-4v6h4c.55 0 1-.45 1-1Zm-1.5-.5h-2v-3h2v3Z" />
  </svg>
)

export default Icon
