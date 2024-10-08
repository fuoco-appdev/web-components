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
    <path d="M12 6.195c1.53 2 3.08 4.43 3.71 6.24l2.23 2.23c.03-.27.06-.55.06-.83 0-3.98-6-10.8-6-10.8s-1.18 1.35-2.5 3.19l1.44 1.44c.34-.51.7-1 1.06-1.47Zm-6.59-1.22L4 6.385l3.32 3.32c-.77 1.46-1.32 2.92-1.32 4.13 0 3.31 2.69 6 6 6 1.52 0 2.9-.57 3.95-1.5l2.63 2.63 1.42-1.41L5.41 4.975ZM12 17.835c-2.21 0-4-1.79-4-4 0-.69.32-1.62.81-2.64l5.72 5.72c-.7.56-1.57.92-2.53.92Z" />
  </svg>
)

export default Icon
