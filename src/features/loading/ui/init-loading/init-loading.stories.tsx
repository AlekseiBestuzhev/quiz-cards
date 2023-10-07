import { Meta, StoryObj } from '@storybook/react'

import { InitLoading } from './'

const meta = {
  title: 'Components/Initialization Loading',
  component: InitLoading,
} satisfies Meta<typeof InitLoading>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
