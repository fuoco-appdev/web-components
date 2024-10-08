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
    <path d="m14.5 11-3 6v-4h-2l3-6v4h2ZM17 3H7v1h10V3Zm0 17H7v1h10v-1Zm0-19c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h10ZM7 18h10V6H7v12Z" />
  </svg>
)

export default Icon
