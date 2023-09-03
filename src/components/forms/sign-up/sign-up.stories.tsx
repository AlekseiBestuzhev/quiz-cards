import type { Meta, StoryObj } from '@storybook/react'

import { SignUpForm, SignUpFormProps } from './'

const meta = {
  title: 'Forms/Sign Up',
  component: SignUpForm,
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const onSubmit = (data: SignUpFormProps) => {
      alert(JSON.stringify(data))
    }

    return <SignUpForm onSubmit={onSubmit} />
  },
  args: {} as any,
}
