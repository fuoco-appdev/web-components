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
    <path d="M14 17H4v2h10v-2Zm6-8H4v2h16V9ZM4 15h16v-2H4v2ZM4 5v2h16V5H4Z" />
  </svg>
)

export default Icon
