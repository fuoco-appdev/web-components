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
    <path d="M14 12v2.5l5.5 5.5H22l-8-8Zm0 8h3l-3-3v3ZM8 4l-6 6h2v10h8V10h2L8 4Zm1 10H7v-4h2v4Z" />
  </svg>
)

export default Icon
