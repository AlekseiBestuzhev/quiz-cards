import type { Meta, StoryObj } from '@storybook/react'

import { EditProfileForm, EditProfileFormProps } from './'

const meta = {
  title: 'Forms/Edit Profile',
  component: EditProfileForm,
} satisfies Meta<typeof EditProfileForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const onSubmit = (data: EditProfileFormProps) => {
      alert(JSON.stringify(data))
    }

    return <EditProfileForm onSubmit={onSubmit} />
  },
  args: {} as any,
}
