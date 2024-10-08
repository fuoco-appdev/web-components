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
      d="M11 3h2v10h-2V3Zm5.41 3.59 1.42-1.42A8.932 8.932 0 0 1 21 12a9 9 0 0 1-18 0c0-2.74 1.23-5.18 3.17-6.83l1.41 1.41A6.995 6.995 0 0 0 12 19c3.87 0 7-3.13 7-7a6.92 6.92 0 0 0-2.59-5.41Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
