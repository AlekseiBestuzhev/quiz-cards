import { FC } from 'react'

import { CardForm } from '@/components/forms/card'
import { ModalWindow } from '@/components/ui/modal-window'
import { useCreateCardMutation } from '@/features/cards/services'

type Props = {
  open: boolean
  setOpen: (value: boolean) => void
  packId: string
}

export const CreateCardModal: FC<Props> = ({ open, setOpen, packId }) => {
  const [createCard] = useCreateCardMutation()

  const onCancel = () => {
    setOpen(false)
  }

  const onSubmit = (data: FormData) => {
    createCard({ packId, data })
    setOpen(false)
  }

  return (
    <ModalWindow open={open} setOpen={setOpen} title="Add New Card">
      <CardForm onSubmit={onSubmit} onCancel={onCancel} />
    </ModalWindow>
  )
}
