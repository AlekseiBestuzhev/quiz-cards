import { FC } from 'react'

import { PackForm } from '@/components/forms/pack'
import { ModalWindow } from '@/components/ui/modal-window'
import { useUpdateDeckMutation } from '@/features/packs/services'

export type EditPackModalProps = {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
  name: string
  isPrivate: boolean
  cover: string | null
}

export const EditPackModal: FC<Props> = ({ open, setOpen, id, name, isPrivate, cover }) => {
  const startValues = {
    name,
    isPrivate,
    cover,
  }

  const [editPack] = useUpdateDeckMutation()

  const editDeckHandler = async (data: FormData) => {
    try {
      editPack({ id, data })
      setOpen(false)
    } catch (e) {
      console.log(e)
    }
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
