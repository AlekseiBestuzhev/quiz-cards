import { Link, useNavigate } from 'react-router-dom'

import s from './header.module.scss'

import { Logo } from '@/assets/illustrations/it-inc-logo.tsx'
import { Button } from '@/components/ui/button'
export const Header = () => {
  const navigate = useNavigate()

  const navigateToHome = () => {
    navigate('/')
  }

  return (
    <div className={s.root}>
      <div className={s.container}>
        <Logo className={s.logo} onClick={navigateToHome} />
        <Button as={Link} to="/sign-in">
          Sign In
        </Button>
      </div>
    </div>
  )
}
