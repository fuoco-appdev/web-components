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
    <path d="M20.839 7.401a.996.996 0 0 0 0-1.41l-2.83-2.83a.996.996 0 0 0-1.41 0l-4.49 4.49-3.89-3.89c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l3.89 3.89-4.51 4.51v4.24h4.24l4.52-4.52 3.89 3.89c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-3.89-3.89 4.48-4.48Zm-15.93-.33 1.89-1.9 1.27 1.27-1.18 1.19 1.41 1.41 1.19-1.19 1.2 1.2-1.9 1.9-3.88-3.88Zm11.23 7.44-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9-3.89-3.89 1.9-1.9 1.21 1.21Zm-9.86 4.62h-1.41v-1.41l9.61-9.61 1.41 1.41-9.61 9.61Zm9.61-12.44 1.41-1.41 1.41 1.41-1.41 1.41-1.41-1.41Z" />
  </svg>
)

export default Icon
