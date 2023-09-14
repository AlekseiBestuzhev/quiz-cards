import { FC } from 'react'

import { Table } from '@/components/ui/table'
import { DecksResponse } from '@/features/packs/services/types.ts'

type Props = Pick<DecksResponse, 'items'>

export const PacksTable: FC<Props> = ({ items }) => {
  if (!items.length) {
    return <Table.Empty>No content</Table.Empty>
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
          <Table.Row key={pack.id}>
            <Table.Cell>{pack.name}</Table.Cell>
            <Table.Cell>{pack.cardsCount}</Table.Cell>
            <Table.Cell>{new Date(pack.updated).toLocaleDateString()}</Table.Cell>
            <Table.Cell>{pack.author.name}</Table.Cell>
            <Table.Cell>icon buttons</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
