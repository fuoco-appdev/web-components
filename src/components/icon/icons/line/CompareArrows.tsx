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
    <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3Zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4Z" />
  </svg>
)

export default Icon
