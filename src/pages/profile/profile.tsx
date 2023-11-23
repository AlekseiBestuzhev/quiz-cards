import { useState } from 'react'

import { toast } from 'react-toastify'

import s from './profile.module.scss'

import { requestHandler } from '@/common/utils'
import { EditProfileForm, EditProfileFormProps } from '@/components/forms'
import { Avatar } from '@/components/ui/avatar'
import { BackButton } from '@/components/ui/back-button'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FileUploader } from '@/components/ui/file-uploader/file-uploader.tsx'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'
import { useProfile } from '@/features/profile/model/hooks'
import { ProfileControls } from '@/features/profile/ui'

export const Profile = () => {
  const { user, logout, updateAvatar, onUpdate } = useProfile()

  const [isEditMode, setEditMode] = useState(false)

  const onSubmit = async (data: EditProfileFormProps) => {
    await requestHandler(async () => {
      await onUpdate(data)
      setEditMode(false)
      toast.success('Your name successfully changed', { containerId: 'common' })
    })
  }

  return (
    <>
      <BackButton />
      <div className={s.root}>
        <Card>
          <div className={s.content}>
            <Typography as="h2" variant="large">
              Personal Information
            </Typography>
            <div className={s.avatarContainer}>
              <Avatar size={96} userName={user.name} image={user.avatar} />
              {!isEditMode && (
                <FileUploader
                  name="avatar"
                  onChange={updateAvatar}
                  className={s.editImage}
                  accept="image/*"
                  as={Button}
                >
                  <Icon className={s.icon} name={'edit'} height={20} width={20} />
                </FileUploader>
              )}
            </div>
            {isEditMode ? (
              <EditProfileForm
                onSubmit={onSubmit}
                className={s.form}
                initialValues={{ name: user.name }}
              />
            ) : (
              <ProfileControls user={user} setEditMode={setEditMode} onLogout={logout} />
            )}
          </div>
        </Card>
      </div>
    </>
  )
}
