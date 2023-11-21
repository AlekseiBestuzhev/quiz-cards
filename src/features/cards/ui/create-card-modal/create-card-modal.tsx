import { FC } from 'react'

import { requestHandler } from '@/common/utils'
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
    await requestHandler(async () => {
      await createCard({ packId, data }).unwrap()
      setOpen(false)
    })
  }

  return (
    <ModalWindow open={open} setOpen={setOpen} title="Add New Card">
      <CardForm onSubmit={onSubmit} onCancel={onCancel} />
    </ModalWindow>
  )
}
