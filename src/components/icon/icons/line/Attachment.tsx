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
    <path d="M18 16H6.5c-2.21 0-4-1.79-4-4s1.79-4 4-4H19a2.5 2.5 0 0 1 0 5H8.5c-.55 0-1-.45-1-1s.45-1 1-1H18V9.5H8.5a2.5 2.5 0 0 0 0 5H19c2.21 0 4-1.79 4-4s-1.79-4-4-4H6.5C3.46 6.5 1 8.96 1 12s2.46 5.5 5.5 5.5H18V16Z" />
  </svg>
)

export default Icon
