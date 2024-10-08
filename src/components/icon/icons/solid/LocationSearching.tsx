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
      d="M13 3.06c4.17.46 7.48 3.77 7.94 7.94H23v2h-2.06A8.994 8.994 0 0 1 13 20.94V23h-2v-2.06A8.994 8.994 0 0 1 3.06 13H1v-2h2.06A8.994 8.994 0 0 1 11 3.06V1h2v2.06ZM5 12c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7-7 3.13-7 7Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
