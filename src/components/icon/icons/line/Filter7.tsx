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
    <path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5Zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2Zm0 16H7V3h14v14Zm-8-2 4-8V5h-6v2h4l-4 8h2Z" />
  </svg>
)

export default Icon
