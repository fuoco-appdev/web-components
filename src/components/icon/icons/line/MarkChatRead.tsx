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
    <path d="M11.5 18h-6l-4 4V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v7h-2V4h-16v12h8v2Zm11-3.66-1.41-1.41-4.24 4.24-2.12-2.12-1.41 1.41L16.84 20l5.66-5.66Z" />
  </svg>
)

export default Icon
