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
    <path d="m21.408 11.412-8.83-8.83c-.37-.37-.88-.58-1.41-.58h-7.17c-1.1 0-2 .9-2 2v7.17c0 .53.21 1.04.59 1.41l8.83 8.83c.78.78 2.05.78 2.83 0l7.17-7.17c.78-.78.78-2.04-.01-2.83Zm-8.58 8.59-8.83-8.83v-7.17h7.17l8.83 8.83-7.17 7.17Z" />
    <path d="M6.498 8.002a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
)

export default Icon
