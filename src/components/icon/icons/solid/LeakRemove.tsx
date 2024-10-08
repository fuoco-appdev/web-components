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
      d="m3 4.27 1.41-1.41 16.73 16.73L19.73 21l-2.84-2.84A4.96 4.96 0 0 0 16 21h-2c0-1.61.55-3.09 1.46-4.27l-1.43-1.43A8.99 8.99 0 0 0 12 21h-2c0-2.71.99-5.19 2.62-7.11l-2.51-2.51A10.912 10.912 0 0 1 3 14v-2c2.16 0 4.14-.76 5.7-2.03L7.27 8.54A6.972 6.972 0 0 1 3 10V8c1.06 0 2.03-.33 2.84-.89L3 4.27ZM10 3H8c0 .125-.017.246-.035.368v.005a5.266 5.266 0 0 0-.025.187l1.68 1.68c.25-.7.38-1.46.38-2.24Zm4 0h-2c0 1.35-.31 2.63-.84 3.77l1.49 1.49C13.51 6.7 14 4.91 14 3Zm7 9v-2c-1.91 0-3.7.49-5.27 1.35l1.49 1.49c1.15-.53 2.43-.84 3.78-.84Zm0 2v2a2.58 2.58 0 0 0-.318.026c-.08.01-.16.02-.242.024l-1.68-1.68c.7-.24 1.45-.37 2.24-.37Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
