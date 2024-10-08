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
    <path d="M10.5 8.5h-2v4h-4v2h4v4h2v-4h4v-2h-4v-4ZM15 6.58V8.4l2.5-.5v10.6h2v-13L15 6.58Z" />
  </svg>
)

export default Icon
