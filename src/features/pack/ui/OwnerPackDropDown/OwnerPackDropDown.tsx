import { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/common/consts'
import { DropDown, DropDownItemWithIcon } from '@/components/ui/drop-down'
import { Icon } from '@/components/ui/icon/icon.tsx'

type Props = {
  onEditHandler: (value: boolean) => void
  onDeleteHandler: () => void
}

export const OwnerPackDropDown: FC<Props> = ({ onEditHandler, onDeleteHandler }) => {
  const navigate = useNavigate()

  return (
    <DropDown>
      <DropDownItemWithIcon
        onSelect={() => navigate(`.${ROUTES.learn}`)}
        icon={<Icon name="play" />}
        text="Learn"
      />
      <DropDownItemWithIcon
        onSelect={() => onEditHandler(true)}
        icon={<Icon name="edit" />}
        text="Edit"
      />
      <DropDownItemWithIcon
        onSelect={onDeleteHandler}
        icon={<Icon name="delete" />}
        text="Delete"
      />
    </DropDown>
  )
}
