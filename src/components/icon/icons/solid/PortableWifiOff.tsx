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
      d="M20 12c0-4.42-3.58-8-8-8-1.2 0-2.34.28-3.36.76L7.16 3.28C8.6 2.48 10.24 2 12 2c5.52 0 10 4.48 10 10 0 1.76-.47 3.4-1.28 4.84l-1.49-1.49c.48-1.03.77-2.15.77-3.35ZM3.42 2.36 2.01 3.78 4.1 5.87C2.79 7.57 2 9.69 2 12c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 17.53 4 14.96 4 12c0-1.76.57-3.38 1.53-4.69l1.43 1.44C6.36 9.68 6 10.8 6 12c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-.65.17-1.25.44-1.79l1.58 1.58L10 12c0 1.1.9 2 2 2l.21-.02 7.52 7.52 1.41-1.41L3.42 2.36Zm14.29 11.46c.18-.57.29-1.19.29-1.82 0-3.31-2.69-6-6-6-.63 0-1.25.11-1.82.29l1.72 1.72a.28.28 0 0 0 .043-.004A.322.322 0 0 1 12 8c2.21 0 4 1.79 4 4 0 .02-.002.037-.005.055-.002.018-.005.035-.005.055l1.72 1.71Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
