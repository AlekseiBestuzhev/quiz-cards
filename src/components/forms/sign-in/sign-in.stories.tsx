import type { Meta, StoryObj } from '@storybook/react'

import { SignInForm, SignInFormProps } from './'

const meta = {
  title: 'Forms/Sign In',
  component: SignInForm,
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const onSubmit = (data: SignInFormProps) => {
      alert(JSON.stringify(data))
    }

    return <SignInForm onSubmit={onSubmit} />
  },
  args: {} as any,
}
