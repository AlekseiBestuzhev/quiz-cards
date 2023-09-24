import { Meta, StoryObj } from '@storybook/react'

import { PackForm } from '@/components/forms/pack/pack.tsx'

const meta = {
  title: 'Forms/Pack',
  component: PackForm,
} satisfies Meta<typeof PackForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const onSubmit = (data: FormData) => {
      alert(JSON.stringify(data))
    }

    return <PackForm onSubmit={onSubmit} onCancel={() => alert('Cancel')} />
  },
  args: {} as any,
}
