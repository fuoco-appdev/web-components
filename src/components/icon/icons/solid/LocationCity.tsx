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
      d="M15 5v6h6v10H3V7h6V5l3-3 3 3ZM5 19h2v-2H5v2Zm2-4H5v-2h2v2Zm-2-4h2V9H5v2Zm6 8v-2h2v2h-2Zm0-6v2h2v-2h-2Zm0-2V9h2v2h-2Zm0-6v2h2V5h-2Zm8 14h-2v-2h2v2Zm-2-4h2v-2h-2v2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
