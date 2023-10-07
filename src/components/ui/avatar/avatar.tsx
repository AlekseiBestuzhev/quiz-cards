import { CSSProperties, forwardRef } from 'react'

import * as AvatarRadix from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

type Props = {
  userName: string
  image?: string
  size?: number
  style?: CSSProperties
  className?: string
}

export const Avatar = forwardRef<any, Props>(
  ({ userName, image, size = 36, style, className }, ref) => {
    const classes = clsx(s.avatar, className)

    const initials = userName
      .split(' ')
      .map(word => word[0].toUpperCase())
      .join(' ')

    const styles: CSSProperties = {
      width: size,
      height: size,
      ...(style || {}),
    }

    return (
      <div className={classes} style={styles}>
        <AvatarRadix.Root ref={ref}>
          <AvatarRadix.Image className={s.image} src={image} alt="User Avatar" />
          {!image && <AvatarRadix.Fallback className={s.fallback}>{initials}</AvatarRadix.Fallback>}
        </AvatarRadix.Root>
      </div>
    )
  }
)
