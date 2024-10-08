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
    <path d="m16 5.175 2.83 2.83-2.83 2.83-2.83-2.83L16 5.175Zm-7.66.48v4h-4v-4h4Zm10 10v4h-4v-4h4Zm-10 0v4h-4v-4h4ZM16 2.345l-5.66 5.65 5.66 5.66 5.66-5.66L16 2.345Zm-5.66 1.31h-8v8h8v-8Zm10 10h-8v8h8v-8Zm-10 0h-8v8h8v-8Z" />
  </svg>
)

export default Icon
