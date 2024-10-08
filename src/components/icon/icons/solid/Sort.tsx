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
      d="M3 6v2h18V6H3Zm0 12h6v-2H3v2Zm12-5H3v-2h12v2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
