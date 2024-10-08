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
      d="M12 2h8c1.1 0 2 .9 2 2v8c0 5.62-4.61 10-10.28 10C6.49 22 2 17.5 2 12.28 2 6.66 6.38 2 12 2Zm2 11 3 2V9l-3 2V9H7v6h7v-2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
