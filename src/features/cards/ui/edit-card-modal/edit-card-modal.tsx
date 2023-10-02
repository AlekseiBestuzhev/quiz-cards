import { FC } from 'react'

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

  const onSubmit = (data: FormData) => {
    updateCard({ cardId, data })
    setOpen(false)
  }

  return (
    <ModalWindow open={open} setOpen={setOpen} title="Edit Card">
      <CardForm onSubmit={onSubmit} onCancel={onCancel} defaultValues={values} />
    </ModalWindow>
  )
}