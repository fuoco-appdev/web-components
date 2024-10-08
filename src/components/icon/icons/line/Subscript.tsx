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
    <path d="M19.56 18h-2v1h3v1h-4v-2c0-.55.45-1 1-1h2v-1h-3v-1h3c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1ZM3.44 18H6.1l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L15.37 4h-2.68L9.62 8.99H9.5L6.41 4H3.75l4.32 6.73L3.44 18Z" />
  </svg>
)

export default Icon
