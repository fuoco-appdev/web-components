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
      d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm-5.93 11.5L12 7.98 9.93 13.5h4.14Zm.74 2 1.14 3h2.09l-5.11-13h-1.86l-5.11 13h2.09l1.12-3h5.64Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
