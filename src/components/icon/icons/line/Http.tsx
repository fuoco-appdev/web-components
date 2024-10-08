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
    <path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2Zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5Zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5Zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5Zm0 2.5h-2v-1h2v1Z" />
  </svg>
)

export default Icon
