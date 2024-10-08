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
    <path d="M11.1 13a5 5 0 1 0 0-2H6.83l1.59-1.59L7 8l-4 4 4 4 1.41-1.41L6.83 13h4.27Zm4.9 2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Z" />
  </svg>
)

export default Icon
