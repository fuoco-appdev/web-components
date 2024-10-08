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
    <path d="M15.155 7.295c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4h-.18l-.77-.77c.6-.94.95-2.05.95-3.23Zm7.83 12h.17v-3c0-2.18-3.58-3.47-6.34-3.87 1.1.75 1.95 1.71 2.23 2.94l3.94 3.93Zm-13.83-14c-.06 0-.11 0-.16.01l-1.6-1.6a3.996 3.996 0 0 1 5.35 5.35l-1.6-1.6c.01-.05.01-.1.01-.16 0-1.1-.9-2-2-2Zm.17 6h-.17c-2.21 0-4-1.79-4-4v-.17l-4.31-4.32 1.41-1.41 19.8 19.8-1.41 1.41-3.49-3.48v.17h-16v-3c0-2.66 5.33-4 8-4 .37 0 .8.03 1.25.08l-1.08-1.08Zm-.17 3c-2.7 0-5.8 1.29-6 2.01v.99h12v-.17l-2.11-2.11c-1.13-.41-2.56-.72-3.89-.72Z" />
  </svg>
)

export default Icon
