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
    <path d="M24 14.07c0-2.64-2.05-4.78-4.65-4.96A7.49 7.49 0 0 0 12 3.07c-1.33 0-2.57.36-3.65.97l1.49 1.49c.67-.29 1.39-.46 2.16-.46 3.04 0 5.5 2.46 5.5 5.5v.5H19a2.996 2.996 0 0 1 1.79 5.4l1.41 1.41c1.09-.92 1.8-2.27 1.8-3.81ZM4.41 2.93 3 4.34l2.77 2.77h-.42A5.994 5.994 0 0 0 0 13.07c0 3.31 2.69 6 6 6h11.73l2 2 1.41-1.41L4.41 2.93ZM6 17.07c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73l8 8H6Z" />
  </svg>
)

export default Icon
