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
    <path d="M7 15v2h10v-2H7Zm-4 6h18v-2H3v2Zm0-8h18v-2H3v2Zm4-6v2h10V7H7ZM3 3v2h18V3H3Z" />
  </svg>
)

export default Icon
