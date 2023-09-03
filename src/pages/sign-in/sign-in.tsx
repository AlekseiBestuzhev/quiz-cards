import { Link } from 'react-router-dom'

import s from './sign-in.module.scss'

import { SignInForm, SignInFormProps } from '@/components/forms'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

export const SignIn = () => {
  const onSubmit = (data: SignInFormProps) => {
    alert(JSON.stringify(data))
  }

  return (
    <div className={s.root}>
      <Card>
        <div className={s.content}>
          <Typography as="h2" variant="large">
            Sign In
          </Typography>
          <SignInForm onSubmit={onSubmit} className={s.form}>
            <div className={s.linkContainer}>
              <Typography variant="body2" as={Link} to="/recover-password">
                Forgot Password?
              </Typography>
            </div>
          </SignInForm>
          <div className={s.register}>
            <Typography variant="body2">Don&apos;t have an account?</Typography>
            <Button as={Link} to="/sign-up" variant="link" className={s.signUp}>
              Sign Up
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
