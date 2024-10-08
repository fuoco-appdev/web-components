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
      d="M2 12C2 6.47 6.47 2 11.99 2 17.52 2 22 6.47 22 12s-4.49 10-10.01 10S2 17.53 2 12Zm5.82 0 1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06L7.82 12ZM12 13.5c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5Zm0 6.5c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Zm3.12-11.18 1.06-1.06 1.06 1.06-1.06 1.06 1.06 1.06L16.18 12l-1.06-1.06L14.06 12 13 10.94l1.06-1.06L13 8.82l1.06-1.06 1.06 1.06Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
