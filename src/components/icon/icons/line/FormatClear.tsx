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
    <path d="M21 7.07v-3H7.39l3 3h1.83l-.55 1.28 2.09 2.1 1.45-3.38H21ZM4.41 3.93 3 5.34l6.97 6.97-2.47 5.76h3l1.57-3.66 5.66 5.66 1.41-1.41L4.41 3.93Z" />
  </svg>
)

export default Icon
