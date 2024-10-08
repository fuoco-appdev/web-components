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
    <path d="m15.5 4-1-1h-5l-1 1H5v2h14V4h-3.5ZM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12Zm2-5V9h8v10H8v-5Zm2 4h4v-4h2l-4-4-4 4h2v4Z" />
  </svg>
)

export default Icon
