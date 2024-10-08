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
    <path d="M21 15h2v2h-2v-2Zm0-4h2v2h-2v-2Zm2 8h-2v2c1 0 2-1 2-2ZM13 3h2v2h-2V3Zm8 4h2v2h-2V7Zm0-4v2h2c0-1-1-2-2-2ZM1 7h2v2H1V7Zm16-4h2v2h-2V3Zm0 16h2v2h-2v-2ZM3 3C2 3 1 4 1 5h2V3Zm6 0h2v2H9V3ZM5 3h2v2H5V3Zm-4 8v8c0 1.1.9 2 2 2h12V11H1Zm2 8 2.5-3.21 1.79 2.15 2.5-3.22L13 19H3Z" />
  </svg>
)

export default Icon
