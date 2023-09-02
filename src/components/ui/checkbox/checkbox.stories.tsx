import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '../checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Unchecked: Story = {
  args: {
    checked: false,
    label: 'Click me',
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Click me',
  },
}

export const DisabledChecked: Story = {
  args: {
    checked: true,
    label: 'Click me',
    disabled: true,
  },
}

export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    label: 'Click me',
    disabled: true,
  },
}

export const Controlled: Story = {
  args: {
    checked: false,
    label: 'Click here',
  },
  render: args => {
    const [checked, setChecked] = useState(false)

    return (
      <>
        <Checkbox {...args} checked={checked} onChange={() => setChecked(!checked)} />
        Current value: {checked.toString()}
      </>
    )
  },
}
