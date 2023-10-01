import { FC } from 'react'

import { Link, RelativeRoutingType } from 'react-router-dom'

import s from './back-button.module.scss'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'

type Props = {
  to: string
  text: string
  relative?: RelativeRoutingType
}

export const BackButton: FC<Props> = ({ text, ...rest }) => {
  return (
    <Button as={Link} variant="link" className={s.button} {...rest}>
      <Icon name={'arrow-back'} width={22} height={22} />
      <Typography variant="body2" className={s.text}>
        {text}
      </Typography>
    </Button>
  )
}
