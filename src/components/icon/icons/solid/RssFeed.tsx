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
    <path
      fillRule="evenodd"
      d="M4 7.27V4.44c8.59 0 15.56 6.97 15.56 15.56h-2.83c0-7.03-5.7-12.73-12.73-12.73Zm0 2.83v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9ZM6.18 20a2.18 2.18 0 1 0 0-4.36 2.18 2.18 0 0 0 0 4.36Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
