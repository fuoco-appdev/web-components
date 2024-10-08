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
    <path d="M16.71 6.11 18.3 7.7l1.41-1.41-4-4-4 4 1.41 1.41 1.59-1.59v4.35l2 2V6.11Z" />
    <path d="m2.1 3.51 6.61 6.61v6.35l-1.59-1.59-1.41 1.41 4 4 4-4-1.41-1.41-1.59 1.59v-4.35l9.78 9.78 1.41-1.42L3.52 2.1 2.1 3.51Z" />
  </svg>
)

export default Icon
