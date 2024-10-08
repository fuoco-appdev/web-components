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
      d="m18 4-3 3h2v13h2V7h2l-3-3Zm-4 12.4-2.2-.9v-5l2.2-.9V7.5L3 12.25v1.5l11 4.75v-2.1Zm-4-5.27L4.98 13 10 14.87v-3.74Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
