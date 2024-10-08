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
    <path d="M5.5 11h-1V9H3v6h1.5v-2.5h1V15H7V9H5.5v2Z" />
    <path d="M21 11v-1c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h-1.5v.5h-1v-3h1v.5H21Z" />
    <path d="M14.25 13.5 13.5 9H12l1 6h2.5l1-6H15l-.75 4.5Z" />
    <path d="M8 9v6h3.5v-1.5h-2v-1h2V11h-2v-.5h2V9H8Z" />
  </svg>
)

export default Icon
