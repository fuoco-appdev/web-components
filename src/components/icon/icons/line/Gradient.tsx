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
    <path d="M11 9h2v2h-2V9Zm-2 2h2v2H9v-2Zm4 0h2v2h-2v-2Zm2-2h2v2h-2V9ZM7 9h2v2H7V9Zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2ZM9 18H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6Z" />
  </svg>
)

export default Icon
