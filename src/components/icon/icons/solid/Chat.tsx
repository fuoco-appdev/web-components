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
      d="M4 2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H6l-3.99 4V4c0-1.1.89-2 1.99-2Zm14 7H6v2h12V9Zm-4 5H6v-2h8v2ZM6 8h12V6H6v2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
