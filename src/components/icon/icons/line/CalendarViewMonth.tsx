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
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2ZM8 11H4V6h4v5Zm6 0h-4V6h4v5Zm6 0h-4V6h4v5ZM8 18H4v-5h4v5Zm6 0h-4v-5h4v5Zm6 0h-4v-5h4v5Z" />
  </svg>
)

export default Icon
