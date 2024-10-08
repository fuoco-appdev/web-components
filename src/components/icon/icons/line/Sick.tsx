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
    <path d="M6.73 10.56 7.79 9.5 6.73 8.44l1.06-1.06L9.91 9.5l-2.12 2.12-1.06-1.06ZM3.91 9c.03 0 .05.01.08.01A8.002 8.002 0 0 1 11.41 4c2.19 0 4.16.88 5.61 2.3.15-.6.45-1.29.81-1.96A9.965 9.965 0 0 0 11.4 2c-4.88 0-8.94 3.51-9.81 8.14C2.15 9.44 3 9 3.91 9Zm16.5 1.5c-.42 0-.82-.09-1.19-.22.12.55.19 1.13.19 1.72 0 4.42-3.58 8-8 8-3.36 0-6.23-2.07-7.42-5.01-.03 0-.05.01-.08.01-.52 0-1.04-.14-1.5-.4-.32-.18-.59-.42-.82-.7.89 4.61 4.93 8.1 9.8 8.1 5.54 0 10.02-4.48 10.02-10 0-.55-.06-1.09-.14-1.62a3.5 3.5 0 0 1-.86.12Zm0-7.5s-2 2.9-2 4 .9 2 2 2 2-.9 2-2-2-4-2-4Zm-5.38 4.38L12.91 9.5l2.12 2.12 1.06-1.06-1.06-1.06 1.06-1.06-1.06-1.06ZM7.97 17c.69-1.19 1.97-2 3.44-2s2.75.81 3.44 2h1.68c-.8-2.05-2.79-3.5-5.12-3.5-.87 0-1.7.2-2.43.57L5.4 12c0-.52-.26-1.02-.74-1.29-.72-.41-1.63-.17-2.05.55-.41.72-.17 1.63.55 2.05.48.28 1.05.25 1.49 0l2.97 1.72c-.57.53-1.03 1.21-1.33 1.97h1.68Z" />
  </svg>
)

export default Icon
