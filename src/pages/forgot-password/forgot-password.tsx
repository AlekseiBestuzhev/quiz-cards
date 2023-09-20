import { Link } from 'react-router-dom'

import s from './forgot-password.module.scss'

import { ForgotPasswordForm, ForgotPasswordFormType } from '@/components/forms/'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

export const ForgotPassword = () => {
  const onSubmit = (data: ForgotPasswordFormType) => {
    alert(JSON.stringify(data))
  }

  return (
    <div className={s.container}>
      <Card>
        <section className={s.content}>
          <Typography as="h2" variant="large">
            Forgot your password?
          </Typography>
          <ForgotPasswordForm onSubmit={onSubmit} className={s.form} />
          <div className={s.register}>
            <Typography variant="body2">Did you remember your password?</Typography>
            <Button as={Link} to={'/sign-in'} variant="link" className={s.signIn}>
              Try logging in
            </Button>
          </div>
        </section>
      </Card>
    </div>
  )
}
