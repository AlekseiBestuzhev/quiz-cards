import { FC } from 'react'

import { Table } from '@/components/ui/table'
import { useGetMeQuery } from '@/features/auth'
import { UserResponse } from '@/features/auth/services/types.ts'
import { Deck } from '@/features/packs/services/types.ts'
import { PackRow } from '@/features/packs/ui/pack-row/pack-row.tsx'

type Props = {
  items: Deck[]
}

export const PacksTable: FC<Props> = ({ items }) => {
  const { data } = useGetMeQuery()

  const authUserId = (data as UserResponse).id

  if (!items.length) {
    return <Table.Empty>No content with these terms...</Table.Empty>
  }

  return (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Cards</Table.HeadCell>
          <Table.HeadCell>Last Updated</Table.HeadCell>
          <Table.HeadCell>Created by</Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {items.map(pack => (
          <PackRow key={pack.id} pack={pack} authUserId={authUserId} />
        ))}
      </Table.Body>
    </Table.Root>
  )
}
