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
    <path d="M12 3.5c-4.69 0-8.93 1.9-12 4.98L12 20.5 24 8.48A16.88 16.88 0 0 0 12 3.5Zm0 4c-2.86 0-5.5.94-7.65 2.51L2.92 8.57C5.51 6.58 8.67 5.5 12 5.5s6.49 1.08 9.08 3.07L19.65 10A12.99 12.99 0 0 0 12 7.5Z" />
  </svg>
)

export default Icon
