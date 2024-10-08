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
    <path d="M3 16h5v-2H3v2Zm6.5 0h5v-2h-5v2Zm6.5 0h5v-2h-5v2ZM3 20h2v-2H3v2Zm4 0h2v-2H7v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2ZM3 12h8v-2H3v2Zm10 0h8v-2h-8v2ZM3 4v4h18V4H3Z" />
  </svg>
)

export default Icon
