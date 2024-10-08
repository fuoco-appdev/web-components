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
    <path d="M20 6v14H6v2h14c1.1 0 2-.9 2-2V6h-2Z" />
    <path d="M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2ZM9 16H4v-5h5v5Zm7 0h-5v-5h5v5Zm0-7H4V4h12v5Z" />
  </svg>
)

export default Icon
