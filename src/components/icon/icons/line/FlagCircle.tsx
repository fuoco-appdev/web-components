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
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
    <path d="m15 9-1-2H8v11h1.5v-5H12l1 2h5V9h-3Zm1.5 4.5h-2.57l-1-2H9.5v-3h3.57l1 2h2.43v3Z" />
  </svg>
)

export default Icon
