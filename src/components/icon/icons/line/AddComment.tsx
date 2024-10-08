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
    <path d="M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4Zm-2 13.17L18.83 16H4V4h16v13.17ZM13 5h-2v4H7v2h4v4h2v-4h4V9h-4V5Z" />
  </svg>
)

export default Icon
