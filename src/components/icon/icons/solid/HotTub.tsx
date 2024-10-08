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
      d="M18.09 9.41c.15-.79-.1-1.58-.67-2.2l-.07-.06c-1.03-1.01-1.5-2.36-1.3-3.72l.06-.43H18l-.09.59c-.15.79.1 1.58.67 2.2l.07.07c1.03 1 1.51 2.35 1.3 3.71l-.06.43h-1.91l.11-.59ZM9 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm2.15 6c-.31-.22-.59-.46-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C6.01 9 5 10.01 5 11.25V12H2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8H11.15ZM5 20h2v-6H5v6Zm6 0H9v-6h2v6Zm2-6v6h2v-6h-2Zm4 6v-6h2v6h-2ZM14.09 9.41c.15-.79-.1-1.58-.67-2.2l-.07-.06c-1.03-1.01-1.5-2.36-1.3-3.72l.06-.43H14l-.09.59c-.15.79.1 1.58.67 2.2l.07.07c1.03 1 1.51 2.35 1.3 3.71l-.06.43h-1.91l.11-.59Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
