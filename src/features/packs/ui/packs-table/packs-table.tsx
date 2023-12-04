import { FC, memo } from 'react'

import { packsTableColumns } from '@/common/consts'
import { Table } from '@/components/ui/table'
import { TableHeader, TableHeaderProps } from '@/components/ui/table-header'
import { Deck } from '@/features/packs/services'
import { PackRow } from '@/features/packs/ui/pack-row/pack-row.tsx'

type Props = {
  items: Deck[]
  authUserId: string
} & Pick<TableHeaderProps, 'sort' | 'onSort'>

export const PacksTable: FC<Props> = memo(({ items, authUserId, ...rest }) => {
  if (!items.length) {
    return <Table.Empty>No content with these terms...</Table.Empty>
  }

  return (
    <Table.Root>
      <TableHeader columns={packsTableColumns} {...rest} />
      <Table.Body>
        {items.map(pack => (
          <PackRow key={pack.id} pack={pack} authUserId={authUserId} />
        ))}
      </Table.Body>
    </Table.Root>
  )
})
