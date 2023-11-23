import type { Meta, StoryObj } from '@storybook/react'

import { BackButton } from './'

import { BrowserRouterDecorator } from '@/app/providers'

const meta = {
  title: 'Components/Back Button',
  component: BackButton,
  tags: ['autodocs'],
  decorators: [BrowserRouterDecorator],
} satisfies Meta<typeof BackButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
