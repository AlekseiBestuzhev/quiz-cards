import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const registrationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  confirmPassword: z.string().min(3),
})

export type SignUpFormProps = z.infer<typeof registrationSchema>

export const useSignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormProps>({
    resolver: zodResolver(registrationSchema),
  })

  return { control, handleSubmit, errors }
}
