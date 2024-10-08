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
      d="M11.99 8c0 1.66-1.33 3-2.99 3-1.66 0-3-1.34-3-3s1.34-3 3-3 2.99 1.34 2.99 3Zm7 1.5c0 1.38-1.11 2.5-2.49 2.5a2.5 2.5 0 0 1 0-5c1.38 0 2.49 1.12 2.49 2.5ZM16.5 14c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75ZM2 16.5C2 14.17 6.67 13 9 13c.66 0 1.5.1 2.37.28C9.33 14.41 9 15.9 9 16.75V19H2v-2.5Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
