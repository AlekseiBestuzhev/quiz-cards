import type { Meta, StoryObj } from '@storybook/react'

import { SelectDemo } from './select.tsx'

const meta = {
  title: 'Components/Select',
  component: SelectDemo,
  tags: ['autodocs'],
  argTypes: { onValueChange: { action: 'select changes' } },
} satisfies Meta<typeof SelectDemo>

export default meta
type Story = StoryObj<typeof meta>

const quiz = [
  { value: '1', label: 'General Knowledge' },
  { value: '2', label: 'Sports Trivia' },
  { value: '3', label: 'Movie' },
  { value: '4', label: 'Science and Technology' },
  { value: '5', label: 'Music ' },
]

export const Default: Story = {
  args: {
    label: 'Select',
    placeholder: 'Select item',
    disabled: false,
    options: quiz,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Select',
    placeholder: 'Select item',
    disabled: true,
    options: quiz,
  },
}
