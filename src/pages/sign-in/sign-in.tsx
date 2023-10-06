import { Link, Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import s from './sign-in.module.scss'

import { SignInForm } from '@/components/forms'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { LoginArgs, useGetMeQuery, useLoginMutation } from '@/features/auth/services'
import { ErrorResponse } from '@/features/packs/services'

export const SignIn = () => {
  const [login] = useLoginMutation()
  const { data: me } = useGetMeQuery()

  const loginHandler = async (data: LoginArgs) => {
    try {
      await login(data).unwrap()
      toast.success('You are successfully authorized', { containerId: 'common' })
    } catch (err) {
      if (typeof err === 'object' && err !== null && 'data' in err) {
        const error = err as ErrorResponse

        toast.error(error.data.errorMessages[0].message, { containerId: 'common' })
      }
    }
  }

  if (me && !('success' in me)) return <Navigate to={'/packs'} />

  return (
    <div className={s.root}>
      <Card>
        <section className={s.content}>
          <Typography as="h2" variant="large">
            Sign In
          </Typography>
          <SignInForm onSubmit={loginHandler} className={s.form}>
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
        </section>
      </Card>
    </div>
  )
}
