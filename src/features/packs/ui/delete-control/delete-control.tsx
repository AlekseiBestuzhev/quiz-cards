import { FC, useState } from 'react'

import { Icon } from '@/components/ui/icon/icon.tsx'
import { IconButton } from '@/components/ui/icon-button'
import { DeleteDialog } from '@/features/packs/ui'

type Props = {
  id: string
}

export const DeleteControl: FC<Props> = ({ id }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <DeleteDialog id={id} open={open} setOpen={setOpen} />
      <IconButton
        icon={<Icon name={'trash-bin'} width={18} height={18} />}
        onClick={() => setOpen(true)}
        small
      />
    </>
  )
}
