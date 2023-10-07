import type { Meta, StoryObj } from '@storybook/react'

import { RateCardForm, RateType } from './'

const meta = {
  title: 'Forms/Rate Card',
  component: RateCardForm,
} satisfies Meta<typeof RateCardForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const onSubmit = (data: RateType) => {
      alert(JSON.stringify(data))
    }

    return <RateCardForm onSubmit={onSubmit} />
  },
  args: {} as any,
}
