import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const forgotPasswordSchema = z.object({
  email: z.string().email(),
})

export type ForgotPasswordFormType = z.infer<typeof forgotPasswordSchema>

export const useForgotPassword = () => {
  const { control, handleSubmit } = useForm<ForgotPasswordFormType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  })

  return { control, handleSubmit }
}
