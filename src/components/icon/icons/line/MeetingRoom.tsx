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
    <path d="M19 19V4h-4V3H5v16H3v2h12V6h2v15h4v-2h-2Zm-6 0H7V5h6v14Zm-3-8h2v2h-2v-2Z" />
  </svg>
)

export default Icon
