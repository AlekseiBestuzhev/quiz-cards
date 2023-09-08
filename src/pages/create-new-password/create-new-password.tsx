import s from './create-new-password.module.scss'

import { CreateNewPasswordForm, CreateNewPasswordFormType } from '@/components/forms'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

export const CreateNewPassword = () => {
  const onSubmit = (data: CreateNewPasswordFormType) => {
    alert(JSON.stringify(data))
  }

  return (
    <div className={s.container}>
      <Card>
        <div className={s.content}>
          <Typography as="h2" variant="large">
            Create new password
          </Typography>
          <CreateNewPasswordForm onSubmit={onSubmit} className={s.form} />
        </div>
      </Card>
    </div>
  )
}
