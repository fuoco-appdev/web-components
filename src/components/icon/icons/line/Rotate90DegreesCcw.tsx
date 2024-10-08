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
    <path d="m7.91 7.03-6.48 6.49L7.92 20l6.49-6.48-6.5-6.49Zm-3.65 6.49 3.66-3.66 3.65 3.66-3.66 3.66-3.65-3.66Zm15.67-6.26a8.95 8.95 0 0 0-6.36-2.64V1.38L9.33 5.62l4.24 4.24V6.62c1.79 0 3.58.68 4.95 2.05a7.007 7.007 0 0 1 0 9.9 6.973 6.973 0 0 1-7.79 1.44L9.24 21.5c1.35.74 2.84 1.12 4.33 1.12 2.3 0 4.61-.88 6.36-2.64a8.98 8.98 0 0 0 0-12.72Z" />
  </svg>
)

export default Icon
