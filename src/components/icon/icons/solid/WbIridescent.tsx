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
      d="M11 1v3h2V1h-2ZM5 15h14V9.05H5V15Zm12.25-9.61 1.79-1.79 1.42 1.41-1.8 1.79-1.41-1.41ZM13 23v-2.95h-2V23h2Zm5.65-5.7 1.8 1.79-1.42 1.42-1.79-1.8 1.41-1.41ZM3.55 5.01 5.34 6.8l1.41-1.41L4.96 3.6 3.55 5.01Zm3.2 13.69-1.79 1.8-1.41-1.42 1.79-1.79 1.41 1.41Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
