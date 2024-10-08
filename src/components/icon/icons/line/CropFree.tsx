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
    <path d="M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2Zm2 10H3v4c0 1.1.9 2 2 2h4v-2H5v-4Zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4Zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2Z" />
  </svg>
)

export default Icon
