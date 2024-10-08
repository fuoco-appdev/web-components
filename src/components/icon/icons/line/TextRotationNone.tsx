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
    <path d="m20 18-3-3v2H4v2h13v2l3-3ZM8.5 11.8h5l.9 2.2h2.1L11.75 3h-1.5L5.5 14h2.1l.9-2.2ZM11 4.98 12.87 10H9.13L11 4.98Z" />
  </svg>
)

export default Icon
