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
    <path d="M17 15h2v2h-2v-2Zm0-4h2v2h-2v-2Zm0-4h2v2h-2V7Zm-3.26 0 1.26.84V7h-1.26Z" />
    <path d="M10 3v1.51l2 1.33V5h9v14h-4v2h6V3H10Z" />
    <path d="M8.17 5.7 15 10.25V21H1V10.48L8.17 5.7ZM10 19h3v-7.84L8.17 8.09 3 11.38V19h3v-6h4v6Z" />
  </svg>
)

export default Icon
