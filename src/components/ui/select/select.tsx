import { FC, ReactNode } from 'react'

import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

import { Icon } from '@/components/ui/icon/icon.tsx'
import { Option } from '@/components/ui/radio-group'
import { Typography } from '@/components/ui/typography'

export type SelectPropsType = {
  label?: string
  placeholder?: ReactNode
  value?: string
  onValueChange?: (value: any) => void
  defaultValue?: any
  options: Option[]
  disabled?: boolean
  required?: boolean
  className?: string
  small?: boolean
}

export const Select: FC<SelectPropsType> = ({
  label,
  placeholder,
  value,
  onValueChange,
  defaultValue,
  options,
  disabled,
  required,
  className,
  small,
}) => {
  const classes = {
    label: clsx(s.label, disabled && s.labelDisabled, className),
    trigger: clsx(s.trigger, disabled && s.triggerDisabled, small && s.small),
    icon: clsx(s.icon, disabled && s.iconDisabled),
    item: clsx(s.item, small && s.small),
  }

  return (
    <Typography variant={'body2'} as={'label'} className={classes.label}>
      {label}
      <SelectRadix.Root
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        required={required}
      >
        <SelectRadix.Trigger className={classes.trigger} asChild aria-label={'select'}>
          <button>
            <SelectRadix.Value placeholder={placeholder} />
            <Icon name={'arrowDown'} className={classes.icon} />
          </button>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content position={'popper'} className={s.content}>
            <SelectRadix.Viewport>
              {options.map(el => (
                <SelectRadix.Item key={el.value} value={el.value} className={classes.item}>
                  <SelectRadix.ItemText>{el.label}</SelectRadix.ItemText>
                </SelectRadix.Item>
              ))}
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </Typography>
  )
}
