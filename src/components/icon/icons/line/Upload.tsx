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
    <path d="M9 16.5h6v-6h4l-7-7-7 7h4v6Zm3-10.17 2.17 2.17H13v6h-2v-6H9.83L12 6.33ZM5 18.5h14v2H5v-2Z" />
  </svg>
)

export default Icon
