import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const cardScheme = z.object({
  question: z.string().nonempty('Required').min(3, 'The name must be at least 3 characters'),
  answer: z.string().nonempty('Required').min(3, 'The name must be at least 3 characters'),
  questionImg: z
    .instanceof(File)
    .refine(file => file.size <= 1000000, `Max image size is 1MB.`)
    .refine(
      file => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.'
    )
    .optional(),
  answerImg: z
    .instanceof(File)
    .refine(file => file.size <= 1000000, `Max image size is 1MB.`)
    .refine(
      file => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.'
    )
    .optional(),
})

export type CardFormType = z.infer<typeof cardScheme>

export const useCardForm = (props: CardFormType) => {
  const { control, watch, resetField, getFieldState, trigger, handleSubmit } =
    useForm<CardFormType>({
      resolver: zodResolver(cardScheme),
      defaultValues: props,
    })

  return { control, watch, resetField, getFieldState, trigger, handleSubmit }
}
