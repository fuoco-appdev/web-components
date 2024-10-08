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
    <path d="m19.279 4.93-2.12-2.12c-.78-.78-2.05-.78-2.83 0l-2.83 2.83 2.12 2.12 2.12-2.12 3.54 3.54a3.012 3.012 0 0 0 0-4.25Z" />
    <path d="M5.489 13.77c.59.59 1.54.59 2.12 0l2.47-2.47-2.12-2.13-2.47 2.47c-.59.59-.59 1.54 0 2.13Z" />
    <path d="m15.039 7.76-1.42 1.42L10.439 6c-.59-.6-1.54-.6-2.12-.01a1.49 1.49 0 0 0 0 2.12l3.18 3.18-7.07 7.07c-.78.78-.78 2.05 0 2.83.78.78 2.05.78 2.83 0l9.19-9.19a.996.996 0 1 0 1.41-1.41l-2.82-2.83Z" />
  </svg>
)

export default Icon
