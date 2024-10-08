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
      d="M8.43 13.44 19.77 2.1 24 6.33 8.43 21.9 0 13.47l4.23-4.23 4.2 4.2Zm12.74-7.11-1.4-1.4L8.43 16.27l-4.2-4.2-1.4 1.4 5.6 5.6L21.17 6.33Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
