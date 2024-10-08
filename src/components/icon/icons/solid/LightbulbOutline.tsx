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
      d="M12 2C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7ZM9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm5-7.3.85-.6A4.997 4.997 0 0 0 17 9c0-2.76-2.24-5-5-5S7 6.24 7 9c0 1.63.8 3.16 2.15 4.1l.85.6V16h4v-2.3Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
