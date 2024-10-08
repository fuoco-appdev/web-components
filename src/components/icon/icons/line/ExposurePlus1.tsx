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
    <path d="M10 7.5H8v4H4v2h4v4h2v-4h4v-2h-4v-4Zm10 11h-2V7.88L15 8.9V7.2l4.7-1.7h.3v13Z" />
  </svg>
)

export default Icon
