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
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 16H5V5h14v14Z" />
    <path d="M8.5 15H10V9H7v1.5h1.5V15Z" />
    <path d="M13.5 12.75 15.25 15H17l-2.25-3L17 9h-1.75l-1.75 2.25V9H12v6h1.5v-2.25Z" />
  </svg>
)

export default Icon
