import { ComponentPropsWithoutRef, FC, forwardRef, ReactNode, useState } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './drop-down.module.scss'

import { Icon } from '@/components/ui/icon/icon.tsx'
import { IconButton } from '@/components/ui/icon-button'
import { Typography } from '@/components/ui/typography'

export type DropdownProps = {
  children: ReactNode
  align?: 'start' | 'center' | 'end'
  trigger?: ReactNode
  className?: string
}

export const DropDown = forwardRef<any, DropdownProps>(
  ({ children, trigger, align = 'end', className }, ref) => {
    const [open, setOpen] = useState(false)

    const classes = clsx(s.trigger, className)

    return (
      <DropdownMenuRadix.Root open={open} onOpenChange={setOpen}>
        <DropdownMenuRadix.Trigger className={classes} ref={ref} asChild>
          {trigger ?? (
            <IconButton icon={<Icon name="more" width={20} height={20} />} className={s.btn} />
          )}
        </DropdownMenuRadix.Trigger>
        <DropdownMenuRadix.Portal>
          <DropdownMenuRadix.Content
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
      </DropdownMenuRadix.Root>
    )
  }
)

export type DropDownItemProps = {
  children?: ReactNode
  disabled?: boolean
  onSelect?: (event: Event) => void
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
