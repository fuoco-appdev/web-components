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
      d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2ZM10 9H7v3H5V7h5v2Zm7 3h2v5h-5v-2h3v-3ZM3 19.01h18V4.99H3v14.02Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
