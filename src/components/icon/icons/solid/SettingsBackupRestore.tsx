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
      d="M3 12a9 9 0 1 1 3.52 7.14l1.42-1.44A6.995 6.995 0 0 0 19 12c0-3.87-3.13-7-7-7s-7 3.13-7 7h3l-4 4-4-4h3Zm9-2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
