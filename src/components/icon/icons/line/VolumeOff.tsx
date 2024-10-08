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
    <path d="m4.34 2.935-1.41 1.41 4.36 4.36-.29.3H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.38.88-2.18 1.11v2.06a8.94 8.94 0 0 0 3.61-1.75l2.05 2.05 1.41-1.41L4.34 2.935ZM10 15.175l-2.17-2.17H5v-2h2.83l.88-.88 1.29 1.29v3.76Zm9-3.17c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71Zm-7-8-1.88 1.88L12 7.765v-3.76Zm4.5 8a4.5 4.5 0 0 0-2.5-4.03v1.79l2.48 2.48c.01-.08.02-.16.02-.24Z" />
  </svg>
)

export default Icon
