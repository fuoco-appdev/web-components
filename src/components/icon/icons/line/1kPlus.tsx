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
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14v6.5Z" />
    <path d="M7.5 15H9V9H6v1.5h1.5V15Z" />
    <path d="M12 12.75 13.75 15h1.75l-2.25-3 2.25-3h-1.75L12 11.25V9h-1.5v6H12v-2.25Z" />
  </svg>
)

export default Icon
