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
    <path d="M19.5 7v4H6.33l3.58-3.59L8.5 6l-6 6 6 6 1.41-1.41L6.33 13H21.5V7h-2Z" />
  </svg>
)

export default Icon
