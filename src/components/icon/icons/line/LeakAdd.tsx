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
    <path d="M6 3H3v3c1.66 0 3-1.34 3-3Zm8 0h-2a9 9 0 0 1-9 9v2c6.08 0 11-4.93 11-11Zm-4 0H8c0 2.76-2.24 5-5 5v2c3.87 0 7-3.13 7-7Zm0 18h2a9 9 0 0 1 9-9v-2c-6.07 0-11 4.93-11 11Zm8 0h3v-3c-1.66 0-3 1.34-3 3Zm-4 0h2c0-2.76 2.24-5 5-5v-2c-3.87 0-7 3.13-7 7Z" />
  </svg>
)

export default Icon
