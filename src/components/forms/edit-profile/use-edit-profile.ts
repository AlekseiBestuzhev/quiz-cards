import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const editProfileSchema = z.object({
  name: z.string().min(3).trim(),
})

export type EditProfileFormProps = z.infer<typeof editProfileSchema>

export const useEditProfile = (initialValues: EditProfileFormProps = { name: '' }) => {
  const { control, handleSubmit } = useForm<EditProfileFormProps>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: initialValues,
  })

  return { control, handleSubmit }
}
