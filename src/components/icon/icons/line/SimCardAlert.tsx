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
    <path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 18H6V8.83L10.83 4H18v16Z" />
    <path d="M13 15h-2v2h2v-2Z" />
    <path d="M13 8h-2v5h2V8Z" />
  </svg>
)

export default Icon
