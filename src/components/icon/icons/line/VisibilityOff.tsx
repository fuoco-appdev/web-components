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
    <path d="M12 5.975a9.77 9.77 0 0 1 8.82 5.5 9.647 9.647 0 0 1-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53-1.73-4.39-6-7.5-11-7.5-1.27 0-2.49.2-3.64.57l1.65 1.65c.65-.13 1.31-.22 1.99-.22Zm-1.07 1.14L13 9.185c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07.01-2.48-2.01-4.49-4.49-4.49-.37 0-.72.05-1.07.14Zm-8.92-3.27 2.68 2.68A11.738 11.738 0 0 0 1 11.475c1.73 4.39 6 7.5 11 7.5 1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.425l-1.41 1.42Zm7.5 7.5 2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 0 1-2.5-2.5c0-.05.01-.08.01-.13Zm-3.4-3.4 1.75 1.75a4.6 4.6 0 0 0-.36 1.78 4.507 4.507 0 0 0 6.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 0 1-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53Z" />
  </svg>
)

export default Icon
