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
    <path d="M13 11H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h9v7ZM4 9h7V6H4v3Zm11 11H4c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h11v7ZM4 18h9v-3H4v3Zm18-9h-2l2-5h-7v7h2v9l5-11ZM4.75 17.25h1.5v-1.5h-1.5v1.5Zm0-9h1.5v-1.5h-1.5v1.5Z" />
  </svg>
)

export default Icon
