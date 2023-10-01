import { FC, useState } from 'react'

import { Icon } from '@/components/ui/icon/icon.tsx'
import { IconButton } from '@/components/ui/icon-button'
import { EditCardModal, EditCardModalProps } from '@/features/cards/ui'

type Props = Omit<EditCardModalProps, 'open' | 'setOpen'>

export const EditCardControl: FC<Props> = props => {
  const [editIsOpen, setEditIsOpen] = useState(false)

  return (
    <>
      <EditCardModal open={editIsOpen} setOpen={setEditIsOpen} {...props} />
      <IconButton
        icon={<Icon name={'edit'} width={16} height={16} />}
        onClick={() => setEditIsOpen(true)}
        small
      />
    </>
  )
}
