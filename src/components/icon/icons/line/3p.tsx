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
    <path d="M20 2H4.01c-1.1 0-2 .9-2 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 14H5.17L4 17.17V4h16v12Zm-8-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 8 13.43V14h8v-.57Z" />
  </svg>
)

export default Icon
