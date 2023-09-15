import { FC } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import s from './header.module.scss'

import { Logo } from '@/assets/illustrations/it-inc-logo.tsx'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropDown, DropDownItem, DropDownItemWithIcon } from '@/components/ui/drop-down'
import { ProfileBlock } from '@/components/ui/header/profile-block'
import { Icon } from '@/components/ui/icon/icon.tsx'

type Props = {
  userIsAuth: boolean
}
export const Header: FC<Props> = ({ userIsAuth }) => {
  const navigate = useNavigate()

  const navigateToHome = () => {
    navigate('/')
  }

  const userData = {
    name: 'Aleksei',
    email: 'frontend-dev@gmail.com',
    img: '',
  }

  return (
    <div className={s.root}>
      <div className={s.container}>
        <Logo className={s.logo} onClick={navigateToHome} />
        {userIsAuth ? (
          <DropDown
            trigger={
              <button className={s.avatarButton}>
                <Avatar userName={'Alex'} />
              </button>
            }
          >
            <DropDownItem onSelect={() => {}}>
              <ProfileBlock userData={userData} />
            </DropDownItem>
            <DropDownItemWithIcon
              icon={<Icon name="user" />}
              text="My profile"
              onSelect={() => {}}
            />
            <DropDownItemWithIcon
              icon={<Icon name="logout" />}
              text="Sign out"
              onSelect={() => {}}
            />
          </DropDown>
        ) : (
          <Button as={Link} to="/sign-in">
            Sign In
          </Button>
        )}
      </div>
    </div>
  )
}
