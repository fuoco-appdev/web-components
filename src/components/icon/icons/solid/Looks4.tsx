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
      d="M4.838 3h13.44c1.056 0 1.92.9 1.92 2v14c0 1.1-.864 2-1.92 2H4.838c-1.056 0-1.92-.9-1.92-2V5c0-1.1.864-2 1.92-2Zm7.68 14h1.92V7h-1.92v4h-1.92V7h-1.92v6h3.84v4Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
