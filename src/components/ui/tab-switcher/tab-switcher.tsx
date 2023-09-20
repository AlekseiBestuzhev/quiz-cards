import { FC } from 'react'

import * as TabsSwitcher from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tab-switcher.module.scss'

import { Typography } from '@/components/ui/typography'

export type Tab = {
  value: string
  text: string
  disabled?: boolean
}

type Props = {
  tabs: Tab[]
  value: string
  onValueChange: (value: string) => void
  label?: string
  className?: string
}

export const TabSwitcher: FC<Props> = ({ value, tabs, onValueChange, label, className }) => {
  const classes = clsx(s.label, className)

  return (
    <Typography as="div" variant="body2" className={classes}>
      {label}
      <TabsSwitcher.Root value={value} onValueChange={onValueChange} className={s.root}>
        <TabsSwitcher.List>
          {tabs.map(t => (
            <TabsSwitcher.Trigger
              value={t.value}
              className={s.trigger}
              key={t.value}
              disabled={t.disabled}
            >
              {t.text}
            </TabsSwitcher.Trigger>
          ))}
        </TabsSwitcher.List>
      </TabsSwitcher.Root>
    </Typography>
  )
}
