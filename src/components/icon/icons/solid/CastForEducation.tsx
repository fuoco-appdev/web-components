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
      d="M3 3h18c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2h-7v-2h7V5H3v3H1V5c0-1.1.9-2 2-2ZM1 21v-3c1.66 0 3 1.34 3 3H1Zm0-7v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7Zm0-2v-2c6.07 0 11 4.92 11 11h-2a9 9 0 0 0-9-9Zm10-.91v2L14.5 15l3.5-1.91v-2L14.5 13 11 11.09ZM9 9l5.5-3L20 9l-5.5 3L9 9Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
