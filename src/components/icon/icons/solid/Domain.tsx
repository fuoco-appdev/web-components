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
      d="M12 7h10v14H2V3h10v4ZM4 19h2v-2H4v2Zm2-4H4v-2h2v2Zm-2-4h2V9H4v2Zm2-4H4V5h2v2Zm2 12h2v-2H8v2Zm2-4H8v-2h2v2Zm-2-4h2V9H8v2Zm2-4H8V5h2v2Zm10 12V9h-8v2h2v2h-2v2h2v2h-2v2h8Zm-2-8h-2v2h2v-2Zm-2 4h2v2h-2v-2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
