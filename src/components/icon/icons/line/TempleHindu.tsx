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
    <path d="M20 11.5v2h-2l-3-10v-2h-2v2h-2.03v-2h-2v2.12L6 13.5H4v-2H2v11h9v-5h2v5h9v-11h-2Zm-4.69 0H8.69l.6-2h5.42l.6 2Zm-1.2-4H9.89l.6-2h3.02l.6 2Zm5.89 13h-5v-5H9v5H4v-5h3.49l.6-2h7.82l.6 2H20v5Z" />
  </svg>
)

export default Icon
