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
    <path d="M13 7h-2v2h2V7Zm0 4h-2v2h2v-2Zm4 0h-2v2h2v-2ZM3 3v18h18V3H3Zm16 16H5V5h14v14Zm-6-4h-2v2h2v-2Zm-4-4H7v2h2v-2Z" />
  </svg>
)

export default Icon
