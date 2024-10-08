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
      d="M5 5H3c0-1.1.9-2 2-2v2Zm0 8H3v-2h2v2Zm2 8h2v-2H7v2ZM5 9H3V7h2v2Zm8-6h-2v2h2V3Zm6 2V3c1.1 0 2 .9 2 2h-2ZM5 21v-2H3c0 1.1.9 2 2 2Zm0-4H3v-2h2v2ZM9 3H7v2h2V3Zm4 18h-2v-2h2v2Zm6-8h2v-2h-2v2Zm2 6c0 1.1-.9 2-2 2v-2h2ZM19 9h2V7h-2v2Zm2 8h-2v-2h2v2Zm-6 4h2v-2h-2v2Zm2-16h-2V3h2v2ZM7 17h10V7H7v10Zm8-8H9v6h6V9Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
