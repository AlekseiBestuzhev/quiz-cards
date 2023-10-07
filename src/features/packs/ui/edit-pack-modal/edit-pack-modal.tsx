import { FC } from 'react'

import { errorNotification } from '@/common/utils'
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

export const EditPackModal: FC<EditPackModalProps> = ({
  open,
  setOpen,
  id,
  name,
  isPrivate,
  cover,
}) => {
  const startValues = {
    name,
    isPrivate,
    cover,
  }

  const [editPack] = useUpdateDeckMutation()

  const editDeckHandler = async (data: FormData) => {
    try {
      await editPack({ id, data }).unwrap()
      setOpen(false)
    } catch (error) {
      errorNotification(error)
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
