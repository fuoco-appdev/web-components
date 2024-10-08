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
      d="M16.83 4H20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3.17L9 2h6l1.83 2ZM15 13v2.5l3.5-3.5L15 8.5V11H9V8.5L5.5 12 9 15.5V13h6Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
