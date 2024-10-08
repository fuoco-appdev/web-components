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
      d="M15 9h2V7h4V5h-4V3h-2v6ZM7 9v2H3v2h4v2h2V9H7Zm6 10v2h-2v-6h2v2h8v2h-8ZM3 19v-2h6v2H3Zm18-8v2H11v-2h10Zm-8-6H3v1.99h10V5Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
