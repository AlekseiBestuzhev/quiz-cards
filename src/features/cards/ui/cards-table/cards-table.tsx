import { FC, memo } from 'react'

import { Card } from '../../services'

import { Table } from '@/components/ui/table'
import { TableHeader, TableHeaderProps } from '@/components/ui/table-header'
import { CardRow } from '@/features/cards/ui/card-row/card-row.tsx'

const allColumns = [
  {
    key: 'question',
    title: 'Question',
  },
  {
    key: 'answer',
    title: 'Answer',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'grade',
    title: 'Grade',
  },
  {
    key: 'controls',
    title: '',
    sortable: false,
  },
]

type Props = {
  cards: Card[]
  isMyPack: boolean
} & Pick<TableHeaderProps, 'sort' | 'onSort'>

export const CardsTable: FC<Props> = memo(({ cards, isMyPack, ...rest }) => {
  const columns = allColumns.filter(c => (isMyPack ? c : c.key !== 'controls'))

  if (!cards.length) {
    return <Table.Empty>No content with these terms...</Table.Empty>
  }

  return (
    <Table.Root>
      <TableHeader columns={columns} {...rest} />
      <Table.Body>
        {cards.map(card => (
          <CardRow key={card.id} card={card} isMyPack={isMyPack} />
        ))}
      </Table.Body>
    </Table.Root>
  )
})
