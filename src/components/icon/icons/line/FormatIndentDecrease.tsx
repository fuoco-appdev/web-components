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
    <path d="M11 17h10v-2H11v2Zm-8-5 4 4V8l-4 4Zm0 9h18v-2H3v2ZM3 3v2h18V3H3Zm8 6h10V7H11v2Zm0 4h10v-2H11v2Z" />
  </svg>
)

export default Icon
