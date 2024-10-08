import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import Ripples, { RipplesProps } from 'react-ripples'
import { Disclosure, Transition } from '@headlessui/react'
// @ts-ignore
import AccordionStyles from './accordion.module.scss'
import { ExpandMore } from '../icon/icons/line'
import { Button, Typography } from '../../index'
import { animated, useSpring, useTransition } from 'react-spring'
import { ButtonClasses } from '../button/button'

type ContextValue = Required<Pick<AccordionProps, 'defaultActiveId'>> &
  Pick<AccordionProps, 'onChange' | 'bordered'>

const AccordionContext = createContext<ContextValue>({
  defaultActiveId: [],
  bordered: undefined,
  onChange: undefined,
})

export interface AccordionClasses {
  container?: string
}

export interface AccordionProps {
  children?: React.ReactNode
  classNames?: AccordionClasses
  defaultActiveId?: (string | number)[]
  bordered?: boolean
  onChange?: (item: {
    label: string
    id?: string | number
    open: boolean
  }) => void
}

function Accordion({
  children,
  classNames,
  defaultActiveId = [],
  bordered,
  onChange,
}: AccordionProps) {
  let containerClasses = [
    AccordionStyles['accordion-container'],
    classNames?.container,
  ]
  if (bordered) {
    containerClasses.push(AccordionStyles['accordion-container-bordered'])
  }

  const contextValue = {
    defaultActiveId,
    onChange,
    bordered,
  }

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={containerClasses.join(' ')}>{children}</div>
    </AccordionContext.Provider>
  )
}

export interface AccordionItemClasses {
  panel?: string
  button?: ButtonClasses
  topBar?: string
  topBarLabel?: string
}

export interface ItemProps {
  children?: React.ReactNode
  iconColor?: string
  classNames?: AccordionItemClasses
  label: string
  id?: string | number
  rippleProps?: RipplesProps
  touchScreen?: boolean
}

export function Item({
  children,
  iconColor,
  classNames,
  label,
  id,
  rippleProps,
  touchScreen,
}: ItemProps) {
  const { defaultActiveId, onChange, bordered } = useContext(AccordionContext)
  const isDefaultActive = id ? defaultActiveId?.includes(id) : false
  const [disclosureOpen, setDisclosureOpen] = useState<boolean>(isDefaultActive)

  let panelClasses = [
    AccordionStyles['accordion-item-panel'],
    classNames?.panel,
  ]

  useEffect(() => {
    onChange?.({ id, label, open: disclosureOpen })
  }, [disclosureOpen])

  const transitionStyle = useSpring({
    height: disclosureOpen ? 'auto' : 0,
    opacity: disclosureOpen ? 1 : 0,
    config: {
      tension: 1000,
      friction: 40,
      bounce: 0,
    },
  })

  const buttonIconStyle = useSpring({
    transform: disclosureOpen ? 'rotate(-90deg)' : 'rotate(0deg)',
    config: {
      tension: 1000,
      friction: 40,
      bounce: 0,
    },
  })

  return (
    <Disclosure defaultOpen={isDefaultActive}>
      {({ open }) => (
        <>
          <div
            className={[
              AccordionStyles['accordion-top-bar'],
              classNames?.topBar,
            ].join(' ')}
          >
            <Typography.Text
              align={'center'}
              className={[
                AccordionStyles['accordion-top-bar-label'],
                classNames?.topBarLabel,
              ].join(' ')}
            >
              {label}
            </Typography.Text>
            <div>
              <Button
                classNames={classNames?.button}
                touchScreen={touchScreen}
                rippleProps={rippleProps}
                type={'text'}
                rounded={true}
                icon={
                  <animated.div
                    className={AccordionStyles['expand-animated-container']}
                    style={buttonIconStyle}
                    onClick={() => setDisclosureOpen(!disclosureOpen)}
                  >
                    <ExpandMore
                      strokeWidth={0}
                      size={21}
                      stroke={iconColor}
                      color={iconColor}
                    />
                  </animated.div>
                }
              />
            </div>
          </div>

          <animated.div style={transitionStyle}>
            <Disclosure.Panel className={panelClasses.join(' ')}>
              {children}
            </Disclosure.Panel>
          </animated.div>
        </>
      )}
    </Disclosure>
  )
}

Accordion.Item = Item
export default Accordion
