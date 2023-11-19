import { FC } from 'react'

import { clsx } from 'clsx'

import s from './create-new-password.module.scss'

import { ControlledTextField } from '@/components/controlled'
import {
  CreateNewPasswordFormType,
  useCreateNewPassword,
} from '@/components/forms/create-new-password/use-create-new-password.ts'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

type PropsType = {
  onSubmit: (data: CreateNewPasswordFormType) => void
  className?: string
}

export const CreateNewPasswordForm: FC<PropsType> = ({ onSubmit, className }) => {
  const classes = clsx(s.form, className)

  const { control, handleSubmit } = useCreateNewPassword()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes}>
      <ControlledTextField control={control} name="password" label="Password" type="password" />
      <Typography variant="body2" className={s.information}>
        Enter new password and then sign in with it.
      </Typography>
      <Button fullWidth>Create New Password</Button>
    </form>
  )
}
