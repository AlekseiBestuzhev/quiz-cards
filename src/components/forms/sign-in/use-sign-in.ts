import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { emailSchema, stringSchema } from '@/common/utils'

const loginSchema = z.object({
  email: emailSchema,
  password: stringSchema,
  rememberMe: z.boolean(),
})

export type SignInFormProps = z.infer<typeof loginSchema>

export const useSignIn = () => {
  return useForm<SignInFormProps>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })
}
