import { ComponentPropsWithoutRef, ComponentRef, forwardRef, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './icon-button.module.scss'

export type IconButtonProps = {
  icon: ReactNode
  small?: boolean
} & Omit<ComponentPropsWithoutRef<'button'>, 'children'>

export const IconButton = forwardRef<ComponentRef<'button'>, IconButtonProps>(
  ({ icon, small, className, ...props }, ref) => {
    const classes = clsx(s.button, small && s.small, className)

    return (
      <button ref={ref} {...props} className={classes}>
        {icon}
      </button>
    )
  }
)
