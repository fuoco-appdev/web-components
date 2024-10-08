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
    <path d="M11 15h1.5V9H11v6Zm7.75-6v3.5L16.25 9H15v6h1.25v-3.5L18.8 15H20V9h-1.25ZM7.5 9H4v6h1.5v-2h2c.85 0 1.5-.65 1.5-1.5v-1C9 9.65 8.35 9 7.5 9Zm0 2.5h-2v-1h2v1Z" />
  </svg>
)

export default Icon
