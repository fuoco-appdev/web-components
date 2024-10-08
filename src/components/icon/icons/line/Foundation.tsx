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
    <path d="M19 12.5h3l-10-9-10 9h3v3H3v2h2v3h2v-3h4v3h2v-3h4v3h2v-3h2v-2h-2v-3Zm-12 3v-4.81l4-3.6v8.41H7Zm6 0V7.09l4 3.6v4.81h-4Z" />
  </svg>
)

export default Icon
