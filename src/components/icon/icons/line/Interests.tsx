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
    <path d="M7.02 13.5c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm5.98-6v8h8v-8h-8Zm6 6h-4v-4h4v4ZM7 2.5l-5 9h10l-5-9Zm0 4.12L8.6 9.5H5.4L7 6.62ZM19.25 3c-1.06 0-1.81.56-2.25 1.17C16.56 3.56 15.81 3 14.75 3 13.19 3 12 4.28 12 5.75c0 2 2.42 3.42 5 5.75 2.58-2.33 5-3.75 5-5.75C22 4.28 20.81 3 19.25 3ZM17 8.85c-1.45-1.22-3-2.4-3-3.1 0-.43.35-.75.75-.75.31 0 .52.17.73.37L17 6.8l1.52-1.43c.21-.2.42-.37.73-.37.4 0 .75.32.75.75 0 .7-1.55 1.88-3 3.1Z" />
  </svg>
)

export default Icon
