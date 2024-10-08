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
    <path d="M18 14c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6v4l5-5-5-5v4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8h-2Zm-5.52 2.15c-.05.07-.11.13-.18.17-.07.04-.17.06-.27.06a.6.6 0 0 1-.42-.15.633.633 0 0 1-.19-.41h-.84c.01.2.05.37.13.53.08.16.19.28.32.39.13.11.29.19.46.24.17.05.35.08.53.08.24 0 .46-.04.64-.12.18-.08.33-.18.45-.31s.21-.28.27-.45c.06-.17.09-.35.09-.54 0-.22-.03-.43-.09-.6a1.31 1.31 0 0 0-.25-.45c-.11-.12-.25-.22-.41-.28-.16-.06-.34-.1-.55-.1-.07 0-.14.01-.2.02s-.13.02-.18.04c-.05.02-.1.03-.15.05-.05.02-.08.04-.11.05l.11-.92h1.7v-.71h-2.39l-.25 2.17.67.17c.03-.03.06-.06.1-.09.04-.03.07-.05.12-.07.05-.02.1-.04.15-.05.05-.01.13-.02.2-.02.12 0 .22.02.3.05.08.03.16.09.21.15.05.06.1.14.13.24.03.1.04.19.04.31s-.01.22-.03.31c-.02.09-.06.17-.11.24Z" />
  </svg>
)

export default Icon
