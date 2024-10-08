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
    <path d="M8.805 6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2h-4.66l2 2h5.56v5.56l2 2V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5-2.32 0-4.26 1.59-4.82 3.74l1.72 1.72V6Zm-4.49-1.19-1.41 1.41 2.04 2.04c-.62.34-1.04.99-1.04 1.74v10c0 1.1.9 2 2 2h12.78l1 1 1.41-1.41L4.315 4.81ZM5.905 20V10h.78l10 10H5.905Z" />
  </svg>
)

export default Icon
