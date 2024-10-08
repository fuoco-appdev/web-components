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
    <path d="M21.9 20.48 3.52 2.1 2.1 3.51l1.61 1.61v13.17c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.42ZM8.96 18.29H5.71V7.12l2 2v3.67c0 .55.45 1 1 1h.25v4.5Zm1.5 0v-4.5h.25c.46 0 .82-.31.94-.73l3.31 3.31v1.92h-4.5Zm1.25-10.83L6.54 2.29h13.17c1.1 0 2 .9 2 2v13.17l-2-2V4.29h-2v8.5c0 .19-.07.36-.16.51l-3.84-3.84V4.29h-2v3.17Z" />
  </svg>
)

export default Icon
