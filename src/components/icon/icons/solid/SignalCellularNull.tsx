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
      d="M2 22 22 2v20H2Zm18-2V6.83L6.83 20H20Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
