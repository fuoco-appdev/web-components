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
    <path d="m19.475 11.29-4.58-4.59 1.41-1.41 6 6-3.59 3.59-1.41-1.42 2.17-2.17ZM1.695 3.51l4.19 4.19-3.58 3.59 6 6 1.41-1.41-4.58-4.59 2.17-2.17 12.78 12.78 1.41-1.41L3.115 2.1l-1.42 1.41Z" />
  </svg>
)

export default Icon
