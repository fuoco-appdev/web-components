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
    <path d="M13.5 9.5h-11v2h11v-2Z" />
    <path d="M13.5 5.5h-11v2h11v-2Z" />
    <path d="M9.5 13.5h-7v2h7v-2Z" />
    <path d="m20.09 11.43-4.25 4.24-2.12-2.12-1.41 1.41 3.53 3.54 5.66-5.66-1.41-1.41Z" />
  </svg>
)

export default Icon
