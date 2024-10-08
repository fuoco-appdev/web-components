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
    <path d="M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2Zm-7 19.6-7-4.66V3h14v12.93l-7 4.67Zm-2.01-7.42-2.58-2.59L6 12l4 4 8-8-1.42-1.42-6.59 6.6Z" />
  </svg>
)

export default Icon
