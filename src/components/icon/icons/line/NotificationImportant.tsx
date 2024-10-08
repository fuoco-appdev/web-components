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
    <path d="M10.01 20.76c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98ZM12 5.75c2.76 0 5 2.24 5 5v7H7v-7c0-2.76 2.24-5 5-5Zm0-4.5c-.83 0-1.5.67-1.5 1.5v1.17C7.36 4.6 5 7.4 5 10.75v6l-2 2v1h18v-1l-2-2v-6c0-3.35-2.36-6.15-5.5-6.83V2.75c0-.83-.67-1.5-1.5-1.5Zm-1 6.5h2v4h-2v-4Zm0 6h2v2h-2v-2Z" />
  </svg>
)

export default Icon
