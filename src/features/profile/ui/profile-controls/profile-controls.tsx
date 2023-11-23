import { FC } from 'react'

import s from './profile-controls.module.scss'

import { ProfileInfoProps } from '@/components/header/profile-info'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { IconButton } from '@/components/ui/icon-button'
import { Typography } from '@/components/ui/typography'

type Props = {
  user: ProfileInfoProps
  setEditMode: (value: boolean) => void
  onLogout: () => void
}

export const ProfileControls: FC<Props> = ({ user, setEditMode, onLogout }) => {
  return (
    <>
      <div className={s.nickName}>
        <Typography as="h1" variant="large">
          {user.name}
        </Typography>
        <IconButton
          icon={<Icon height={20} width={20} name={'edit'} />}
          onClick={() => setEditMode(true)}
        />
      </div>
      <Typography as="h2" variant="body2" className={s.email}>
        {user.email}
      </Typography>
      <Button onClick={onLogout} variant="secondary" className={s.logout}>
        <Icon className={s.icon} name={'logout'} height={18} width={18} />
        <Typography variant={'subtitle2'}>Logout</Typography>
      </Button>
    </>
  )
}
