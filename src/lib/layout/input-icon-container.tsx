import React from 'react'
// @ts-ignore
import InputIconContainerStyles from './input-icon-container.module.scss'

export default function InputIconContainer({ icon }: any) {
  return (
    <div className={InputIconContainerStyles['sbui-input-icon-container']}>
      {icon}
    </div>
  )
}
