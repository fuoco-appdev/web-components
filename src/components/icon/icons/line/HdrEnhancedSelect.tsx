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
    <path d="M12 2c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6Zm0 2C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm1 7h-2V9H9V7h2V5h2v2h2v2h-2v2Zm11 9h-2v2h-1.5v-2h-2v-1.5h2v-2H22v2h2V20Zm-6-1.5c0 .6-.4 1.1-.9 1.4L18 22h-1.5l-.9-2h-1.1v2H13v-6h3.5c.8 0 1.5.7 1.5 1.5v1Zm-1.5 0v-1h-2v1h2Zm-13-.5v-2H5v6H3.5v-2.5h-2V22H0v-6h1.5v2h2Zm6.5-2c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5H6.5v-6H10Zm0 4.5v-3H8v3h2Z" />
  </svg>
)

export default Icon
