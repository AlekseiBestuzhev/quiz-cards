import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import s from './forgot-password.module.scss'

import { emailRecoveringTemplate as html } from '@/common/email-recovering-template'
import { errorNotification } from '@/common/utils'
import { ForgotPasswordForm, ForgotPasswordFormType } from '@/components/forms/'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { useRecoverPasswordMutation } from '@/features/auth/services'

export const ForgotPassword = () => {
  const navigate = useNavigate()
  const [recoverPassword] = useRecoverPasswordMutation()
  const onSubmit = async ({ email }: ForgotPasswordFormType) => {
    try {
      await recoverPassword({ html, email }).unwrap()
      navigate(`/check-email/${email}`)
      toast.success('The password has been changed', { containerId: 'common' })
    } catch (error) {
      errorNotification(error)
    }
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
