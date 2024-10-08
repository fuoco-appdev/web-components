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
    <path d="M11 7.535H2v2h9v-2Zm0 8H2v2h9v-2Zm5.34-4-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L22 5.875l-5.66 5.66Zm0 8-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24 1.43 1.41-5.66 5.66Z" />
  </svg>
)

export default Icon
