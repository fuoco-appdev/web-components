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
    <path d="M4 19.5v-16h2v7L8.5 9l2.5 1.5v-7h5v7.08c.33-.05.66-.08 1-.08.34 0 .67.03 1 .08V3.5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.26c-.42-.6-.75-1.28-.97-2H4Zm13-7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5ZM15.75 20v-5l4 2.5-4 2.5Z" />
  </svg>
)

export default Icon
