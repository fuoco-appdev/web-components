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
    <path d="M15.115 11.185v6.97l-5-2.14-5 2.14V5.185h6v-2h-6c-1.1 0-2 .9-2 2v16l7-3 7 3v-10h-2Zm.83-2-2.83-2.83 1.41-1.41 1.41 1.41 3.54-3.54 1.41 1.41-4.94 4.96Z" />
  </svg>
)

export default Icon
