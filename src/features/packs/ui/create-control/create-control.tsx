import { useState } from 'react'

import { requestHandler } from '@/common/utils'
import { PackForm } from '@/components/forms/pack'
import { Button } from '@/components/ui/button'
import { ModalWindow } from '@/components/ui/modal-window'
import { useCreateDeckMutation } from '@/features/packs/services'

export const CreateControl = () => {
  const [open, setOpen] = useState(false)

  const [createDeck] = useCreateDeckMutation()

  const createDeckHandler = async (data: FormData) => {
    await requestHandler(async () => {
      await createDeck(data).unwrap()
      setOpen(false)
    })
  }

  return (
    <>
      <ModalWindow open={open} setOpen={setOpen} title="Create new pack">
        <PackForm onSubmit={createDeckHandler} onCancel={() => setOpen(false)} />
      </ModalWindow>
      <Button onClick={() => setOpen(true)}>Add New Pack</Button>
    </>
  )
}
