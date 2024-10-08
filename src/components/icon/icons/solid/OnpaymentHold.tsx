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
      d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2Zm0 14H4v-6h16v6ZM4 8h16V6H4v2Z"
      clipRule="evenodd"
    />
    <path d="M12.375 16.875h-.75v-.75h.75v.75Z" />
    <path d="M12.375 15.375h-.75v-2.25h.75v2.25Z" />
  </svg>
)

export default Icon
