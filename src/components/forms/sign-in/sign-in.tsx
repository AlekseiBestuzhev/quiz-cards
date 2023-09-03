import { PropsWithChildren } from 'react'

import { DevTool } from '@hookform/devtools'
import { clsx } from 'clsx'

import s from './sign-in.module.scss'

import { SignInFormProps, useSignIn } from './'

import { ControlledCheckbox, ControlledTextField } from '@/components/controlled'
import { Button } from '@/components/ui/button'

type Props = {
  onSubmit: (data: SignInFormProps) => void
  className?: string
} & PropsWithChildren

export const SignInForm = ({ onSubmit, className, children }: Props) => {
  const classes = clsx(s.form, className)

  const { control, handleSubmit } = useSignIn()

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
      <ControlledCheckbox
        name={'rememberMe'}
        control={control}
        label={'Remember Me'}
        className={s.checkbox}
      />
      {children}
      <Button fullWidth className={s.button}>
        Sign In
      </Button>
    </form>
  )
}
