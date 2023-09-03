import { FC } from 'react'

import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'

export type CheckboxProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  id?: string
  label?: string
  disabled?: boolean
  className?: string
}

export const Checkbox: FC<CheckboxProps> = props => {
  const { checked, label, disabled, id, onChange, className } = props

  const classes = {
    root: clsx(s.label, disabled && s.disabled, className),
    checkbox: s.checkbox,
  }

  return (
    <Typography as="label" className={classes.root}>
      <RadixCheckbox.Root
        id={id}
        className={classes.checkbox}
        checked={checked}
        onCheckedChange={onChange}
        disabled={disabled}
      >
        <div className={s.frame}></div>
        {checked && (
          <RadixCheckbox.Indicator className={s.indicator} forceMount>
            <Icon name={'checked'} />
          </RadixCheckbox.Indicator>
        )}
      </RadixCheckbox.Root>
      {label}
    </Typography>
  )
}
