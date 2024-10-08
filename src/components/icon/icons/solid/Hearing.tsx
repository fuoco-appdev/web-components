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
      d="M7.64 2.64 6.22 1.22A10.966 10.966 0 0 0 3 9c0 3.04 1.23 5.79 3.22 7.78l1.41-1.41A9.011 9.011 0 0 1 5 9c0-2.49 1.01-4.74 2.64-6.36ZM17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.505-1.546-1.452-2.277-2.365-2.98l-.025-.02-.01-.008c-.787-.607-1.603-1.237-2.31-2.522C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55A3.999 3.999 0 0 0 21 18h-2c0 1.1-.9 2-2 2Zm-3-8.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
