import { FC, ReactNode } from 'react'

import * as Select from '@radix-ui/react-select'
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
}

export const SelectDemo: FC<SelectPropsType> = ({
  label,
  placeholder,
  value,
  onValueChange,
  defaultValue,
  options,
  disabled,
  required,
  className,
}) => {
  const classes = {
    label: clsx(s.label, disabled && s.labelDisabled, className),
    trigger: clsx(s.trigger, disabled && s.triggerDisabled),
    icon: clsx(s.icon, disabled && s.iconDisabled),
  }

  return (
    <Typography variant={'body2'} as={'label'} className={classes.label}>
      {label}
      <Select.Root
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        required={required}
      >
        <Select.Trigger className={classes.trigger} asChild aria-label={'select'} tabIndex={1}>
          <div>
            <Select.Value placeholder={placeholder} />
            <Icon name={'arrowDown'} className={classes.icon} />
          </div>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content position={'popper'} className={s.content}>
            <Select.Viewport>
              {options.map(el => (
                <Select.Item key={el.value} value={el.value} className={s.item}>
                  <Select.ItemText>{el.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </Typography>
  )
}
