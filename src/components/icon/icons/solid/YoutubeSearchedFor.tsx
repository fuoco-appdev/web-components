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
    <path d="M17.01 14h-.8l-.27-.27a6.451 6.451 0 0 0 1.57-4.23 6.5 6.5 0 0 0-6.5-6.5c-3.59 0-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51a4.5 4.5 0 0 1 9 0 4.507 4.507 0 0 1-6.32 4.12L7.71 15.1a6.474 6.474 0 0 0 7.52-.67l.27.27v.79l5.01 4.99L22 19l-4.99-5Z" />
  </svg>
)

export default Icon
