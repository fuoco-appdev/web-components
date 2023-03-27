import React from 'react'
import { Close } from '../icon/icons/line'
import { Warning, Info, Error, CheckCircle } from '../icon/icons/solid'
import { animated } from 'react-spring'
// @ts-ignore
import AlertStyles from './alert.module.scss'
import { Button } from '../button'

export interface AlertProps {
  variant?: 'success' | 'danger' | 'warning' | 'info'
  className?: string
  iconColor?: string
  title: string
  withIcon?: boolean
  closable?: boolean
  children?: React.ReactNode
  style?: any
  onCloseClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const icons: Record<
  'success' | 'danger' | 'warning' | 'info',
  React.ReactElement
> = {
  danger: <Error size={24} stroke={'#ffffff'} color={'#ffffff'} />,
  success: <CheckCircle size={24} stroke={'#ffffff'} color={'#ffffff'} />,
  warning: <Warning size={24} stroke={'#ffffff'} color={'#ffffff'} />,
  info: <Info size={24} stroke={'#ffffff'} color={'#ffffff'} />,
}

const Alert = ({
  variant = 'success',
  className,
  iconColor = '#ffffff',
  title,
  withIcon,
  closable,
  children,
  style,
  onCloseClick,
}: AlertProps) => {
  let containerClasses = [AlertStyles['sbui-alert-container']]
  containerClasses.push(AlertStyles[`sbui-alert-container--${variant}`])
  if (className) containerClasses.push(className)
  let descriptionClasses = [AlertStyles['sbui-alert-description']]
  descriptionClasses.push(AlertStyles[`sbui-alert-description--${variant}`])

  return (
    <>
      <animated.div className={containerClasses.join(' ')} style={style}>
        <div className={AlertStyles['sbui-content']}>
          <div className={AlertStyles['sbui-icon-content-container']}>
            {withIcon && icons[variant]}
          </div>
          <div className={AlertStyles['sbui-description-content-container']}>
            <h3 className={AlertStyles['sbui-alert-title']}>{title}</h3>
            <div className={descriptionClasses.join(' ')}>{children}</div>
          </div>
        </div>
        {closable && (
          <div className={AlertStyles['sbui-close-root']}>
            <Button
              type={'text'}
              icon={<Close stroke={iconColor} color={iconColor} size={24} />}
              onClick={(e) => onCloseClick?.(e)}
              className={AlertStyles['sbui-close-button']}
            />
          </div>
        )}
      </animated.div>
    </>
  )
}

export default Alert