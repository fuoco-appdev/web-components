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
    <path d="m12 17.77 6.18 3.73-1.64-7.03L22 9.74l-7.19-.61L12 2.5 9.19 9.13 2 9.74l5.46 4.73-1.64 7.03L12 17.77Z" />
  </svg>
)

export default Icon
