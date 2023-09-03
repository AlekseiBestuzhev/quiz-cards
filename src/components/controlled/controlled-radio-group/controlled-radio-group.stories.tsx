import { CSSProperties } from 'react'

import { DevTool } from '@hookform/devtools'
import type { Meta } from '@storybook/react'
import { useForm } from 'react-hook-form'

import { ControlledRadioGroup } from './'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

const meta = {
  title: 'Components/Controlled/Radio Group',
  component: ControlledRadioGroup,
} satisfies Meta<typeof ControlledRadioGroup>

export default meta

const formOptions = {
  number: [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
  ],
  color: [
    { label: 'Red', value: 'red' },
    { label: 'Black', value: 'black' },
    { label: 'White', value: 'white' },
  ],
}

type FormValues = Record<'color' | 'number', string>

export const ExampleWithForm = {
  render: () => {
    const { control, handleSubmit } = useForm<FormValues>({
      defaultValues: {
        number: '1',
        color: 'red',
      },
    })

    const onSubmit = (data: FormValues) => {
      alert(JSON.stringify(data))
    }

    const styles: CSSProperties = {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '30px 0',
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '300px' }}>
        <DevTool control={control} />
        <Typography>Form With Controlled Radio Group</Typography>
        <div style={styles}>
          <div>
            <Typography variant={'body2'}>Number:</Typography>
            <ControlledRadioGroup name="number" control={control} options={formOptions.number} />
          </div>
          <div>
            <Typography variant={'body2'}>Color:</Typography>
            <ControlledRadioGroup name="color" control={control} options={formOptions.color} />
          </div>
        </div>
        <Button fullWidth>Send</Button>
      </form>
    )
  },
}
