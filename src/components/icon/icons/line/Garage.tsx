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
    <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 18H4V4h16v16Z" />
    <path d="M9 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <path d="M15 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <path d="M5.78 18.5h.44c.43 0 .78-.36.78-.81V16.5h10v1.19c0 .45.34.81.78.81h.44c.43 0 .78-.36.78-.81v-6.5c-.82-2.46-1.34-4.03-1.56-4.69-.05-.16-.12-.29-.19-.4-.02-.02-.03-.04-.05-.07a1.26 1.26 0 0 0-.92-.53H7.72s-.54.01-.92.54c-.02.02-.03.04-.05.06-.07.11-.14.24-.19.4-.22.66-.74 2.22-1.56 4.69v6.5c0 .45.35.81.78.81Zm2.55-11h7.34l.23.69.43 1.31H7.67l.66-2ZM7 11.5h10v3H7v-3Z" />
  </svg>
)

export default Icon
