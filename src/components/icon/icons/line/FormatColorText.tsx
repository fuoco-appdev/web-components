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
    <path d="M2 18.5h20v4H2v-4Zm3.49-3h2.42l1.27-3.58h5.65l1.26 3.58h2.42l-5.26-14h-2.5l-5.26 14Zm4.42-5.61 2.03-5.79h.12l2.03 5.79H9.91Z" />
  </svg>
)

export default Icon
