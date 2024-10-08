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
      d="M21 4h-6v6l2.24-2.24A6.003 6.003 0 0 1 19 12a5.99 5.99 0 0 1-4 5.65v2.09c3.45-.89 6-4.01 6-7.74 0-2.21-.91-4.2-2.36-5.64L21 4ZM5.36 17.64A7.925 7.925 0 0 1 3 12c0-3.73 2.55-6.85 6-7.74v2.09C6.67 7.17 5 9.39 5 12c0 1.66.68 3.15 1.76 4.24L9 14v6H3l2.36-2.36ZM13 17h-2v-2h2v2Zm0-4h-2V7h2v6Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
