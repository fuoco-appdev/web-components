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
      d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4ZM13 16v2h-2v-2h2Zm.63-2.6c.29-.29.67-.71.67-.71.43-.43.7-1.03.7-1.69 0-1.66-1.34-3-3-3s-3 1.34-3 3h1.5c0-.83.67-1.5 1.5-1.5a1.498 1.498 0 0 1 1.06 2.56l-.93.94c-.47.48-.93 1.17-.93 2h1.6c0-.45.35-1.12.83-1.6Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
