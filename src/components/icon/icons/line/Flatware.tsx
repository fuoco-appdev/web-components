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
    <path d="M16 7.08c0 1.77-.84 3.25-2 3.82V21h-2V10.9c-1.16-.57-2-2.05-2-3.82C10.01 4.83 11.35 3 13 3c1.66 0 3 1.83 3 4.08ZM17 3v18h2v-8h2V7c0-1.76-1.24-4-4-4ZM8.28 3c-.4 0-.72.32-.72.72V7h-.84V3.72C6.72 3.32 6.4 3 6 3c-.4 0-.72.32-.72.72V7h-.84V3.72c0-.4-.32-.72-.72-.72-.4 0-.72.32-.72.72V9c0 1.1.9 2 2 2v10h2V11c1.1 0 2-.9 2-2V3.72c0-.4-.32-.72-.72-.72Z" />
  </svg>
)

export default Icon
