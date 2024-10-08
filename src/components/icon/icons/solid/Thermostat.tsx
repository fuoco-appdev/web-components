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
      d="M12 2c1.66 0 3 1.34 3 3v8c1.21.91 2 2.37 2 4 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-1.63.79-3.09 2-4V5c0-1.66 1.34-3 3-3Zm0 2c-.55 0-1 .45-1 1v6h2V9h-1V8h1V6h-1V5h1c0-.55-.45-1-1-1Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
