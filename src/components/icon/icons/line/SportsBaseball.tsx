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
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM5.61 16.78A7.864 7.864 0 0 1 4 12c0-1.8.6-3.45 1.61-4.78a5.975 5.975 0 0 1 0 9.56ZM12 20c-1.89 0-3.63-.66-5-1.76 1.83-1.47 3-3.71 3-6.24 0-2.53-1.17-4.77-3-6.24A7.963 7.963 0 0 1 12 4c1.89 0 3.63.66 5 1.76-1.83 1.47-3 3.71-3 6.24 0 2.53 1.17 4.77 3 6.24A7.963 7.963 0 0 1 12 20Zm6.39-3.22a5.975 5.975 0 0 1 0-9.56A7.864 7.864 0 0 1 20 12c0 1.8-.6 3.45-1.61 4.78Z" />
  </svg>
)

export default Icon
