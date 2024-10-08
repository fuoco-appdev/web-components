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
      d="M4 2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2Zm0 18h4v-4H4v4Zm4-6H4v-4h4v4ZM4 8h4V4H4v4Zm10 12h-4v-4h4v4Zm-4-6h4v-4h-4v4Zm4-6h-4V4h4v4Zm2 12h4v-4h-4v4Zm4-6h-4v-4h4v4Zm-4-6h4V4h-4v4Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
