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
      d="M3 3h2v2H3V3Zm4 0h2v2H7V3Zm2 8H7v2h2v-2Zm4 4h-2v2h2v-2Zm0-4h-2v2h2v-2Zm0-4h-2v2h2V7Zm2 4h2v2h-2v-2Zm-2-8h-2v2h2V3Zm2 0h2v2h-2V3Zm4 10h2v-2h-2v2Zm2 4h-2v-2h2v2ZM5 7H3v2h2V7Zm14-2V3h2v2h-2Zm0 4h2V7h-2v2ZM3 11h2v2H3v-2Zm0 10h18v-2H3v2Zm0-6h2v2H3v-2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
