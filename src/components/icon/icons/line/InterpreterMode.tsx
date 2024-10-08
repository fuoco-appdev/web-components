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
    <path d="M20 16.5c-.83 0-1.5-.67-1.5-1.5v-2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V15c0 .83-.67 1.5-1.5 1.5Zm-.5 3.5h1v-1.54c1.69-.24 3-1.7 3-3.46h-1a2.5 2.5 0 0 1-5 0h-1c0 1.76 1.31 3.22 3 3.46V20Zm-11-8c-2.21 0-4-1.79-4-4a3.999 3.999 0 0 1 5.34-3.77A5.938 5.938 0 0 0 8.5 8c0 1.43.5 2.74 1.34 3.77-.42.15-.87.23-1.34.23Zm-1.89 1.13a4.965 4.965 0 0 0-2.11 4.09V20h-4v-2.78c0-1.12.61-2.15 1.61-2.66 1.24-.64 2.76-1.19 4.5-1.43ZM10.5 8c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4Zm2 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2Zm2 7c-2.37 0-4.29.73-5.48 1.34-.32.16-.52.5-.52.88V18h7.17c.5.86 1.25 1.56 2.15 2H6.5v-2.78c0-1.12.61-2.15 1.61-2.66C9.79 13.7 11.97 13 14.5 13c.39 0 .77.02 1.14.05-.33.59-.55 1.26-.62 1.96-.17-.01-.34-.01-.52-.01Z" />
  </svg>
)

export default Icon
