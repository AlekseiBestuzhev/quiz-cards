import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { stringSchema } from '@/common/utils'

const createNewPasswordSchema = z.object({
  password: stringSchema,
})

export type CreateNewPasswordFormType = z.infer<typeof createNewPasswordSchema>

export const useCreateNewPassword = () => {
  return useForm<CreateNewPasswordFormType>({
    resolver: zodResolver(createNewPasswordSchema),
    defaultValues: { password: '' },
  })
}
