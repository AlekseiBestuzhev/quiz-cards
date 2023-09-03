import { DevTool } from '@hookform/devtools'
import { clsx } from 'clsx'

import { useSignUp } from './'

import { ControlledTextField } from '@/components/controlled'
import s from '@/components/forms/sign-in/sign-in.module.scss'
import { Button } from '@/components/ui/button'

type Props = {
  onSubmit: (data: any) => void
  className?: string
}

export const SignUpForm = ({ onSubmit, className }: Props) => {
  const classes = clsx(s.form, className)

  const { control, handleSubmit } = useSignUp()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes}>
      <DevTool control={control} />
      <ControlledTextField control={control} name={'email'} label={'Email'} className={s.email} />
      <ControlledTextField
        control={control}
        name={'password'}
        label={'Password'}
        type="password"
        className={s.password}
      />
      <ControlledTextField
        control={control}
        name={'confirmPassword'}
        label={'Confirm Password'}
        type="password"
      />
      <Button fullWidth className={s.button}>
        Sign Up
      </Button>
    </form>
  )
}
