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
    <path d="M9 17c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm3-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Zm3-4v2H5v-2c0-3.53 2.61-6.43 6-6.92V3h2v2.08c3.39.49 6 3.39 6 6.92Zm-2 0c0-2.76-2.24-5-5-5s-5 2.24-5 5h10Zm-9 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Z" />
  </svg>
)

export default Icon
