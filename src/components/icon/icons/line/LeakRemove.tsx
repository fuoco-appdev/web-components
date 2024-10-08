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
    <path d="M13.93 3.07h-2c0 1.35-.31 2.63-.84 3.77l1.49 1.49c.86-1.56 1.35-3.35 1.35-5.26Zm7 9v-2c-1.91 0-3.7.49-5.27 1.35l1.49 1.49c1.15-.53 2.43-.84 3.78-.84Zm0 4v-2c-.79 0-1.54.13-2.24.37l1.68 1.68c.19-.01.37-.05.56-.05Zm-11-13h-2c0 .19-.04.37-.06.56l1.68 1.68c.25-.7.38-1.46.38-2.24Zm-5.59-.14L2.93 4.34l2.84 2.84c-.81.56-1.78.89-2.84.89v2c1.61 0 3.09-.55 4.27-1.46l1.43 1.43a8.99 8.99 0 0 1-5.7 2.03v2c2.72 0 5.2-.99 7.11-2.62l2.51 2.51c-1.63 1.92-2.62 4.4-2.62 7.11h2c0-2.16.76-4.14 2.03-5.7l1.43 1.43a6.972 6.972 0 0 0-1.46 4.27h2c0-1.06.33-2.03.89-2.84l2.84 2.84 1.41-1.41L4.34 2.93Z" />
  </svg>
)

export default Icon
