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
      d="M2 4v16h20V4H2Zm5 4H5v8h2V8Zm5 8H9c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1Zm3 0h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1Zm1-6h1v4h-1v-4Zm-6 0h1v4h-1v-4Zm-6 8h16V6H4v12Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
