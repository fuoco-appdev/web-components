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
    <path d="M4 16v6h16v-6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2Zm14 2H6v-2h12v2ZM12 2C9.24 2 7 4.24 7 7l5 7 5-7c0-2.76-2.24-5-5-5Zm0 9L9 7c0-1.66 1.34-3 3-3s3 1.34 3 3l-3 4Z" />
  </svg>
)

export default Icon
