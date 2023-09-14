import { ComponentPropsWithoutRef, FC, ReactNode, useState } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './drop-down.module.scss'

import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'

export type DropdownProps = {
  children: ReactNode
  align?: 'start' | 'center' | 'end'
  trigger?: ReactNode
  className?: string
}

export const DropDown = ({ children, trigger, align = 'end', className }: DropdownProps) => {
  const [open, setOpen] = useState(false)

  const classes = clsx(s.trigger, className)

  return (
    <DropdownMenuRadix.Root open={open} onOpenChange={setOpen}>
      <DropdownMenuRadix.Trigger className={classes} asChild={!trigger}>
        {trigger ?? (
          <button className={s.btn}>
            <Icon name="more" />
          </button>
        )}
      </DropdownMenuRadix.Trigger>
      <div>
        {open && (
          <DropdownMenuRadix.Portal forceMount>
            <DropdownMenuRadix.Content
              asChild
              forceMount
              className={s.content}
              align={align}
              sideOffset={8}
              onClick={event => event.stopPropagation()}
            >
              <div>
                <DropdownMenuRadix.Arrow className={s.arrowBox} asChild>
                  <div className={s.arrow} />
                </DropdownMenuRadix.Arrow>
                <div className={s.itemsBox}>{children}</div>
              </div>
            </DropdownMenuRadix.Content>
          </DropdownMenuRadix.Portal>
        )}
      </div>
    </DropdownMenuRadix.Root>
  )
}

export type DropDownItemProps = {
  children?: ReactNode
  disabled?: boolean
  onSelect: (event: Event) => void
  className?: string
}

export const DropDownItem: FC<DropDownItemProps> = ({
  children,
  disabled,
  onSelect,
  className,
}) => {
  const classes = clsx(s.item, className)

  return (
    <DropdownMenuRadix.Item className={classes} disabled={disabled} onSelect={onSelect} asChild>
      {children}
    </DropdownMenuRadix.Item>
  )
}

export type DropdownItemWithIconProps = Omit<DropDownItemProps, 'children'> & {
  icon: ReactNode
  text: string
} & ComponentPropsWithoutRef<'div'>

export const DropDownItemWithIcon: FC<DropdownItemWithIconProps> = ({
  icon,
  disabled,
  onSelect,
  text,
  className,
  style,
  ...rest
}) => {
  const classes = clsx(s.item, className)

  return (
    <DropdownMenuRadix.Item
      className={classes}
      disabled={disabled}
      onSelect={onSelect}
      onClick={event => event.stopPropagation()}
      style={style}
      asChild
      {...rest}
    >
      <div>
        {icon}
        <Typography variant="body2">{text}</Typography>
      </div>
    </DropdownMenuRadix.Item>
  )
}
