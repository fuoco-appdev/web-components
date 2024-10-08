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
    <path
      fillRule="evenodd"
      d="M17.71 7.71 12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29ZM7 12l-2-2-2 2 2 2 2-2Zm7.88-4.29L13 5.83v3.76l1.88-1.88Zm0 8.58L13 18.17v-3.76l1.88 1.88ZM17 12l2-2 2 2-2 2-2-2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
