import { ComponentPropsWithoutRef, FC } from 'react'

import { clsx } from 'clsx'

import s from './navigate-button.module.scss'

type Props = {
  active: boolean
} & ComponentPropsWithoutRef<'button'>

export const NavigateButton: FC<Props> = ({ children, active, className, ...rest }) => {
  const classes = clsx(s.button, active && s.active, className)

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  )
}
