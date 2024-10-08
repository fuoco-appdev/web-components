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
    <path d="M7 11h2v2H7v-2Zm14-5v14c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2ZM5 8h14V6H5v2Zm14 12V10H5v10h14Zm-4-7h2v-2h-2v2Zm-4 0h2v-2h-2v2Z" />
  </svg>
)

export default Icon
