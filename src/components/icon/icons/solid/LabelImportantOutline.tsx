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
    <path
      fillRule="evenodd"
      d="M3 19h12c.65 0 1.26-.32 1.63-.84L21 12l-4.37-6.16C16.26 5.31 15.65 5 15 5H3l4.5 7L3 19Zm12-2H6.5l3.5-5-3.5-5H15l3.5 5-3.5 5Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
