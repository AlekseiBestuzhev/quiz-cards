import { Link } from 'react-router-dom'

import s from './header.module.scss'

import { Logo } from '@/assets/illustrations/it-inc-logo.tsx'
import { Button } from '@/components/ui/button'
export const Header = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Logo />
        <Button as={Link} to="/sign-in">
          Sign In
        </Button>
      </div>
    </div>
  )
}
