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
    <path d="M13.5 4h-4v4h4V4Z" />
    <path d="M7.5 16h-4v4h4v-4Z" />
    <path d="M7.5 10h-4v4h4v-4Z" />
    <path d="M7.5 4h-4v4h4V4Z" />
    <path d="M19.5 4h-4v4h4V4Z" />
    <path d="M10.5 17.86V20h2.1l5.98-5.97-2.12-2.12-5.96 5.95Z" />
    <path d="M13.5 12.03V10h-4v4h2.03l1.97-1.97Z" />
    <path d="m20.35 11.56-1.41-1.41c-.2-.2-.51-.2-.71 0l-1.06 1.06 2.12 2.12 1.06-1.06c.2-.2.2-.51 0-.71Z" />
  </svg>
)

export default Icon
