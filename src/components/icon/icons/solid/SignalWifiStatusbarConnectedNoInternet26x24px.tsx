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
    <path d="M18.462 8.167h3.904l1.246-1.61c-.443-.345-4.91-4.14-11.612-4.14S.83 6.212.388 6.557L12 21.583l6.462-8.356v-5.06Z" />
    <path d="M20.308 10.083h1.846v7.667h-1.846v-7.667Z" />
    <path d="M20.308 19.667h1.846v1.916h-1.846v-1.916Z" />
  </svg>
)

export default Icon
