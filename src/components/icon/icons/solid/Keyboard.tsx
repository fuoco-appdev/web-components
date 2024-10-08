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
      d="M4 5h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2l.01-10c0-1.1.89-2 1.99-2Zm9 3h-2v2h2V8Zm-2 3h2v2h-2v-2Zm-1-3H8v2h2V8Zm-2 3h2v2H8v-2Zm-3 2h2v-2H5v2Zm2-3H5V8h2v2Zm1 7h8v-2H8v2Zm8-4h-2v-2h2v2Zm-2-3h2V8h-2v2Zm5 3h-2v-2h2v2Zm-2-3h2V8h-2v2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
