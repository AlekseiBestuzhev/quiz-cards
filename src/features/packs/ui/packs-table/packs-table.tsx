import { FC, memo } from 'react'

import { Table } from '@/components/ui/table'
import { TableHeader, TableHeaderProps } from '@/components/ui/table-header'
import { Deck } from '@/features/packs/services'
import { PackRow } from '@/features/packs/ui/pack-row/pack-row.tsx'

type Props = {
  items: Deck[]
  authUserId: string
} & Pick<TableHeaderProps, 'sort' | 'onSort'>

export const PacksTable: FC<Props> = memo(({ items, authUserId, ...rest }) => {
  const columns = [
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'cardsCount',
      title: 'Cards',
    },
    {
      key: 'updated',
      title: 'Last Updated',
    },
    {
      key: 'created',
      title: 'Created By',
    },
  ]

  if (!items.length) {
    return <Table.Empty>No content with these terms...</Table.Empty>
  }

  return (
    <Table.Root>
      <TableHeader columns={columns} {...rest} />
      <Table.Body>
        {items.map(pack => (
          <PackRow key={pack.id} pack={pack} authUserId={authUserId} />
        ))}
      </Table.Body>
    </Table.Root>
  )
})
