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
      d="M15.49 3.48c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2Zm-4.6 11.5-1 4.4-7-1.4.4-2 4.9 1 1.6-8.1-1.8.7v3.4h-2v-4.7l5.2-2.2c.15 0 .275-.025.4-.05s.25-.05.4-.05c.7 0 1.3.4 1.7 1l1 1.6c.8 1.4 2.4 2.4 4.3 2.4v2c-2.2 0-4.2-1-5.5-2.5l-.6 3 2.1 2v7.5h-2v-6l-2.1-2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
