/* eslint-disable import/no-anonymous-default-export */
import { useRef } from 'react'
import { InputPhoneNumber } from '.'

export default {
  title: 'Data Input/InputPhoneNumber',
  component: InputPhoneNumber,
}

export const Default = (args: any) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        height: '80vh',
      }}
    >
      <InputPhoneNumber {...args} onChange={(value) => console.log(value)} />
    </div>
  )
}

export const DefaultWithError = (args: any) => <InputPhoneNumber {...args} />

export const TouchScreen = (args: any) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        height: '80vh',
      }}
    >
      <InputPhoneNumber
        {...args}
        touchScreen={true}
        parentRef={containerRef}
        onChange={(value) => console.log(value)}
      />
    </div>
  )
}

Default.args = {
  label: 'Phone number',
  country: 'ca',
  defaultValue: '11234567890',
}

DefaultWithError.args = {
  label: 'Phone number',
  layout: 'vertical',
  country: 'ca',
  error: 'Field cannot be empty',
  defaultValue: '11234567890',
}
