import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { emailSchema, stringSchema } from '@/common/utils'

const registrationSchema = z
  .object({
    email: emailSchema,
    password: stringSchema,
    confirmPassword: stringSchema,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export type SignUpFormProps = z.infer<typeof registrationSchema>

export const useSignUp = () => {
  return useForm<SignUpFormProps>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
}
