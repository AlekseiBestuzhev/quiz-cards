import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Option, RadioGroup } from './'

const meta = {
  title: 'Components/Radio Group',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

const baseData: Option[] = [
  { label: 'First', value: '1' },
  { label: 'Second', value: '2' },
  { label: 'Third', value: '3' },
]

export default meta
type Story = StoryObj<typeof meta>

export const DefaultControlledGroup: Story = {
  render: args => {
    const [value, setValue] = useState('1')

    return (
      <>
        <RadioGroup {...args} value={value} onValueChange={setValue} />
        <div style={{ marginTop: '10px' }}>Selected value: {value}</div>
      </>
    )
  },

  args: {
    options: baseData,
  },
}

export const DisabledGroup: Story = {
  args: {
    options: baseData,
    value: '1',
    disabled: true,
  },
}

export const GroupWithError: Story = {
  args: {
    options: baseData,
    value: '1',
    errorMessage: 'Some error occurred',
  },
}
