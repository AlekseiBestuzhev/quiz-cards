import { Meta, StoryObj } from '@storybook/react'

import { Rating } from '@/components/ui/rating'

const meta = {
  title: 'Components/Rating',
  component: Rating,
  tags: ['autodocs'],
} satisfies Meta<typeof Rating>

export default meta

type Story = StoryObj<typeof meta>

export const Empty: Story = {
  args: {},
}
export const Selected: Story = {
  args: {
    selectedStars: 3,
  },
}

export const Size: Story = {
  args: {
    size: 25,
  },
}
