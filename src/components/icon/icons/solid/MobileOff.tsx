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
      d="M17 5v8.61l2 2V3c0-1.1-.9-2-2-2H7c-.71 0-1.33.37-1.68.93L8.39 5H17ZM1.49 3.76 5 7.27V21c0 1.1.9 2 2 2h10c1.02 0 1.85-.77 1.98-1.75l1.72 1.72 1.41-1.41L2.9 2.35 1.49 3.76ZM16.73 19 7 9.27V19h9.73Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
