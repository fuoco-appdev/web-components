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
      d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2ZM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5Zm11 7V8a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v1H9v2h3a2 2 0 0 0 2-2Zm-3-4v1h1V8h-1Zm8 1h2V3H7v14h14v-6h-2v2h-2v-2h-2V9h2V7h2v2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
