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
    <path d="M18.43 10h-3.61l2.28 2.28L18.43 10Zm0-8h-10v1.61l6.13 6.13L18.43 2Zm-13.59.86L3.43 4.27l5 5V13h3v9l3.58-6.15L19.16 20l1.41-1.41L4.84 2.86Z" />
  </svg>
)

export default Icon
