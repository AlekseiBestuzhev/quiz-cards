import { FC } from 'react'

import { errorNotification } from '@/common/utils'
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

  const onSubmit = async (data: FormData) => {
    try {
      await createCard({ packId, data }).unwrap()
      setOpen(false)
    } catch (error) {
      errorNotification(error)
    }
  }

  return (
    <ModalWindow open={open} setOpen={setOpen} title="Add New Card">
      <CardForm onSubmit={onSubmit} onCancel={onCancel} />
    </ModalWindow>
  )
}
