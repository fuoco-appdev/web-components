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
    <path d="m6 20 3-3H7V4H5v13H3l3 3Zm6.2-11.5v5l-2.2.9v2.1l11-4.75v-1.5L10 5.5v2.1l2.2.9Zm6.82 2.5L14 12.87V9.13L19.02 11Z" />
  </svg>
)

export default Icon
