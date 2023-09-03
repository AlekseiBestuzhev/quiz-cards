import { CSSProperties } from 'react'

import { DevTool } from '@hookform/devtools'
import type { Meta } from '@storybook/react'
import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from './'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

const meta = {
  title: 'Components/Controlled/Checkbox',
  component: ControlledCheckbox,
} satisfies Meta<typeof ControlledCheckbox>

export default meta

type FormValues = Record<'car' | 'carPark', boolean>

export const ExampleWithForm = {
  render: () => {
    const { control, handleSubmit } = useForm<FormValues>({
      defaultValues: {
        car: false,
        carPark: false,
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
        <Typography>Form With Controlled Checkbox</Typography>
        <div style={styles}>
          <ControlledCheckbox name="car" control={control} label={'Car'} />
          <ControlledCheckbox name="carPark" control={control} label={'Car Park'} />
        </div>
        <Button fullWidth>Send</Button>
      </form>
    )
  },
}
