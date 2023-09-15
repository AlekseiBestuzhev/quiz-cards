import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './icon-button.module.scss'

export type IconButtonProps = {
  icon: ReactNode
  small?: boolean
} & Omit<ComponentPropsWithoutRef<'button'>, 'children'>

export const IconButton: FC<IconButtonProps> = ({ icon, small, className, ...props }) => {
  const classes = clsx(s.button, small && s.small, className)

  return (
    <button {...props} className={classes}>
      {icon}
    </button>
  )
}
