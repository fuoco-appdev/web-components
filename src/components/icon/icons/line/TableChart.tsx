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
    <path d="M19.5 3h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 2v3h-15V5h15Zm-5 14h-5v-9h5v9Zm-10-9h3v9h-3v-9Zm12 9v-9h3v9h-3Z" />
  </svg>
)

export default Icon
