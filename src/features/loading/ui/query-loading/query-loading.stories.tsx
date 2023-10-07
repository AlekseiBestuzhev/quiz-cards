import { Meta, StoryObj } from '@storybook/react'

import { QueryLoading } from './'

const meta = {
  title: 'Components/Query Loading',
  component: QueryLoading,
} satisfies Meta<typeof QueryLoading>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
