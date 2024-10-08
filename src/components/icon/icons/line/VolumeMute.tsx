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
    <path d="M14.5 8.83v6.34L12.33 13H9.5v-2h2.83l2.17-2.17Zm2-4.83-5 5h-4v6h4l5 5V4Z" />
  </svg>
)

export default Icon
