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
    <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18ZM20 4v13.17L18.83 16H4V4h16ZM6 12h12v2H6v-2Zm0-3h12v2H6V9Zm0-3h12v2H6V6Z" />
  </svg>
)

export default Icon
