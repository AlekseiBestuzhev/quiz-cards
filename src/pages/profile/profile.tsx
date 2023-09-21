import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import s from './profile.module.scss'

import { validateFile } from '@/common/utils'
import { EditProfileForm, EditProfileFormProps } from '@/components/forms'
import { Avatar } from '@/components/ui/avatar'
import { BackButton } from '@/components/ui/back-button'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FileUploader } from '@/components/ui/file-uploader/file-uploader.tsx'
import { ProfileInfoProps } from '@/components/ui/header/profile-info'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'
import {
  useGetMeQuery,
  useLogoutMutation,
  useUpdateProfileMutation,
} from '@/features/auth/services'

export const Profile = () => {
  const { data } = useGetMeQuery()

  const [updateProfile] = useUpdateProfileMutation()

  const user = data as ProfileInfoProps

  const onUpdate = (data: EditProfileFormProps) => {
    const form = new FormData()

    Object.keys(data).forEach(key => {
      form.append(key, data[key as keyof EditProfileFormProps])
    })
    updateProfile(form)
  }

  const [isEditMode, setEditMode] = useState(false)

  const [logout] = useLogoutMutation()

  const navigate = useNavigate()

  const onSubmit = (data: EditProfileFormProps) => {
    onUpdate(data)
    toggleEditMode()
  }
  const toggleEditMode = () => {
    setEditMode(prevIsEditMode => !prevIsEditMode)
  }

  const onLogout = () => {
    logout()
    navigate('/sign-in')
  }

  return (
    <>
      <BackButton to="/packs" text="Back To Packs List" />
      <div className={s.root}>
        <Card>
          <div className={s.content}>
            <Typography as="h2" variant="large">
              Personal Information
            </Typography>
            <div className={s.avatarContainer}>
              <Avatar size={96} className={s.avatar} userName={user.name} image={user.avatar} />
              {!isEditMode && (
                <FileUploader
                  validate={validateImage}
                  update={updateProfile}
                  className={s.editImage}
                  accept="image/*"
                  as={Button}
                  asProps={{
                    variant: 'secondary',
                  }}
                />
              )}
            </div>
            {isEditMode ? (
              <EditProfileForm
                onSubmit={onSubmit}
                className={s.form}
                initialValues={{ name: user.name }}
              />
            ) : (
              <>
                <div className={s.nickName}>
                  <Typography as="h1" variant="large">
                    {user.name}
                  </Typography>
                  <button className={s.editNickname} onClick={toggleEditMode}>
                    <Icon height={16} width={16} className={s.icon} name={'edit'} />
                  </button>
                </div>
                <Typography as="h2" variant="body2" className={s.email}>
                  {user.email}
                </Typography>
                <Button onClick={onLogout} variant="secondary" className={s.logout}>
                  <Icon className={s.icon} name={'logout'} height={16} width={16} />
                  <Typography variant={'subtitle2'}>Logout</Typography>
                </Button>
              </>
            )}
          </div>
        </Card>
      </div>
    </>
  )
}

function validateImage(file: File) {
  const maxSizeInBytes = 5 * 1024 * 1024
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']

  return validateFile(file, maxSizeInBytes, allowedTypes)
}
