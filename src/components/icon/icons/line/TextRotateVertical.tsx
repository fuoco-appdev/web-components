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
    <path d="M16 5h-1.5L9.75 16h2.1l.9-2.2h5l.9 2.2h2.1L16 5Zm-2.62 7 1.87-5.02L17.12 12h-3.74Zm-7.13 8 3-3h-2V4h-2v13h-2l3 3Z" />
  </svg>
)

export default Icon
