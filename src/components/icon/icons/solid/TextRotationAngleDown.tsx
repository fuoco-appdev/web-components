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
      d="m11.25 8.48 3.54 3.54-.92 2.19 1.48 1.48 4.42-11.14-1.06-1.05L7.57 7.92 9.06 9.4l2.19-.92ZM15 21v-4.24l-1.41 1.41-9.2-9.19-1.41 1.41 9.19 9.19L10.76 21H15Zm.61-10.7 2.23-4.87-4.87 2.23 2.64 2.64Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
