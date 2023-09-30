import { ChangeEvent } from 'react'

import { validateImage } from '@/common/utils'
import { EditProfileFormProps } from '@/components/forms'
import { ProfileInfoProps } from '@/components/ui/header/profile-info'
import {
  useGetMeQuery,
  useLogoutMutation,
  useUpdateProfileMutation,
} from '@/features/auth/services'

export const useProfile = () => {
  const { data } = useGetMeQuery()
  const user = data as ProfileInfoProps

  const [updateProfile] = useUpdateProfileMutation()

  const [logout] = useLogoutMutation()

  const updateAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      if (validateImage(file)) {
        const formData = new FormData()

        formData.append('avatar', file)

        updateProfile(formData)
      }
    }
  }

  const onUpdate = (data: EditProfileFormProps) => {
    const form = new FormData()

    Object.keys(data).forEach(key => {
      form.append(key, data[key as keyof EditProfileFormProps])
    })
    updateProfile(form)
  }

  return { user, logout, updateAvatar, onUpdate }
}
