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
    <path d="M21 2.5H3c-1.1 0-2 .9-2 2v8h2v-8h18v16c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2Z" />
    <path d="M13 9.5c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4Zm-6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2Z" />
    <path d="M15.39 16.06C13.71 15.2 11.53 14.5 9 14.5s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 18.72v2.78h16v-2.78c0-1.12-.61-2.15-1.61-2.66ZM15 19.5H3c0-.72-.1-1.34.52-1.66C4.71 17.23 6.63 16.5 9 16.5c2.37 0 4.29.73 5.48 1.34.63.32.52.95.52 1.66Z" />
  </svg>
)

export default Icon
