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
    <path d="M6 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    <path d="M15 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    <path d="M17.5 13.5v5h-14v-5h14c-1.91 0-3.63-.76-4.89-2h-8.3l1.04-3h5.44c-.19-.63-.29-1.3-.29-2s.1-1.37.29-2H7.5v2H5c-.66 0-1.21.42-1.42 1.01L1.5 13.5v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-.09-.27c-.61.17-1.25.27-1.91.27Z" />
    <path d="M17.5 1.5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm.5 8h-1v-1h1v1Zm0-2h-1v-4h1v4Z" />
  </svg>
)

export default Icon
