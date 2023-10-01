import { Meta, StoryObj } from '@storybook/react'

import { CardForm } from './'

const meta = {
  title: 'Forms/Card',
  component: CardForm,
} satisfies Meta<typeof CardForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const onSubmit = (data: FormData) => {
      alert(JSON.stringify(data))
    }

    return <CardForm onSubmit={onSubmit} onCancel={() => alert('Cancel')} />
  },
  args: {} as any,
}

export const WithPicture: Story = {
  render: () => {
    const onSubmit = (data: FormData) => {
      alert(JSON.stringify(data))
    }

    return <CardForm onSubmit={onSubmit} onCancel={() => alert('Cancel')} />
  },
  args: {} as any,
}
