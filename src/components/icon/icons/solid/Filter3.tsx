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
      d="M7 1h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2Zm0 16h14V3H7v14ZM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5Zm14 6.5V13a2 2 0 0 1-2 2h-4v-2h4v-2h-2V9h2V7h-4V5h4a2 2 0 0 1 2 2v1.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5.67 1.5 1.5Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
