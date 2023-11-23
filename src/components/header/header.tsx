import { FC, memo } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import s from './header.module.scss'
import { ProfileInfo, ProfileInfoProps } from './profile-info'

import { Logo } from '@/assets/illustrations/logo.tsx'
import { ROUTES } from '@/common/consts'
import { useAppSelector } from '@/common/hooks'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropDown, DropDownItem, DropDownItemWithIcon } from '@/components/ui/drop-down'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'
import { loadingSelector } from '@/features/loading/model/selectors'
import { QueryLoading } from '@/features/loading/ui'

type Props = {
  data: ProfileInfoProps | null
  logout: () => void
}

export const Header: FC<Props> = memo(({ data, logout }) => {
  const queryInProgress = useAppSelector(loadingSelector)

  const navigate = useNavigate()

  const toProfile = () => {
    navigate(ROUTES.profile)
  }

  return (
    <div className={s.root}>
      {queryInProgress && <QueryLoading />}
      <div className={s.container}>
        <Link to={ROUTES.packs} className={s.link}>
          <Logo className={s.logo} />
        </Link>
        {data ? (
          <div className={s.user}>
            <Typography as={Link} to={ROUTES.profile} variant="subtitle1" className={s.name}>
              {data.name || data.email}
            </Typography>
            <DropDown
              trigger={
                <button className={s.dropdownButton}>
                  <Avatar userName={data.name || data.email} image={data.avatar} size={48} />
                </button>
              }
            >
              <DropDownItem>
                <ProfileInfo {...data} />
              </DropDownItem>
              <DropDownItemWithIcon
                icon={<Icon name="user" />}
                text="Profile"
                onSelect={toProfile}
              />
              <DropDownItemWithIcon
                icon={<Icon name="logout" />}
                text="Sign out"
                onSelect={logout}
              />
            </DropDown>
          </div>
        ) : (
          <Button as={Link} to={ROUTES.signIn}>
            Sign In
          </Button>
        )}
      </div>
    </div>
  )
})
