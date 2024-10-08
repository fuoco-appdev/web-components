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
    <path d="M18 14c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6v4l5-5-5-5v4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8h-2Z" />
    <path d="M10.9 17v-4.27h-.09l-1.77.63v.69l1.01-.31V17h.85Z" />
    <path d="M14.32 12.78c-.18-.07-.37-.1-.59-.1-.22 0-.41.03-.59.1s-.33.18-.45.33c-.12.15-.23.34-.29.57-.06.23-.1.5-.1.82v.74c0 .32.04.6.11.82.07.22.17.42.3.57.13.15.28.26.46.33s.37.1.59.1c.22 0 .41-.03.59-.1s.33-.18.45-.33c.12-.15.22-.34.29-.57.07-.23.1-.5.1-.82v-.74c0-.32-.04-.6-.11-.82-.07-.22-.17-.42-.3-.57-.13-.15-.29-.26-.46-.33Zm.01 2.57c0 .19-.01.35-.04.48s-.06.24-.11.32c-.05.08-.11.14-.19.17s-.16.05-.25.05-.18-.02-.25-.05a.436.436 0 0 1-.19-.17c-.05-.08-.09-.19-.12-.32s-.04-.29-.04-.48v-.97c0-.19.01-.35.04-.48s.06-.23.12-.31c.06-.08.11-.14.19-.17s.16-.05.25-.05.18.02.25.05c.07.03.14.09.19.17.05.08.09.18.12.31s.04.29.04.48v.97h-.01Z" />
  </svg>
)

export default Icon
