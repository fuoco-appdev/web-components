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
    <path d="M20.995 10.18V8.72c0-.47-.16-.92-.46-1.28l-3.94-4.72c-.38-.46-.94-.72-1.54-.72H2.995c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h.18c.42 1.16 1.52 2 2.82 2 1.3 0 2.4-.84 2.82-2h8.37a2.996 2.996 0 0 0 5.82-1c-.01-1.3-.85-2.4-2.01-2.82Zm-15 3.82c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm1-3.83A3.014 3.014 0 0 0 3.165 12h-.17V9h4v1.17Zm0-3.17h-4V4h4v3Zm7 5h-5V9h3V7h-3V4h5v8Zm2-6.88 2.4 2.88h-2.4V5.12Zm1.17 6.88h-1.17v-2h3v.17c-.85.3-1.53.98-1.83 1.83Zm2.83 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z" />
    <path d="M6.995 19h4v-2l6 3h-4v2l-6-3Z" />
  </svg>
)

export default Icon
