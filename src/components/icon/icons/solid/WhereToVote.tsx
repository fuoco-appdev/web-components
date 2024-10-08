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
      d="M19 9c0-3.86-3.14-7-7-7S5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13Zm-1.98-1.55L10.47 14l-3.49-3.48L8.4 9.1l2.08 2.07 5.13-5.14 1.41 1.42Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
