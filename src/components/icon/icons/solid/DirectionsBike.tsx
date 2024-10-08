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
      d="M17.5 3.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2ZM0 17c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5Zm5 3.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5ZM19.1 11c-2.1 0-3.8-.8-5.1-2.1l-.8-.8-2.4 2.4 2.2 2.3V19h-2v-5l-3.2-2.8c-.4-.3-.6-.8-.6-1.4 0-.5.2-1 .6-1.4l2.8-2.8c.3-.4.8-.6 1.4-.6.6 0 1.1.2 1.6.6l1.9 1.9c.9.9 2.1 1.5 3.6 1.5v2Zm-.1 1c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5Zm-3.5 5c0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
