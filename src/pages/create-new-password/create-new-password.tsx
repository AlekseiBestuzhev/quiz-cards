import { useParams } from 'react-router-dom'

import s from './create-new-password.module.scss'

import { CreateNewPasswordForm, CreateNewPasswordFormType } from '@/components/forms'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

export const CreateNewPassword = () => {
  const { token } = useParams<{ token: string }>()
  const onSubmit = (data: CreateNewPasswordFormType) => {
    if (token) {
      alert(JSON.stringify(data))
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
