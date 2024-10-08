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
    <path d="M17 19.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2Zm-12-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm9-9.34L8.6 14.5H14V8.16Zm3.65-5.66C19.52 2.5 21 4.06 21 5.98v.52h-2v-.52c0-.82-.58-1.48-1.35-1.48-.68 0-1.07.59-1.65 1.27v8.73c0 1.1-.9 2-2 2H6.43c-.85 0-1.31-1-.76-1.65l8.8-10.32c.64-.76 1.52-2.03 3.18-2.03ZM9 4.5c-.65 0-1.29.09-1.91.27l1.4 1.4 1.37-1.61A6.11 6.11 0 0 0 9 4.5Zm0-2c1.56 0 3.03.4 4.3 1.1L8.6 9.11 3.72 4.22A8.962 8.962 0 0 1 9 2.5Z" />
  </svg>
)

export default Icon
