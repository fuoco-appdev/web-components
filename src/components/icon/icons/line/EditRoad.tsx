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
    <path d="M16.499 4h-2v7.9l2-2V4Z" />
    <path d="M4.499 4h-2v16h2V4Z" />
    <path d="M10.499 4h-2v4h2V4Z" />
    <path d="M10.499 10h-2v4h2v-4Z" />
    <path d="M10.499 16h-2v4h2v-4Z" />
    <path d="m21.059 12.59-1.15-1.15a1.49 1.49 0 0 0-2.12 0l-5.29 5.29V20h3.27l5.29-5.29c.59-.59.59-1.54 0-2.12Zm-5.98 5.86h-1.03v-1.03l3.45-3.45 1.03 1.03-3.45 3.45Z" />
  </svg>
)

export default Icon
