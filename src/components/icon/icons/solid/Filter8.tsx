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
      d="M7 1h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2ZM1 5h2v16h16v2H3c-1.1 0-2-.9-2-2V5Zm20 12H7V3h14v14Zm-6-2h-2a2 2 0 0 1-2-2v-1.5c0-.83.67-1.5 1.5-1.5-.83 0-1.5-.67-1.5-1.5V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5.67 1.5 1.5V13a2 2 0 0 1-2 2Zm-2-8h2v2h-2V7Zm2 4h-2v2h2v-2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
