import { FC } from 'react'

import { clsx } from 'clsx'

import s from './forgot-password.module.scss'

import { ControlledTextField } from '@/components/controlled'
import { ForgotPasswordFormType, useForgotPassword } from '@/components/forms'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

type PropsType = {
  onSubmit: (data: ForgotPasswordFormType) => void
  className?: string
}

export const ForgotPasswordForm: FC<PropsType> = ({ onSubmit, className }) => {
  const classes = clsx(s.form, className)

  const { control, handleSubmit } = useForgotPassword()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes}>
      <ControlledTextField control={control} name="email" label="Email" />
      <Typography variant="body2" className={s.information}>
        Enter your email address and we will send you further instructions
      </Typography>
      <Button fullWidth>Send Instructions</Button>
    </form>
  )
}
