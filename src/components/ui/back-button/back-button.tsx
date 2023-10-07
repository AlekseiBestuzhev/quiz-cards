import { FC } from 'react'

import { clsx } from 'clsx'
import { Link, RelativeRoutingType } from 'react-router-dom'

import s from './back-button.module.scss'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'

type Props = {
  to: string
  text: string
  relative?: RelativeRoutingType
  className?: string
}

export const BackButton: FC<Props> = ({ text, className, ...rest }) => {
  const classes = clsx(s.button, className)

  return (
    <Button as={Link} variant="link" className={classes} {...rest}>
      <Icon name={'arrow-back'} width={22} height={22} />
      <Typography variant="body2" className={s.text}>
        {text}
      </Typography>
    </Button>
  )
}
