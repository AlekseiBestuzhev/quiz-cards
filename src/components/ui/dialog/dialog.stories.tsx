import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Dialog } from './dialog.tsx'

import { Button } from '@/components/ui/button'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta

export const DeletePack = {
  render: () => {
    const [deleteIsOpen, setDeleteIsOpen] = useState(false)

    return (
      <>
        <Dialog
          title="Delete Pack"
          description="Do you really want to remove Pack Name? All cards will be deleted."
          buttonText="Delete Pack"
          open={deleteIsOpen}
          setOpen={setDeleteIsOpen}
          onConfirm={() => setDeleteIsOpen(false)}
          splitLines
        />
        <Button onClick={() => setDeleteIsOpen(true)}>Delete Pack</Button>
      </>
    )
  },
}
