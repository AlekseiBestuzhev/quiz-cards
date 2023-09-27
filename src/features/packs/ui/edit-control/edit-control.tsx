import { FC, useState } from 'react'

import { Icon } from '@/components/ui/icon/icon.tsx'
import { IconButton } from '@/components/ui/icon-button'
import { EditPackModal } from '@/features/packs/ui'
import { EditPackModalProps } from '@/features/packs/ui/edit-pack-modal/edit-pack-modal.tsx'

type Props = Omit<EditPackModalProps, 'open' | 'setOpen'>

export const EditControl: FC<Props> = ({ id, name, isPrivate, cover }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <EditPackModal
        open={open}
        setOpen={setOpen}
        id={id}
        name={name}
        isPrivate={isPrivate}
        cover={cover}
      />
      <IconButton
        icon={<Icon name={'edit'} width={18} height={18} />}
        onClick={() => setOpen(true)}
        small
      />
    </>
  )
}
