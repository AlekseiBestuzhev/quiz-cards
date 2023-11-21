import { FC } from 'react'

import { requestHandler } from '@/common/utils'
import { CardForm } from '@/components/forms/card'
import { ModalWindow } from '@/components/ui/modal-window'
import { useUpdateCardMutation } from '@/features/cards/services'

export type EditCardModalProps = {
  open: boolean
  setOpen: (value: boolean) => void
  cardId: string
  question: string
  questionImg: string | null
  answer: string
  answerImg: string | null
}

export const EditCardModal: FC<EditCardModalProps> = ({
  open,
  setOpen,
  cardId,
  question,
  questionImg,
  answer,
  answerImg,
}) => {
  const values = {
    question,
    questionImg,
    answer,
    answerImg,
  }

  const [updateCard] = useUpdateCardMutation()

  const onCancel = () => {
    setOpen(false)
  }

  const onSubmit = async (data: FormData) => {
    await requestHandler(async () => {
      await updateCard({ cardId, data }).unwrap()
      setOpen(false)
    })
  }

  return (
    <ModalWindow open={open} setOpen={setOpen} title="Edit Card">
      <CardForm onSubmit={onSubmit} onCancel={onCancel} defaultValues={values} />
    </ModalWindow>
  )
}
