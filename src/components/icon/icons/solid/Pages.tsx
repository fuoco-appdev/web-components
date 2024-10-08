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
      d="M3 11V5c0-1.1.9-2 2-2h6v5L7 7l1 4H3Zm0 2h5l-1 4 4-1v5H5c-1.1 0-2-.9-2-2v-6Zm14 4-4-1v5h6c1.1 0 2-.9 2-2v-6h-5l1 4ZM13 3h6c1.1 0 2 .9 2 2v6h-5l1-4-4 1V3Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
