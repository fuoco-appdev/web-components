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
      d="M18 6v3.5l4-4v13l-4-4V18c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h14c.55 0 1 .45 1 1Zm-5 7v2.5l3.5-3.5L13 8.5V11H7V8.5L3.5 12 7 15.5V13h6Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
