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
    <path d="M13 18.5h-2v-2h2v2Zm2-4H9v6h6v-6Zm4-4.7V4.5h-3v2.6l-4-3.6-10 9h3l7-6.31 7 6.31h3l-3-2.7Z" />
  </svg>
)

export default Icon
