import { FC } from 'react'

import { DevTool } from '@hookform/devtools'

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
}

export const CreateNewPasswordForm: FC<PropsType> = ({ onSubmit }) => {
  const { control, handleSubmit } = useCreateNewPassword()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <DevTool control={control} />
      <ControlledTextField control={control} name="password" label="Password" type="password" />
      <Typography variant="body2" className={s.information}>
        Create new password and we will send you further instructions to email
      </Typography>
      <Button fullWidth>Create New Password</Button>
    </form>
  )
}
