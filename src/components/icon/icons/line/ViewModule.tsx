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
    <path d="M3 5v14h18V5H3Zm16 6h-3.33V7H19v4Zm-5.33 0h-3.33V7h3.33v4ZM8.33 7v4H5V7h3.33ZM5 17v-4h3.33v4H5Zm5.33 0v-4h3.33v4h-3.33Zm5.34 0v-4H19v4h-3.33Z" />
  </svg>
)

export default Icon
