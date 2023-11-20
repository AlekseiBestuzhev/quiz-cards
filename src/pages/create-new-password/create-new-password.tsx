import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import s from './create-new-password.module.scss'

import { errorNotification } from '@/common/utils'
import { CreateNewPasswordForm, CreateNewPasswordFormType } from '@/components/forms'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { useResetPasswordMutation } from '@/features/auth/services'

export const CreateNewPassword = () => {
  const [resetPassword] = useResetPasswordMutation()
  const navigate = useNavigate()
  const { token } = useParams<{ token: string }>()

  const onSubmit = async ({ password }: CreateNewPasswordFormType) => {
    if (token) {
      try {
        await resetPassword({ token, password }).unwrap()
        navigate('/sign-in')
        toast.success('The password has been changed', { containerId: 'common' })
      } catch (error) {
        errorNotification(error)
      }
    }
  }

  return (
    <div className={s.container}>
      <Card>
        <section className={s.content}>
          <Typography as="h2" variant="large">
            Create new password
          </Typography>
          <CreateNewPasswordForm onSubmit={onSubmit} className={s.form} />
        </section>
      </Card>
    </div>
  )
}
