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
      d="M3 3h18c1 0 2 1 2 2v14c0 1-1 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1 1-2 2-2Zm5.5 9.5L5 17h14l-4.5-6-3.5 4.51-2.5-3.01Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
