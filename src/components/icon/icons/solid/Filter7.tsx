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
      d="M7 1h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2ZM1 5h2v16h16v2H3c-1.1 0-2-.9-2-2V5Zm20 12H7V3h14v14ZM17 7l-4 8h-2l4-8h-4V5h6v2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
