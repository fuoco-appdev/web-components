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
    <path d="M13.715 9.29c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1h-1.5v-.5h-2v1l-1.5-1.5Zm3.5 3.5 1.21 1.21c.18-.19.29-.44.29-.71v-1h-1.5v.5Zm-7.67-7.5h10.17v10.17l1.98 1.98c0-.05.02-.1.02-.16V5.29c0-1.1-.9-2-2-2H7.545l2 2Zm10.95 16.61-2.61-2.61H5.715a2 2 0 0 1-2-2v-12c0-.05.02-.1.02-.15l-1.63-1.63 1.41-1.41 18.38 18.38-1.4 1.42Zm-12.28-9.11h2v-.5h.67l-2.5-2.5h-.17v3Zm7.67 4.5-4.17-4.17v.17c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.32.16-.59.4-.78l-1.4-1.39v10.17h10.17Z" />
  </svg>
)

export default Icon
