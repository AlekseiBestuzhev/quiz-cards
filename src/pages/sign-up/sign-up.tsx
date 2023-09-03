import { Link } from 'react-router-dom'

import s from './sign-up.module.scss'

import { SignInFormProps, SignUpForm } from '@/components/forms'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

export const SignUp = () => {
  const onSubmit = (data: SignInFormProps) => {
    alert(JSON.stringify(data))
  }

  return (
    <div className={s.root}>
      <Card>
        <div className={s.content}>
          <Typography as="h2" variant="large">
            Sign Up
          </Typography>
          <SignUpForm onSubmit={onSubmit} className={s.form} />
          <div className={s.login}>
            <Typography variant="body2">Already have an account?</Typography>
            <Button as={Link} to="/sign-in" variant="link" className={s.signIn}>
              Sign In
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
