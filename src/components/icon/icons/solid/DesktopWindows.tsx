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
      d="M3 2h18c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-7v2h2v2H8v-2h2v-2H3c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2Zm0 14h18V4H3v12Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
