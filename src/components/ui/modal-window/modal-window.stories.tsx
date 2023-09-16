import { CSSProperties, useState } from 'react'

import { Meta } from '@storybook/react'

import { ModalWindow } from './'

import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/text-field'

const meta = {
  title: 'Components/Modal Window',
  component: ModalWindow,
  tags: ['autodocs'],
} satisfies Meta<typeof ModalWindow>

export default meta

export const ExampleWithForm = {
  render() {
    const [open, setOpen] = useState(false)

    const container: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '12px',
    }

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <ModalWindow open={open} setOpen={setOpen} title="Dialog title">
          <div style={container}>
            <TextField label="Title" />
            <TextField label="Key words" />
            <Button style={{ alignSelf: 'flex-end', marginTop: '12px' }}>Send</Button>
          </div>
        </ModalWindow>
      </>
    )
  },
}
