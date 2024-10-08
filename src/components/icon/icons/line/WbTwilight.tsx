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
    <path d="m19.076 6.54-2.12 2.122 1.414 1.414 2.12-2.122-1.414-1.414Z" />
    <path d="M22 18H2v2h20v-2Z" />
    <path d="M13 4h-2v3h2V4Z" />
    <path d="M4.957 6.51 3.543 7.926l2.12 2.121 1.415-1.414L4.957 6.51Z" />
    <path d="M5 16h14c0-3.87-3.13-7-7-7s-7 3.13-7 7Z" />
  </svg>
)

export default Icon
