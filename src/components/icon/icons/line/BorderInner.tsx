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
    <path d="M3 21h2v-2H3v2Zm4 0h2v-2H7v2ZM5 7H3v2h2V7ZM3 17h2v-2H3v2ZM9 3H7v2h2V3ZM5 3H3v2h2V3Zm12 0h-2v2h2V3Zm2 6h2V7h-2v2Zm0-6v2h2V3h-2Zm-4 18h2v-2h-2v2ZM13 3h-2v8H3v2h8v8h2v-8h8v-2h-8V3Zm6 18h2v-2h-2v2Zm0-4h2v-2h-2v2Z" />
  </svg>
)

export default Icon
