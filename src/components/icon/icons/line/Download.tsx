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
    <path d="M19 9.5h-4v-6H9v6H5l7 7 7-7Zm-8 2v-6h2v6h1.17L12 13.67 9.83 11.5H11Zm-6 7h14v2H5v-2Z" />
  </svg>
)

export default Icon
