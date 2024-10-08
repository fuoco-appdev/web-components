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
    <path d="M17.5 9c0-3.04-2.46-5.5-5.5-5.5S6.5 5.96 6.5 9c0 2.7 1.94 4.93 4.5 5.4v2.1H9v2h2v2h2v-2h2v-2h-2v-2.1c2.56-.47 4.5-2.7 4.5-5.4Zm-9 0c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5S8.5 10.93 8.5 9Z" />
  </svg>
)

export default Icon
