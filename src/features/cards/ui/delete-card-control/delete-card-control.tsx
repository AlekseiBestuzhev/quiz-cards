import { FC, useState } from 'react'

import { requestHandler } from '@/common/utils'
import { Dialog } from '@/components/ui/dialog'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { IconButton } from '@/components/ui/icon-button'
import { useDeleteCardMutation } from '@/features/cards/services'

type Props = {
  id: string
}

export const DeleteCardControl: FC<Props> = ({ id }) => {
  const [deleteIsOpen, setDeleteIsOpen] = useState(false)

  const [deleteCard] = useDeleteCardMutation()

  const onConfirm = async () => {
    await requestHandler(async () => {
      await deleteCard({ id }).unwrap()
      setDeleteIsOpen(false)
    })
  }

  return (
    <>
      <Dialog
        title="Delete Card"
        description="Do you really want to remove this card?"
        buttonText="Delete Card"
        open={deleteIsOpen}
        setOpen={setDeleteIsOpen}
        onConfirm={onConfirm}
      />
      <IconButton
        icon={<Icon name={'trash-bin'} width={16} height={16} />}
        onClick={() => setDeleteIsOpen(true)}
        small
      />
    </>
  )
}
