import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { fileSchema, stringSchema } from '@/common/utils'

const cardScheme = z.object({
  question: stringSchema,
  answer: stringSchema,
  questionImg: fileSchema,
  answerImg: fileSchema,
})

export type CardFormType = z.infer<typeof cardScheme>

export const useCardForm = (props: CardFormType) => {
  return useForm<CardFormType>({
    resolver: zodResolver(cardScheme),
    defaultValues: props,
  })
}
