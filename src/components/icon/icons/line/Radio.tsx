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
    <path d="M20 6.5H8.3l8.26-3.34-.68-1.66L3.24 6.65C2.51 6.93 2 7.67 2 8.5v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-12c0-1.11-.89-2-2-2Zm0 2v3h-2v-2h-2v2H4v-3h16Zm-16 12v-7h16v7H4Z" />
    <path d="M8 19.48a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
  </svg>
)

export default Icon
