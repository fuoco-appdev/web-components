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
    <path d="M3 3v18h18V3H3Zm16 16H5V5h14v14ZM11 7h2v2h-2V7ZM7 7h2v2H7V7Zm8 0h2v2h-2V7Zm-8 4h2v2H7v-2Zm4 0h2v2h-2v-2Zm4 0h2v2h-2v-2Z" />
  </svg>
)

export default Icon
