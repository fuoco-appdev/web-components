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
      d="M11.5 2C6.81 2 3 5.81 3 10.5c0 4.69 3.81 8.5 8.5 8.5h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2Zm-1 14.5v-2h2v2h-2Zm1.77-6.678c-.828.635-1.77 1.357-1.77 3.178h2c0-1.095.711-1.717 1.44-2.354.77-.673 1.56-1.363 1.56-2.646 0-2.21-1.79-4-4-4s-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 .88-.58 1.324-1.23 1.822Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
