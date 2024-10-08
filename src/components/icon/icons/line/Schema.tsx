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
    <path d="M13.5 9v2h-3V9H8V7h2.5V1h-7v6H6v2H3.5v6H6v2H3.5v6h7v-6H8v-2h2.5v-2h3v2h7V9h-7Zm-8-6h3v2h-3V3Zm3 18h-3v-2h3v2Zm0-8h-3v-2h3v2Zm10 0h-3v-2h3v2Z" />
  </svg>
)

export default Icon
