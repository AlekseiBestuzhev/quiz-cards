import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const registrationSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(3).trim(),
    confirmPassword: z.string().min(3).trim(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export type SignUpFormProps = z.infer<typeof registrationSchema>

export const useSignUp = () => {
  const { control, handleSubmit } = useForm<SignUpFormProps>({
    resolver: zodResolver(registrationSchema),
  })

  return { control, handleSubmit }
}
