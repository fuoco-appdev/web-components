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
    <path d="m9.03 3-1.11 7.07h2.62l.7-4.5h2.58L11.8 18.43H9.47L9.06 21h7.27l.4-2.57h-2.35l2-12.86h2.58l-.71 4.5h2.65L22 3H9.03ZM8 5H4l-.31 2h4L8 5Zm-.61 4h-4l-.31 2h4l.31-2Zm.92 8h-6L2 19h6l.31-2Zm.62-4h-6l-.31 2h6.01l.3-2Z" />
  </svg>
)

export default Icon
