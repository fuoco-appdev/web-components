import { createContext } from 'react'

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const RadioContext = createContext<{
  parentCallback: (e: any) => void
  type: string
  name: string
  activeId: string
  parentSize: string
}>({
  parentCallback: (e: any) => {},
  type: '',
  name: '',
  activeId: '',
  parentSize: '',
})
