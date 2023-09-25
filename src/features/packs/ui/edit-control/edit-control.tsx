import { FC, useState } from 'react'

import { Icon } from '@/components/ui/icon/icon.tsx'
import { IconButton } from '@/components/ui/icon-button'
import { Deck } from '@/features/packs/services'
import { EditPackModal } from '@/features/packs/ui'

type Props = {
  pack: Deck
}

export const EditControl: FC<Props> = ({ pack }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <EditPackModal open={open} setOpen={setOpen} pack={pack} />
      <IconButton
        icon={<Icon name={'edit'} width={18} height={18} />}
        onClick={() => setOpen(true)}
        small
      />
    </>
  )
}
