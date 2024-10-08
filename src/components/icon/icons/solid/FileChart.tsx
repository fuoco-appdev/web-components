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
    <path d="M13 9h5.5L13 3.5V9ZM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2Zm1 18h2v-6H7v6Zm4 0h2v-8h-2v8Zm4 0h2v-4h-2v4Z" />
  </svg>
)

export default Icon
