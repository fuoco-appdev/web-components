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
      d="M3 6h18c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2Zm0 10h18V8h-2v4h-2V8h-2v4h-2V8h-2v4H9V8H7v4H5V8H3v8Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
