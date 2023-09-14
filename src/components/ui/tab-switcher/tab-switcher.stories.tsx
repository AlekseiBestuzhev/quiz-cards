import { useState } from 'react'

import { Meta } from '@storybook/react'

import { TabSwitcher } from './tab-switcher.tsx'

const meta = {
  title: 'Components/Tab Switcher',
  component: TabSwitcher,
  tags: ['autodocs'],
} satisfies Meta<typeof TabSwitcher>

export default meta

const tabs = [
  { value: 'myCards', text: 'My cards' },
  { value: 'allCards', text: 'All cards' },
  { value: 'other', text: 'Other' },
  { value: 'disabled', text: 'Disabled', disabled: true },
]

export const Default = {
  render: () => {
    const [value, setValue] = useState('myCards')

    return (
      <div>
        <TabSwitcher value={value} tabs={tabs} onValueChange={value => setValue(value)} />
        <p style={{ marginTop: '36px' }}>{value}</p>
      </div>
    )
  },
}
