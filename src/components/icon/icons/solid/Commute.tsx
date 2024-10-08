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
    <path
      fillRule="evenodd"
      d="M5 4h7c1.66 0 3 1.34 3 3v1h-2V6H4v7h5v5H7l-2 2H4v-1l1-1c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3Zm1 11c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1Zm14.57-5.34c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66l-1.42 4.11v5.51c0 .38.31.72.69.72h.62c.38 0 .68-.38.68-.76V18h8v1.24c0 .38.31.76.69.76h.61c.38 0 .69-.34.69-.72l.01-1.37v-4.14l-1.43-4.11Zm-.97.34h-7.19l-1.03 3h9.25l-1.03-3ZM12 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm7-1c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
