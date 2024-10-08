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
    <path d="M8 8H6v7c0 1.1.9 2 2 2h9v-2H8V8Z" />
    <path d="M20 3h-8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 8h-8V7h8v4Z" />
    <path d="M4 12H2v7c0 1.1.9 2 2 2h9v-2H4v-7Z" />
  </svg>
)

export default Icon
