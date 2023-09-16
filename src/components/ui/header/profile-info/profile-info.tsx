import { ElementRef, forwardRef } from 'react'

import s from './profile-info.module.scss'

import { Avatar } from '@/components/ui/avatar'
import { Typography } from '@/components/ui/typography'
import { UserResponse } from '@/features/auth/model/types.ts'

export type ProfileInfoProps = Pick<UserResponse, 'avatar' | 'name' | 'email'>

export const ProfileInfo = forwardRef<ElementRef<'div'>, ProfileInfoProps>(
  ({ avatar, name, email }, ref) => {
    return (
      <div className={s.content} ref={ref}>
        <Avatar userName={name} image={avatar} className={s.avatar} />
        <div>
          <Typography variant="subtitle2">{name}</Typography>
          <Typography variant="caption" className={s.email}>
            {email}
          </Typography>
        </div>
      </div>
    )
  }
)
