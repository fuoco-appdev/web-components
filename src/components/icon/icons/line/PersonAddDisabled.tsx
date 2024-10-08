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
    <path d="M15.5 5.145c1.1 0 2 .9 2 2a2 2 0 0 1-1.67 1.97l-2.31-2.31c.17-.94.99-1.66 1.98-1.66Zm0-2c-2.21 0-4 1.79-4 4 0 .18.03.35.05.52l3.43 3.43c.17.02.34.05.52.05 2.21 0 4-1.79 4-4s-1.79-4-4-4Zm1.69 10.16 5.84 5.84h.47v-2c0-2.14-3.56-3.5-6.31-3.84Zm-3.68 1.97 1.87 1.87H9.5c.08-.24.88-1.01 2.91-1.57l1.1-.3ZM1.91.855.5 2.265l4 4v2.88h-3v2h3v3h2v-3h2.88l2.51 2.51c-2.2.6-4.39 1.79-4.39 3.49v2h9.88l4 4 1.41-1.41L1.91.855Zm4.59 8.29v-.88l.88.88H6.5Z" />
  </svg>
)

export default Icon
