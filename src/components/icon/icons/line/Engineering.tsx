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
    <path d="M9.045 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2h-12Z" />
    <path d="M4.785 9h.26c0 2.21 1.79 4 4 4s4-1.79 4-4h.26c.27 0 .49-.22.49-.49v-.02a.49.49 0 0 0-.49-.49h-.26c0-1.48-.81-2.75-2-3.45v.95c0 .28-.22.5-.5.5s-.5-.22-.5-.5V4.14a4.09 4.09 0 0 0-1-.14c-.35 0-.68.06-1 .14V5.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-.95c-1.19.7-2 1.97-2 3.45h-.26a.49.49 0 0 0-.49.49v.03c0 .26.22.48.49.48Zm6.26 0c0 1.1-.9 2-2 2s-2-.9-2-2h4Z" />
    <path d="m22.025 6.23.93-.83-.75-1.3-1.19.39c-.14-.11-.3-.2-.47-.27L20.295 3h-1.5l-.25 1.22c-.17.07-.33.16-.48.27l-1.18-.39-.75 1.3.93.83c-.02.17-.02.35 0 .52l-.93.85.75 1.3 1.2-.38c.13.1.28.18.43.25l.28 1.23h1.5l.27-1.22c.16-.07.3-.15.44-.25l1.19.38.75-1.3-.93-.85c.03-.19.02-.36.01-.53Zm-2.48 1.52a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
    <path d="m19.445 10.79-.85.28c-.1-.08-.21-.14-.33-.19l-.18-.88h-1.07l-.18.87c-.12.05-.24.12-.34.19l-.84-.28-.54.93.66.59c-.01.13-.01.25 0 .37l-.66.61.54.93.86-.27c.1.07.2.13.31.18l.18.88h1.07l.19-.87c.11-.05.22-.11.32-.18l.85.27.54-.93-.66-.61c.01-.13.01-.25 0-.37l.66-.59-.53-.93Zm-1.9 2.6c-.49 0-.89-.4-.89-.89s.4-.89.89-.89.89.4.89.89-.4.89-.89.89Z" />
  </svg>
)

export default Icon
