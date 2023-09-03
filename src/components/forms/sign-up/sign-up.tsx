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

  const { control, handleSubmit, errors } = useSignUp()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes}>
      <ControlledTextField
        control={control}
        name={'email'}
        label={'Email'}
        className={s.email}
        errorMessage={errors?.email?.message}
      />
      <ControlledTextField
        control={control}
        name={'password'}
        label={'Password'}
        type="password"
        className={s.password}
        errorMessage={errors?.password?.message}
      />
      <ControlledTextField
        control={control}
        name={'confirmPassword'}
        label={'Confirm Password'}
        type="password"
        errorMessage={errors?.confirmPassword?.message}
      />
      <Button fullWidth className={s.button}>
        Sign Up
      </Button>
    </form>
  )
}
