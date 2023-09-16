import { Link, Navigate } from 'react-router-dom'

import s from './sign-in.module.scss'

import { SignInForm } from '@/components/forms'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { useGetMeQuery, useLoginMutation } from '@/features/auth/services/auth.ts'

export const SignIn = () => {
  const [login] = useLoginMutation()
  const { data: me, isLoading: isMeLoading } = useGetMeQuery()

  if (isMeLoading) return <div>Loading...</div>
  if (me && !('success' in me)) return <Navigate to={'/packs'} />

  return (
    <div className={s.root}>
      <Card>
        <div className={s.content}>
          <Typography as="h2" variant="large">
            Sign In
          </Typography>
          <SignInForm onSubmit={login} className={s.form}>
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
