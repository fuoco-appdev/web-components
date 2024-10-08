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
    <path d="M6 10c0-.83.67-1.5 1.5-1.5S9 9.17 9 10s-.67 1.5-1.5 1.5S6 10.83 6 10Zm5 8c2.33 0 4.31-1.46 5.11-3.5H5.89C6.69 16.54 8.67 18 11 18Zm3.5-6.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S13 9.17 13 10s.67 1.5 1.5 1.5Zm6.5-10h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2Zm-2 11c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8c1.46 0 2.82.4 4 1.08V3.34a9.929 9.929 0 0 0-4.01-.84C5.47 2.5 1 6.98 1 12.5s4.47 10 9.99 10c5.53 0 10.01-4.48 10.01-10 0-1.05-.17-2.05-.47-3H18.4c.38.93.6 1.94.6 3Z" />
  </svg>
)

export default Icon
