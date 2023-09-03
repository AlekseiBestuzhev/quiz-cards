import { CSSProperties } from 'react'

import { DevTool } from '@hookform/devtools'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'

import { ControlledTextField } from './'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

const meta = {
  title: 'Components/Controlled/Text Field',
  component: ControlledTextField,
} satisfies Meta<typeof ControlledTextField>

export default meta
type Story = StoryObj<typeof meta>

type FormValues = {
  firstName: string
  lastName: string
}

export const ExampleWithForm: Story = {
  render: () => {
    const { control, handleSubmit } = useForm<FormValues>()

    const onSubmit = (data: FormValues) => {
      alert(JSON.stringify(data))
    }

    const styles: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '20px',
      maxWidth: '400px',
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)} style={styles}>
        <DevTool control={control} />
        <Typography>Form With Controlled Text Fields</Typography>
        <ControlledTextField name="firstName" control={control} label={'First Name'} />
        <ControlledTextField name="lastName" control={control} label={'Last Name'} />
        <Button style={{ marginTop: '24px' }}>Send</Button>
      </form>
    )
  },
  args: {} as any,
}
