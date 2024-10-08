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
      d="M3 9h4V5H3v4Zm4 5H3v-4h4v4Zm0 5H3v-4h4v4Zm13-5H8v-4h12v4ZM8 19h12v-4H8v4ZM8 9V5h12v4H8Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
