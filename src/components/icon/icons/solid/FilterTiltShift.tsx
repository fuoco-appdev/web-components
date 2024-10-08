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
      d="M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69A7.94 7.94 0 0 1 11 4.07Zm7.32.19A9.948 9.948 0 0 0 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43ZM21.95 11h-2.02a7.943 7.943 0 0 0-1.62-3.9l1.43-1.42A9.95 9.95 0 0 1 21.95 11ZM5.69 7.1 4.26 5.68A9.949 9.949 0 0 0 2.05 11h2.02a7.94 7.94 0 0 1 1.62-3.9ZM2.05 13h2.02c.18 1.46.76 2.79 1.62 3.89l-1.43 1.43A9.949 9.949 0 0 1 2.05 13ZM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3Zm4.74 6.33-1.43-1.43a7.947 7.947 0 0 0 1.62-3.89h2.02c-.2 2-1 3.84-2.21 5.32ZM13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62Zm-2 2.02c-2-.2-3.84-1-5.32-2.21l1.42-1.43a7.94 7.94 0 0 0 3.9 1.62v2.02Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
