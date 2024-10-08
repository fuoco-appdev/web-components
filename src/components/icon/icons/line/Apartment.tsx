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
    <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4ZM7 19H5v-2h2v2Zm0-4H5v-2h2v2Zm0-4H5V9h2v2Zm4 4H9v-2h2v2Zm0-4H9V9h2v2Zm0-4H9V5h2v2Zm4 8h-2v-2h2v2Zm0-4h-2V9h2v2Zm0-4h-2V5h2v2Zm4 12h-2v-2h2v2Zm0-4h-2v-2h2v2Z" />
  </svg>
)

export default Icon
