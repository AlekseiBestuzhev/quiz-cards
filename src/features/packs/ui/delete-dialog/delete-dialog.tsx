import { FC, memo } from 'react'

import s from './delete-dialog.module.scss'

import { Button } from '@/components/ui/button'
import { ModalWindow } from '@/components/ui/modal-window'
import { Typography } from '@/components/ui/typography'
import { useDeleteDeckMutation } from '@/features/packs/services'

type Props = {
  id: string
  open: boolean
  setOpen: (value: boolean) => void
}

export const DeleteDialog: FC<Props> = memo(({ id, open, setOpen }) => {
  const [deletePack] = useDeleteDeckMutation()

  const onConfirm = () => {
    deletePack({ id })
    setOpen(false)
  }

  const onCancel = () => {
    setOpen(false)
  }

  return (
    <ModalWindow open={open} setOpen={setOpen} title="Delete Pack">
      <Typography>
        Do you really want to remove Pack Name? <br />
        All cards will be deleted.
      </Typography>
      <div className={s.buttons}>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onConfirm}>Delete Pack</Button>
      </div>
    </ModalWindow>
  )
})
