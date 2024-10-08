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
      d="M17 2H7v1.61l6.13 6.13L17 2Zm0 8h-3.61l2.28 2.28L17 10ZM2 4.27l1.41-1.41 15.73 15.73L17.73 20l-4.15-4.15L10 22v-9H7V9.27l-5-5Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
