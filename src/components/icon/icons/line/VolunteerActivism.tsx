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
    <path d="M16.5 12.75c3.09-2.81 6-5.44 6-7.7 0-1.85-1.45-3.3-3.3-3.3-1.04 0-2.05.49-2.7 1.25-.66-.76-1.66-1.25-2.7-1.25-1.85 0-3.3 1.45-3.3 3.3 0 2.26 2.91 4.89 6 7.7Zm-2.7-9c.44 0 .89.21 1.18.55l1.52 1.79 1.52-1.79c.29-.34.74-.55 1.18-.55.74 0 1.3.56 1.3 1.3 0 1.12-2.04 3.17-4 4.99-1.96-1.82-4-3.88-4-4.99 0-.74.56-1.3 1.3-1.3Z" />
    <path d="M19.5 15.75h-2c0-1.2-.75-2.28-1.87-2.7l-6.16-2.3H1.5v11h6v-1.44l7 1.94 8-2.5v-1c0-1.66-1.34-3-3-3Zm-16 4v-7h2v7h-2Zm10.97.41L7.5 18.23v-5.48h1.61l5.82 2.17c.34.13.57.46.57.83 0 0-1.99-.05-2.3-.15l-2.38-.79-.63 1.9 2.38.79c.51.17 1.04.26 1.58.26h5.35c.39 0 .74.23.9.56l-5.93 1.84Z" />
  </svg>
)

export default Icon
