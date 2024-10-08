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
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-6 2h6v6h-3l1-4-4 1V5ZM5 5h6v3L7 7l1 4H5V5Zm6 14H5v-6h3l-1 4 4-1v3Zm8 0h-6v-3l4 1-1-4h3v6Zm-4.37-4.37L12 13.72l-2.63.91.91-2.63-.91-2.63 2.63.91 2.63-.91-.91 2.63.91 2.63Z" />
  </svg>
)

export default Icon
