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
    <path d="M4.5 11.5v2h8v-2h-8Zm15 7h-2V7.88l-3 1.02V7.2l4.7-1.7h.3v13Z" />
  </svg>
)

export default Icon
