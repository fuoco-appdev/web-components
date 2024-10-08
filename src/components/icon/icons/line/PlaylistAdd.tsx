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
    <path d="M13.5 9h-11v2h11V9Zm0-4h-11v2h11V5Zm4 8V9h-2v4h-4v2h4v4h2v-4h4v-2h-4Zm-15 2h7v-2h-7v2Z" />
  </svg>
)

export default Icon
