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
    <path d="M5 17h14v2H5v-2Zm7-12L5.33 15h13.34L12 5Zm0 3.6 2.93 4.4H9.07L12 8.6Z" />
  </svg>
)

export default Icon
