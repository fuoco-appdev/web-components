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
    <path d="m17.165 12.915 2.55-1.62-11-7v.17l8.45 8.45Z" />
    <path d="m3.525 2.105-1.42 1.41 6.61 6.61v8.17l4.99-3.18 6.78 6.78 1.41-1.41-18.37-18.38Zm7.19 12.55v-2.53l1.55 1.55-1.55.98Z" />
  </svg>
)

export default Icon
