import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: { onValueChange: { action: 'select changes' } },
} satisfies Meta<typeof Select>

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

export const Small: Story = {
  args: {
    label: 'Select',
    placeholder: 'Select item',
    disabled: false,
    options: quiz,
    small: true,
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
