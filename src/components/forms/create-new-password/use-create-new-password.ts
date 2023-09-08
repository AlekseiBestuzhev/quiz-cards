import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const createNewPasswordSchema = z.object({
  password: z.string().min(3),
})

export type CreateNewPasswordFormType = z.infer<typeof createNewPasswordSchema>

export const useCreateNewPassword = () => {
  const { control, handleSubmit } = useForm<CreateNewPasswordFormType>({
    resolver: zodResolver(createNewPasswordSchema),
    defaultValues: { password: '' },
  })

  return { control, handleSubmit }
}
