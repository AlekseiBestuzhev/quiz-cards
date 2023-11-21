import { Link, Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import s from './sign-up.module.scss'

import { requestHandler } from '@/common/utils'
import { SignUpForm, SignUpFormProps } from '@/components/forms'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { useGetMeQuery, useLoginMutation, useSignUpMutation } from '@/features/auth/services'

export const SignUp = () => {
  const [signUp] = useSignUpMutation()
  const [login] = useLoginMutation()
  const { data: me } = useGetMeQuery()

  const onSubmit = async (data: SignUpFormProps) => {
    const { confirmPassword, ...rest } = data

    await requestHandler(async () => {
      await signUp(rest)
      await login(rest)
      toast.success('You are successfully signed up', { containerId: 'common' })
    })
  }

  if (me && !('success' in me)) return <Navigate to={'/packs'} />

  return (
    <div className={s.root}>
      <Card>
        <section className={s.content}>
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
        </section>
      </Card>
    </div>
  )
}
