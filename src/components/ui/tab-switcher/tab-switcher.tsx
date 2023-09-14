import { FC } from 'react'

import * as TabsSwitcher from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tab-switcher.module.scss'

export type Tab = {
  value: string
  text: string
  disabled?: boolean
}

type Props = {
  tabs: Tab[]
  value: string
  onValueChange: (value: string) => void
  className?: string
}

export const TabSwitcher: FC<Props> = ({ value, tabs, onValueChange, className }) => {
  const classes = clsx(s.root, className)

  return (
    <TabsSwitcher.Root value={value} onValueChange={onValueChange} className={classes}>
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
  )
}
