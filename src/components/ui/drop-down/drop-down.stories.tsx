import { Meta } from '@storybook/react'

import { DropDown, DropDownItem, DropDownItemWithIcon } from './'

import { ProfileInfo } from '@/components/header/profile-info'
import { Avatar } from '@/components/ui/avatar'
import { Icon } from '@/components/ui/icon/icon.tsx'

const meta = {
  title: 'Components/Drop-down Menu',
  component: DropDown,
  tags: ['autodocs'],
} satisfies Meta<typeof DropDown>

export default meta

export const Default = {
  render: () => {
    return (
      <div style={{ display: 'flex', gap: '24px' }}>
        <p style={{ margin: 0 }}>This is default drop-down-menu button:</p>
        <div>
          <DropDown>
            <>
              <DropDownItemWithIcon icon={<Icon name="play" />} text="Learn" onSelect={() => {}} />
              <DropDownItemWithIcon icon={<Icon name="edit" />} text="Edit" onSelect={() => {}} />
              <DropDownItemWithIcon
                icon={<Icon name="trash-bin" />}
                text="Delete"
                onSelect={() => {}}
              />
            </>
          </DropDown>
        </div>
      </div>
    )
  },
}

export const WithProfile = {
  render: () => {
    const userData = {
      name: 'Aleksei',
      email: 'frontend-dev@gmail.com',
      avatar: '',
    }

    return (
      <div style={{ display: 'flex', gap: '24px' }}>
        <p style={{ margin: 0 }}>There is the avatar is button for menu:</p>
        <div>
          <DropDown
            trigger={
              <button style={{ all: 'unset', cursor: 'pointer' }}>
                <Avatar userName={userData.name} />
              </button>
            }
          >
            <DropDownItem>
              <ProfileInfo {...userData} />
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
        </div>
      </div>
    )
  },
}
