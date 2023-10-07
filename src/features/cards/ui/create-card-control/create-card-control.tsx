import { FC, useState } from 'react'

import { Button } from '@/components/ui/button'
import { CreateCardModal } from '@/features/cards/ui'

type Props = {
  packId: string
}

export const CreateCardControl: FC<Props> = ({ packId }) => {
  const [createIsOpen, setCreateIsOpen] = useState(false)

  return (
    <>
      <CreateCardModal open={createIsOpen} setOpen={setCreateIsOpen} packId={packId} />
      <Button onClick={() => setCreateIsOpen(true)}>Add New Card</Button>
    </>
  )
}
