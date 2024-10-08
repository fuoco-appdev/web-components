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
    <path d="m19.102 10.39 1.06-1.06c.78-.78.78-2.05 0-2.83l-1.41-1.41c-.78-.78-2.05-.78-2.83 0l-1.06 1.06 4.24 4.24Zm-4.24 1.42L7.662 19h-1.41v-1.41l7.19-7.19 1.42 1.41Zm-1.42-4.25-9.19 9.2V21h4.24l9.19-9.19-4.24-4.25Zm5.81 9.94c0 2.19-2.54 3.5-5 3.5-.55 0-1-.45-1-1s.45-1 1-1c1.54 0 3-.73 3-1.5 0-.47-.48-.87-1.23-1.2l1.48-1.48c1.07.63 1.75 1.47 1.75 2.68Zm-14.42-4.15c-.97-.56-1.58-1.29-1.58-2.35 0-1.8 1.89-2.63 3.56-3.36 1.03-.46 2.44-1.08 2.44-1.64 0-.41-.78-1-2-1-1.26 0-1.8.61-1.83.64-.35.41-.98.46-1.4.12a.992.992 0 0 1-.15-1.38C3.982 4.24 5.012 3 7.252 3s4 1.32 4 3c0 1.87-1.93 2.72-3.64 3.47-.94.41-2.36 1.03-2.36 1.53 0 .31.43.6 1.07.86l-1.49 1.49Z" />
  </svg>
)

export default Icon
