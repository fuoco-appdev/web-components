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
    <path d="M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2ZM3 3h2v2H3V3Zm2 18H3v-2h2v2Zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2Zm4 2h-2v-2h2v2ZM19 5V3h2v2h-2Zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2Zm-3.04-1.26h2.61L12 8.91l-1.31 3.83Z" />
  </svg>
)

export default Icon
