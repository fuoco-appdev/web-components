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
      d="M23 1v6h-2v10h2v6h-6v-2H7v2H1v-6h2V7H1V1h6v2h10V1h6ZM5 3H3v2h2V3Zm0 18H3v-2h2v2Zm2-4v2h10v-2h2V7h-2V5H7v2H5v10h2Zm14 4h-2v-2h2v2ZM19 3v2h2V3h-2Zm-5.27 11h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2Zm-.43-1.26h-2.61L12 8.91l1.3 3.83Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
