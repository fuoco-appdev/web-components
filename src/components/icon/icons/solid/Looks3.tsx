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
      d="M5.01 3h14c1.1 0 1.99.9 1.99 2v14c0 1.1-.89 2-1.99 2h-14c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2Zm8.5 9c.83 0 1.5-.67 1.5-1.5V9a2 2 0 0 0-2-2H9v2h4v2h-2v2h2v2H9v2h4.01a2 2 0 0 0 2-2v-1.5c0-.83-.67-1.5-1.5-1.5Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
