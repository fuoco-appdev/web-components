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
      d="M5 9c0-3.86 3.14-7 7-7s7 3.14 7 7c0 5.25-7 13-7 13S5 14.25 5 9Zm8 1h3V8h-3V5h-2v3H8v2h3v3h2v-3Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
