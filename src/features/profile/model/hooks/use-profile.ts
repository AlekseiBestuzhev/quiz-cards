import { ChangeEvent } from 'react'

import { toast } from 'react-toastify'

import { errorNotification, validateImage } from '@/common/utils'
import { EditProfileFormProps } from '@/components/forms'
import { ProfileInfoProps } from '@/components/header/profile-info'
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

  const updateAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files && e.target.files.length) {
        const file = e.target.files[0]

        if (validateImage(file)) {
          const formData = new FormData()

          formData.append('avatar', file)
          await updateProfile(formData).unwrap()

          toast.success('Your avatar successfully changed', { containerId: 'common' })
        }
      }
    } catch (error) {
      errorNotification(error)
    }
  }

  const onUpdate = async (data: EditProfileFormProps) => {
    const form = new FormData()

    Object.keys(data).forEach(key => {
      form.append(key, data[key as keyof EditProfileFormProps])
    })

    return updateProfile(form).unwrap()
  }

  return { user, logout, updateAvatar, onUpdate }
}
