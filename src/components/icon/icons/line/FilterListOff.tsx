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
    <path d="M11.545 7.295h10.17v-2H9.545l2 2Zm5 5h2.17v-2h-4.17l2 2Zm-1.83 3.83v1.17h-4v-2h3.17l-3-3h-4.17v-2h2.17l-3-3h-2.17v-2h.17l-1.78-1.78 1.41-1.41 18.38 18.38-1.41 1.41-5.77-5.77Z" />
  </svg>
)

export default Icon
