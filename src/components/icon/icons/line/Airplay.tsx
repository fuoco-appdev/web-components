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
    <path d="M6 21.5h12l-6-6-6 6Z" />
    <path d="M21 2.5H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3v-12h18v12h-4v2h4c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2Z" />
  </svg>
)

export default Icon
