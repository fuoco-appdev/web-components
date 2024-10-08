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
    <path d="M16.5 19.72h-12V7.5h7v-2h-7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7.22Z" />
    <path d="M18.5 2.5h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7.5h3v-2h-3v-3Z" />
    <path d="M14.5 9.5h-8v2h8v-2Z" />
    <path d="M6.5 12.5v2h8v-2h-8Z" />
    <path d="M14.5 15.5h-8v2h8v-2Z" />
  </svg>
)

export default Icon
