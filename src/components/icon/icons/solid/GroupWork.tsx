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
      d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm3.5 3a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-5 0Zm4-7a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0Zm4 7a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-5 0Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
