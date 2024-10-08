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
      d="M11 5h3v2H2V5h3l1-1h4l1 1ZM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10ZM15 8h7v2h-7V8Zm0 8h4v2h-4v-2Zm6-4h-6v2h6v-2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
