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
    <path d="m1.975.565-1.41 1.41 4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38a1.997 1.997 0 0 0 1.16 3.62c.67 0 1.26-.33 1.62-.84l2.84 2.84 1.41-1.41L1.975.565Zm5.59 13.87 1.1-2h2.36l2 2h-5.46Zm13-11H7.685l2 2h9.19l-2.76 5h-1.44l1.94 1.94c.54-.14.99-.49 1.25-.97l3.58-6.49c.37-.66-.12-1.48-.88-1.48Zm-13 14c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Z" />
  </svg>
)

export default Icon
