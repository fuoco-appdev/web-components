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
      d="M10 15v-5c-2.21 0-4-1.79-4-4s1.79-4 4-4h8v2h-2v11h-2V4h-2v11h-2Zm-2-1v3h12v2H8v3l-4-4 4-4Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
