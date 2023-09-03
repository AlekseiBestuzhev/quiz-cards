import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

export type SignInFormProps = z.infer<typeof loginSchema>

export const useSignIn = () => {
  const { control, handleSubmit } = useForm<SignInFormProps>({
    resolver: zodResolver(loginSchema),
  })

  return { control, handleSubmit }
}
