import { Link, useParams } from 'react-router-dom'

import s from './check-email.module.scss'

import { CheckEmailImage } from '@/assets/illustrations/check-email-image.tsx'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

export const CheckEmail = () => {
  const { email } = useParams<{ email: string }>()

  return (
    <div className={s.container}>
      <Card>
        <div className={s.content}>
          <Typography as="h2" variant="large" className={s.title}>
            Check Email
          </Typography>
          <div className={s.imageContainer}>
            <CheckEmailImage />
          </div>
          <Typography variant="body2" className={s.notification}>
            We’ve sent an Email with instructions to {email}
          </Typography>
          <Button fullWidth as={Link} to="/sign-in">
            Back to Sign in
          </Button>
        </div>
      </Card>
    </div>
  )
}
