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
    <path d="M3.5 18h6v-2h-6v2Zm16-14h-16v2h16V4Zm-3 6h-13v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H14.5v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4Z" />
  </svg>
)

export default Icon
