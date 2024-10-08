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
    <path d="M16 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-5-5Zm3 16H5V5h10v4h4v10ZM7 17h10v-2H7v2Zm5-10H7v2h5V7Zm-5 6h10v-2H7v2Z" />
  </svg>
)

export default Icon
