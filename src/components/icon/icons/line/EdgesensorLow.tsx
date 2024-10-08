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
    <path d="M2 7h2v7H2V7Zm18 3h2v7h-2v-7Zm-4-7.99L8 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99ZM16 20H8v-1h8v1Zm0-3H8V7h8v10ZM8 5V4h8v1H8Z" />
  </svg>
)

export default Icon
