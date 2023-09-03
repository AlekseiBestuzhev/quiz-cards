import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './'

import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <div style={{ height: '100px' }}></div>,
  },
}

export const ExampleWithContent: Story = {
  args: {
    children: (
      <>
        <Typography variant={'large'}>Card</Typography>
        <TextField label={'Uncontrolled text field'} />
        <TextField type={'search'} label={'Uncontrolled search'} />
        <Button variant={'link'} as={'a'} href={'https://google.com'}>
          Google
        </Button>
      </>
    ),
  },
}
