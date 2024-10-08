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
    <path d="M21 13.12h-3.07c-.05-.39-.12-.77-.22-1.14l2.58-1.49-1-1.73-2.37 1.36c-.28-.48-.62-.91-.99-1.29.1-.56.2-1.69-.58-2.89L17 4.29l-1.41-1.41-1.72 1.72c-1.68-.89-3.1-.33-3.73 0L8.41 2.88 7 4.29l1.65 1.65c-.78 1.2-.68 2.34-.58 2.89-.37.39-.71.82-.99 1.29L4.71 8.75l-1 1.73 2.58 1.49c-.1.37-.17.75-.22 1.14H3v2h3.07c.05.39.12.77.22 1.14l-2.58 1.49 1 1.73 2.37-1.35c1.08 1.81 2.88 3 4.92 3s3.84-1.19 4.92-3l2.37 1.37 1-1.73-2.58-1.49c.1-.37.17-.75.22-1.14H21v-2.01Zm-9-7c.88 0 1.62.57 1.88 1.36-.59-.23-1.22-.36-1.88-.36-.66 0-1.29.13-1.88.36.26-.79 1-1.36 1.88-1.36Zm0 13c-2.21 0-4-2.24-4-5s1.79-5 4-5 4 2.24 4 5-1.79 5-4 5Z" />
    <path d="M13 11.12h-2v6h2v-6Z" />
  </svg>
)

export default Icon
