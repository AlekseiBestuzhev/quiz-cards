import { forwardRef } from 'react'

import s from './profile-block.module.scss'

import { Avatar } from '@/components/ui/avatar'
import { Typography } from '@/components/ui/typography'

type UserDataType = {
  name: string
  email: string
  img: string
}

type PropsType = {
  userData: UserDataType
}

export const ProfileBlock = forwardRef<any, PropsType>(({ userData }, ref) => {
  return (
    <div className={s.content} ref={ref}>
      <Avatar userName={userData.name} image={userData.img} className={s.avatar} />
      <div>
        <Typography variant="subtitle2">{userData.name}</Typography>
        <Typography variant="caption" className={s.email}>
          {userData.email}
        </Typography>
      </div>
    </div>
  )
})
