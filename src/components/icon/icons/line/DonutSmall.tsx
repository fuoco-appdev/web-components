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
    <path d="M14.845 11h7.13c-.47-4.72-4.23-8.48-8.95-8.95v7.13c.85.31 1.51.97 1.82 1.82Zm.18-6.42c2 .82 3.6 2.42 4.42 4.42h-3.43c-.28-.37-.62-.71-.99-.99V4.58Zm-13 7.42c0 5.19 3.95 9.45 9 9.95v-7.13c-1.16-.42-2-1.52-2-2.82 0-1.3.84-2.4 2-2.82V2.05c-5.05.5-9 4.76-9 9.95Zm7-7.42v3.44c-1.23.92-2 2.39-2 3.98 0 1.59.77 3.06 2 3.99v3.44c-2.96-1.19-5-4.08-5-7.43 0-3.35 2.04-6.24 5-7.42Zm4 10.24v7.13c4.72-.47 8.48-4.23 8.95-8.95h-7.13c-.31.85-.97 1.51-1.82 1.82Zm2 1.17c.37-.28.71-.61.99-.99h3.43c-.82 2-2.42 3.6-4.42 4.42v-3.43Z" />
  </svg>
)

export default Icon
