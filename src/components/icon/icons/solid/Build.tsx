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
    <path d="M12.09 2.91C10.08.9 7.07.49 4.65 1.67l4.34 4.34-3 3-4.34-4.34C.48 7.1.89 10.09 2.9 12.1a6.507 6.507 0 0 0 6.89 1.48l9.11 9.11c.39.39 1.02.39 1.41 0l2.3-2.3a.996.996 0 0 0 0-1.41L13.54 9.9c.92-2.34.44-5.1-1.45-6.99Z" />
  </svg>
)

export default Icon
