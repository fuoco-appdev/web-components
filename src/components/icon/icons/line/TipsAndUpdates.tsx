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
    <path d="M6.25 21h4c0 1.1-.9 2-2 2s-2-.9-2-2Zm-2-1h8v-2h-8v2Zm11.5-9.5c0 3.82-2.66 5.86-3.77 6.5H4.52C3.41 16.36.75 14.32.75 10.5.75 6.36 4.11 3 8.25 3c4.14 0 7.5 3.36 7.5 7.5Zm-2 0c0-3.03-2.47-5.5-5.5-5.5a5.51 5.51 0 0 0-5.5 5.5c0 2.47 1.49 3.89 2.35 4.5h6.3c.86-.61 2.35-2.03 2.35-4.5Zm6.87-2.13L19.25 9l1.37.63.63 1.37.63-1.37L23.25 9l-1.37-.63L21.25 7l-.63 1.37ZM18.25 7l.94-2.06L21.25 4l-2.06-.94L18.25 1l-.94 2.06-2.06.94 2.06.94.94 2.06Z" />
  </svg>
)

export default Icon
