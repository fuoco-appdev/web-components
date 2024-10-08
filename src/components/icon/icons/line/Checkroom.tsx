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
    <path d="m21.6 18.201-8.6-6.45v-.91a3.496 3.496 0 0 0-.18-6.75 3.51 3.51 0 0 0-4.32 3.41h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5-.54-.01-.97.45-.97.99v1.76l-8.6 6.45c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8Zm-15.6-.2 6-4.5 6 4.5H6Z" />
  </svg>
)

export default Icon
