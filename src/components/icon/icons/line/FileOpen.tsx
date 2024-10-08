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
    <path d="M13.32 21.815h-9c-1.1 0-2-.9-2-2v-16c0-1.1.9-2 2-2h8l6 6v6h-2v-5h-5v-5h-7v16h9v2Zm4-.34v-2.24l2.95 2.95 1.41-1.41-2.95-2.96h2.24v-2h-5.65v5.66h2Z" />
  </svg>
)

export default Icon
