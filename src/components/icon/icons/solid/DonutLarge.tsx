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
      d="M5 12c0 3.52 2.61 6.43 6 6.92v3.03c-5.05-.5-9-4.76-9-9.95 0-5.19 3.95-9.45 9-9.95v3.03c-3.39.49-6 3.4-6 6.92Zm8-6.92A7 7 0 0 1 18.92 11h3.03c-.47-4.72-4.23-8.48-8.95-8.95v3.03ZM18.92 13A7 7 0 0 1 13 18.92v3.03c4.72-.47 8.48-4.23 8.95-8.95h-3.03Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
