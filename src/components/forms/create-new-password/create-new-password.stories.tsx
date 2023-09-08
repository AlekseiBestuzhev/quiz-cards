import { Meta, StoryObj } from '@storybook/react'

import { CreateNewPasswordForm } from '@/components/forms/create-new-password/create-new-password.tsx'
import { CreateNewPasswordFormType } from '@/components/forms/create-new-password/use-create-new-password.ts'

const meta = {
  title: 'Forms/Create New Password',
  component: CreateNewPasswordForm,
} satisfies Meta<typeof CreateNewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const onSubmit = (data: CreateNewPasswordFormType) => {
      alert(JSON.stringify(data))
    }

    return <CreateNewPasswordForm onSubmit={onSubmit} />
  },
  args: {} as any,
}
