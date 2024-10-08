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
      d="M22 11v2H9V7h9c2.21 0 4 1.79 4 4ZM2 14v2h6v2h8v-2h6v-2H2Zm5.1-6.14a3 3 0 0 1 .04 4.24 3 3 0 0 1-4.24.04 3 3 0 0 1-.04-4.24 3 3 0 0 1 4.24-.04Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
