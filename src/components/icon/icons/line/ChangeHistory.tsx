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
    <path d="M12 7.77 18.39 18H5.61L12 7.77ZM12 4 2 20h20L12 4Z" />
  </svg>
)

export default Icon
