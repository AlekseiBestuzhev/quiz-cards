import { Meta, StoryObj } from '@storybook/react'

import { ForgotPasswordForm, ForgotPasswordFormType } from '@/components/forms'

const meta = {
  title: 'Forms/Forgot Password',
  component: ForgotPasswordForm,
} satisfies Meta<typeof ForgotPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const onSubmit = (data: ForgotPasswordFormType) => {
      alert(JSON.stringify(data))
    }

    return <ForgotPasswordForm onSubmit={onSubmit} />
  },
  args: {} as any,
}
