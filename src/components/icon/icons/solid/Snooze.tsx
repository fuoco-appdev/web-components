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
      d="M8.663 1.81h-2v3.943a9 9 0 1 0 2-1.114V1.81Zm0 5.037V4.64a8.985 8.985 0 0 0-2 1.114V7.81h.644A6.984 6.984 0 0 0 5 13c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7a6.958 6.958 0 0 0-3.337.848Zm0 0v.964H7.307c.41-.372.866-.696 1.356-.963Zm8.674-5.036h6v2h-6v-2ZM9 11h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9v2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
