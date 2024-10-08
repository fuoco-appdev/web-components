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
    <path d="M17 2.5H2v2h15v-2Z" />
    <path d="M15 15.5h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4v3Zm-6 1H4v-4h5v4Zm-5.96-6 .6-3h11.72l.6 3H3.04Z" />
    <path d="M23 16.5h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2Z" />
  </svg>
)

export default Icon
