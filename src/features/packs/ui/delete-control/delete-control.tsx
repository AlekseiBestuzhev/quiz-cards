import { FC, useState } from 'react'

import { requestHandler } from '@/common/utils'
import { Dialog } from '@/components/ui/dialog'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { IconButton } from '@/components/ui/icon-button'
import { useDeleteDeckMutation } from '@/features/packs/services'

type Props = {
  id: string
  name: string
}

export const DeleteControl: FC<Props> = ({ id, name }) => {
  const [open, setOpen] = useState(false)

  const [deletePack] = useDeleteDeckMutation()

  const onConfirm = async () => {
    await requestHandler(async () => {
      await deletePack({ id }).unwrap()
      setOpen(false)
    })
  }

  return (
    <>
      <Dialog
        title="Delete Pack"
        description={`Do you really want to remove ${name}? All cards will be deleted.`}
        buttonText="Delete Pack"
        open={open}
        setOpen={setOpen}
        onConfirm={onConfirm}
        splitLines
      />
      <IconButton
        icon={<Icon name={'trash-bin'} width={18} height={18} />}
        onClick={() => setOpen(true)}
        small
      />
    </>
  )
}
