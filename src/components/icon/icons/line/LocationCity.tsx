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
    <path d="M15 11.5v-6l-3-3-3 3v2H3v14h18v-10h-6Zm-8 8H5v-2h2v2Zm0-4H5v-2h2v2Zm0-4H5v-2h2v2Zm6 8h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm6 12h-2v-2h2v2Zm0-4h-2v-2h2v2Z" />
  </svg>
)

export default Icon
