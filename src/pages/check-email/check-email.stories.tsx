import { Meta, StoryObj } from '@storybook/react'

import { BrowserRouterDecorator } from '@/app/providers'
import { CheckEmail } from '@/pages/check-email/check-email.tsx'

const meta: Meta = {
  title: 'Pages/Check Email',
  component: CheckEmail,
  tags: ['autodocs'],
  decorators: [BrowserRouterDecorator],
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
