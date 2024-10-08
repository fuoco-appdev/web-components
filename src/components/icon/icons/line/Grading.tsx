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
    <path d="M4 7h16v2H4V7Zm0 6h16v-2H4v2Zm0 4h7v-2H4v2Zm0 4h7v-2H4v2Zm11.41-2.83L14 16.75l-1.41 1.41L15.41 21 20 16.42 18.58 15l-3.17 3.17ZM4 3v2h16V3H4Z" />
  </svg>
)

export default Icon
