import { FC } from 'react'

import { PackForm } from '@/components/forms/pack'
import { ModalWindow } from '@/components/ui/modal-window'
import { Deck, useUpdateDeckMutation } from '@/features/packs/services'

type Props = {
  open: boolean
  setOpen: (value: boolean) => void
  pack: Deck
}

export const EditPackModal: FC<Props> = ({ open, setOpen, pack }) => {
  const startValues = {
    name: pack.name,
    isPrivate: pack.isPrivate,
    cover: pack.cover,
  }

  const [editPack] = useUpdateDeckMutation()

  const editDeckHandler = (data: FormData) => {
    editPack({ id: pack.id, data })
    setOpen(false)
  }

  return (
    <ModalWindow open={open} setOpen={setOpen} title="Edit Pack">
      <PackForm
        onSubmit={editDeckHandler}
        onCancel={() => setOpen(false)}
        defaultValues={startValues}
      />
    </ModalWindow>
  )
}
