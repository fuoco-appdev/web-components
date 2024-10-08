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
    <path
      fillRule="evenodd"
      d="M7 13h10V5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v8Zm-5-3h3v3H2v-3Zm20 0h-3v3h3v-3ZM7 21H4v-6h16v6h-3v-3H7v3Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
