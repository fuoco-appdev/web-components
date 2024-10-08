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
      d="m7.62 0 8.94 8.94c.59.59.59 1.54 0 2.12l-5.5 5.5c-.29.29-.68.44-1.06.44s-.77-.15-1.06-.44l-5.5-5.5a1.49 1.49 0 0 1 0-2.12l5.15-5.15-2.38-2.38L7.62 0ZM10 5.21 5.21 10h9.58L10 5.21Zm9 6.29s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5Zm5 8.5H0v4h24v-4Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
