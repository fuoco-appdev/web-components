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
    <path d="M14 11.25h-1.5v1.5H14v-1.5Z" />
    <path d="M16.5 11.25H15v1.5h1.5v-1.5Z" />
    <path d="M11.5 11.25H10v1.5h1.5v-1.5Z" />
    <path d="M9 11.25H7.5v1.5H9v-1.5Z" />
    <path d="M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2ZM4 17H3V7h1v10Zm14 0H6V7h12v10Zm3 0h-1V7h1v10Z" />
  </svg>
)

export default Icon
