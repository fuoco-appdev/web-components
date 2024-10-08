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
    <path d="M19 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <path d="M15 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <path d="M16.99 9c-1.38 0-2.5.84-2.5 1.88h5c0-1.04-1.12-1.88-2.5-1.88Z" />
    <path d="M1 16c0 3.31 2.69 6 6 6s6-2.69 6-6V9H1v7Zm2-5h8v5c0 2.21-1.79 4-4 4s-4-1.79-4-4v-5Z" />
    <path d="M11 2v5.5h2V4h8v5c0 2.21-1.79 4-4 4-.95 0-1.81-.35-2.5-.9v2.35c.76.35 1.61.55 2.5.55 3.31 0 6-2.69 6-6V2H11Z" />
    <path d="M5 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <path d="M9 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <path d="M7 17.88c1.38 0 2.5-.84 2.5-1.88h-5c0 1.04 1.12 1.88 2.5 1.88Z" />
  </svg>
)

export default Icon
