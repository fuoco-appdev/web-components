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
    <path d="m21.5 11.5-4.37 6.16c-.37.52-.98.84-1.63.84h-3v-2h3l3.55-5-3.55-5h-10v3h-2v-3c0-1.1.9-2 2-2h10c.65 0 1.26.31 1.63.84l4.37 6.16Zm-11 3h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2Z" />
  </svg>
)

export default Icon
