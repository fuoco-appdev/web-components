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
      d="M12 4a7.49 7.49 0 0 1 7.35 6.04c2.6.18 4.65 2.32 4.65 4.96 0 2.76-2.24 5-5 5H6c-3.31 0-6-2.69-6-6 0-3.09 2.34-5.64 5.35-5.96A7.496 7.496 0 0 1 12 4Zm0 14 5-5h-3V9h-4v4H7l5 5Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
